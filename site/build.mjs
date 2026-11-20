// Zet de Obsidian-vault om naar dist/graph.json en kopieert de site.
// Werkt automatisch voor elk jaar: vault/<jaar>/<Vak>/... (1ste, 2de, 3de jaar, ...).
// Gebruik: node build.mjs   (vanuit de map site/)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const VAULT = path.resolve(here, '..', 'vault');
const DIST = path.resolve(here, 'dist');
const SKIP = new Set(['.obsidian', 'Templates', '.trash']);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name) || (e.isDirectory() && e.name.startsWith('.'))) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// Eenvoudige frontmatter-parser (key: value, lijsten [a, b])
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      v = v.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else v = v.replace(/^["']|["']$/g, '');
    meta[kv[1]] = v;
  }
  return { meta, body: text.slice(m[0].length) };
}

const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const files = walk(VAULT);
const nodes = [];
const byName = new Map(); // lowercase naam/alias -> node

for (const file of files) {
  const rel = path.relative(VAULT, file).split(path.sep);
  const name = rel[rel.length - 1].replace(/\.md$/, '');
  const { meta, body } = parseFrontmatter(fs.readFileSync(file, 'utf8'));
  // jaar = eerste map als die op "jaar" eindigt (bv. "3de jaar")
  const jaar = rel.length > 1 && /jaar$/i.test(rel[0]) ? rel[0] : (meta.type === 'jaar' ? name : null);
  // vak = frontmatter of de map onder het jaar
  let vak = meta.vak || (jaar && rel.length > 2 ? rel[1] : null);
  if (meta.type === 'vak') vak = name;
  const type = meta.type || (rel.includes('Begrippen') ? 'begrip' : rel.includes('Oefeningen') ? 'oefening' : 'notitie');
  const aliases = Array.isArray(meta.aliases) ? meta.aliases : meta.aliases ? [meta.aliases] : [];
  const firstLine = (body.match(/^>\s*(.+)$/m) || [])[1] || '';
  const node = {
    id: slug(rel.join('/').replace(/\.md$/, '')),
    name, type, jaar, vak: vak || null, groep: meta.groep || null,
    aliases, summary: firstLine.replace(/\*\*|\[\[|\]\]/g, '').replace(/\|[^\]]*?(?=\s|$)/g, '').slice(0, 220),
    md: body.trim(),
  };
  nodes.push(node);
  for (const key of [name, ...aliases]) if (!byName.has(key.toLowerCase())) byName.set(key.toLowerCase(), node);
}

// Links uit [[wikilinks]] (ook [[naam|tekst]] en [[naam#kop]])
const links = [];
const seen = new Set();
const unresolved = new Set();
for (const n of nodes) {
  for (const m of n.md.matchAll(/!?\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)) {
    const target = byName.get(m[1].trim().toLowerCase());
    if (!target) { unresolved.add(m[1].trim()); continue; }
    if (target === n) continue;
    const key = [n.id, target.id].sort().join('|');
    if (seen.has(key)) continue;
    seen.add(key);
    links.push({ source: n.id, target: target.id });
  }
}

// Root: "IT Factory" (opleiding) of anders het eerste jaar-overzicht
const root = nodes.find(n => n.type === 'opleiding') || nodes.find(n => n.type === 'jaar') || nodes[0];
const deg = new Map();
for (const l of links) for (const k of [l.source, l.target]) deg.set(k, (deg.get(k) || 0) + 1);
for (const n of nodes) n.degree = deg.get(n.id) || 0;

// Nodes zonder enige link toch aan hun vak/jaar hangen, zodat niets los zweeft
for (const n of nodes) {
  if (n.degree > 0 || n === root) continue;
  const parent = nodes.find(p => p.type === 'vak' && p.name === n.vak) || nodes.find(p => p.type === 'jaar' && p.name === n.jaar) || root;
  if (parent && parent !== n) { links.push({ source: parent.id, target: n.id }); n.degree = 1; }
}

const jaren = [...new Set(nodes.map(n => n.jaar).filter(Boolean))].sort();
const vakken = [...new Set(nodes.map(n => n.vak).filter(Boolean))].sort();

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'graph.json'), JSON.stringify({
  generated: new Date().toISOString(), root: root?.id, jaren, vakken, nodes, links,
}));
for (const f of ['index.html', 'style.css']) fs.copyFileSync(path.join(here, 'src', f), path.join(DIST, f));

console.log(`✔ ${nodes.length} notities, ${links.length} verbindingen, ${vakken.length} vakken, jaren: ${jaren.join(', ')}`);
if (unresolved.size) console.log(`⚠ ${unresolved.size} links zonder notitie:`, [...unresolved].slice(0, 15).join(', '));
