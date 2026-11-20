import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';
import { marked } from 'marked';
import { forceX, forceY, forceZ } from 'd3-force-3d';

/* ================= instellingen ================= */
const THEMES = {
  light: {
    bg: '#eaeae8', ink: '#141414', label: '#2a2a28', labelSoft: '#55554f',
    // zwart- en grijstinten per vak
    tones: ['#0a0a0a', '#1f1f1f', '#333333', '#474747', '#5a5a5a', '#2a2a2a', '#3d3d3d', '#515151'],
    link: 'rgba(20,20,20,0.16)', flow: '#141414', fresh: '#141414',
  },
  dark: {
    bg: '#0d0d0d', ink: '#f4f4f2', label: '#e8e8e6', labelSoft: '#a9a9a5',
    // wit- en grijstinten per vak
    tones: ['#f4f4f2', '#d9d9d6', '#bdbdb9', '#a3a39f', '#8c8c88', '#cbcbc7', '#b0b0ac', '#979793'],
    link: 'rgba(255,255,255,0.14)', flow: '#ffffff', fresh: '#ffffff',
  },
};
const TYPE_RANK = { opleiding: 0, jaar: 1, vak: 2, onderdeel: 3, chapter: 4, begrip: 5, demo: 6, oefening: 6, notitie: 7 };
const TYPE_SIZE = { opleiding: 16, jaar: 11, vak: 8, onderdeel: 5.5, chapter: 4.2, begrip: 2.6, demo: 2.4, oefening: 2.6, notitie: 2.4 };
const POP_MS = 1400;          // duur van het "opblazen" van een nieuw bolletje
const ORBIT_SPEED = 0.06;     // radialen per seconde dat de camera rond draait

const $ = id => document.getElementById(id);
const hash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutBack = t => { const c1 = 1.4, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

let theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
const T = () => THEMES[theme];
const toneOfVak = vak => T().tones[hash(vak) % T().tones.length];
function colorOf(n) {
  if (!n.vak || n.type === 'jaar' || n.type === 'opleiding') return T().ink;
  const base = new THREE.Color(toneOfVak(n.vak));
  // begrippen en oefeningen iets zachter dan de overzichten
  if (TYPE_RANK[n.type] >= 5) base.lerp(new THREE.Color(T().bg), 0.18);
  return '#' + base.getHexString();
}
const sizeOf = n => (TYPE_SIZE[n.type] ?? 2.5) + Math.min(n.degree, 40) * 0.05;

/* ================= data ================= */
const data = await fetch('graph.json').then(r => r.json());
const byId = new Map(data.nodes.map(n => [n.id, n]));
const byName = new Map();
for (const n of data.nodes) for (const k of [n.name, ...(n.aliases || [])]) if (!byName.has(k.toLowerCase())) byName.set(k.toLowerCase(), n);
const adj = new Map(data.nodes.map(n => [n.id, new Set()]));
for (const l of data.links) { adj.get(l.source).add(l.target); adj.get(l.target).add(l.source); }

// Groeivolgorde: breadth-first vanaf de root, overzichten eerst, dan begrippen.
function growthOrder() {
  const order = [], parent = new Map(), seen = new Set();
  const rank = id => TYPE_RANK[byId.get(id).type] ?? 9;
  const rankSort = (a, b) => rank(a) - rank(b) || byId.get(a).name.localeCompare(byId.get(b).name);
  const starts = [data.root, ...data.nodes.map(n => n.id).sort(rankSort)];
  for (const s of starts) {
    if (!s || seen.has(s)) continue;
    const q = [s]; seen.add(s);
    while (q.length) {
      const id = q.shift(); order.push(id);
      for (const nb of [...adj.get(id)].sort(rankSort)) if (!seen.has(nb)) { seen.add(nb); parent.set(nb, id); q.push(nb); }
    }
  }
  return { order, parent };
}
const { order, parent } = growthOrder();

/* ================= staat ================= */
let visible = new Set(), shownNodes = [], shownLinks = [], cursor = 0;
let playing = true, orbit = true, focusVak = null, selected = null, newest = null;
let manualUntil = 0;
let dragging = false, justDragged = false;                 // na een muisbeweging even geen automatische camera
const birth = new Map();             // id -> tijdstip van verschijnen
const allLinks = data.links.map(l => ({ ...l }));
const linksOf = new Map(data.nodes.map(n => [n.id, []]));
for (const l of allLinks) { linksOf.get(l.source).push(l); linksOf.get(l.target).push(l); }
const shownLinkKeys = new Set();
const idOf = x => typeof x === 'object' ? x.id : x;
const linkKey = l => [idOf(l.source), idOf(l.target)].sort().join('|');

$('count-total').textContent = data.nodes.length;

/* ================= graaf ================= */
const objects = new Map();
// cirkeltextuur voor de rimpel rond een nieuw bolletje
const RING_TEX = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  x.strokeStyle = '#fff'; x.lineWidth = 5;
  x.beginPath(); x.arc(64, 64, 58, 0, Math.PI * 2); x.stroke();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; return tex;
})();
function makeObject(n) {
  const g = new THREE.Group();
  const r = sizeOf(n);
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(r, 24, 16),
    new THREE.MeshStandardMaterial({ color: colorOf(n), roughness: 0.55, metalness: 0.08, transparent: true, opacity: 0.96 })
  );
  g.add(mesh);
  const big = TYPE_RANK[n.type] <= 4;
  const label = new SpriteText(n.name, big ? Math.max(3, r * 0.42) : 2.2, big ? T().label : T().labelSoft);
  label.fontFace = 'Inter, Helvetica Neue, Helvetica, Arial, sans-serif';
  label.fontWeight = big ? '800' : '500';
  label.backgroundColor = false;
  label.position.y = -(r + (big ? 3.5 : 2.6));
  label.material.depthWrite = false;
  label.material.transparent = true;
  g.add(label);
  // rimpel die bij het verschijnen naar buiten uitdeint
  const ripple = new THREE.Sprite(new THREE.SpriteMaterial({ map: RING_TEX, color: colorOf(n), transparent: true, opacity: 0, depthWrite: false }));
  ripple.scale.setScalar(r * 2);
  g.add(ripple);
  mesh.material.opacity = 0;
  label.material.opacity = 0;
  g.userData = { mesh, label, ripple, big, r, base: 0.96, labelBase: 1 };
  mesh.scale.setScalar(0.001); // groeit vanuit niets (zie animate)
  objects.set(n.id, g);
  return g;
}

const isFresh = l => l.__fresh > performance.now();
// elke verbinding krijgt een eigen materiaal, zodat ze apart kan infaden en verkleuren
const LINK_BASE = () => theme === 'dark' ? 0.16 : 0.18;
const LINK_FRESH = 0.85;
function linkMat(l) {
  if (!l.__mat) l.__mat = new THREE.MeshBasicMaterial({ color: T().ink, transparent: true, opacity: 0, depthWrite: false });
  return l.__mat;
}
const youngLinks = new Set();
const Graph = ForceGraph3D({ controlType: 'orbit' })($('graph'))
  .backgroundColor(T().bg)
  .showNavInfo(false)
  .nodeId('id')
  .nodeThreeObject(makeObject)
  .nodeLabel(n => `<div class="tooltip"><b>${esc(n.name)}</b>${n.summary ? '<br>' + esc(n.summary) : ''}</div>`)
  .linkWidth(0.35)
  .linkMaterial(linkMat)
  // over elke verbinding stromen bolletjes; over nieuwe verbindingen meer
  .linkDirectionalParticles(l => isFresh(l) ? 4 : 1)
  .linkDirectionalParticleWidth(l => isFresh(l) ? 1.5 : 0.9)
  .linkDirectionalParticleSpeed(l => isFresh(l) ? 0.009 : 0.0035)
  .linkDirectionalParticleColor(() => T().flow)
  .d3AlphaDecay(0.011)        // trager afkoelen = vloeiender bewegen
  .d3VelocityDecay(0.6)      // meer "wrijving" = geen schokken bij nieuwe bolletjes
  .warmupTicks(0)
  .onNodeClick(n => { if (!justDragged) openNode(n.id, true); })
  // slepen: camera staat stil zolang je sleept, daarna zweeft het bolletje terug
  .onNodeDrag(n => { dragging = true; manualUntil = performance.now() + 6000; })
  .onNodeDragEnd(n => {
    dragging = false; justDragged = true; setTimeout(() => { justDragged = false; }, 150);
    n.fx = n.fy = n.fz = undefined;            // niet vastpinnen
    manualUntil = performance.now() + 4000;
  })
  .onNodeHover(n => { $('graph').style.cursor = n ? 'pointer' : ''; })
  .onBackgroundClick(() => closePanel());

// afstoting enkel op korte afstand, zodat losse vakken niet wegdrijven
Graph.d3Force('charge').strength(n => -38 - sizeOf(n) * 6).distanceMax(230);
Graph.d3Force('link').distance(l => {
  const a = byId.get(idOf(l.source)), b = byId.get(idOf(l.target));
  return 18 + (sizeOf(a) + sizeOf(b)) * 2.0;
});
// zachte zwaartekracht naar het midden: houdt alle vakken bij elkaar
const GRAVITY = 0.04;
Graph.d3Force('gx', forceX(0).strength(GRAVITY));
Graph.d3Force('gy', forceY(0).strength(GRAVITY));
Graph.d3Force('gz', forceZ(0).strength(GRAVITY));

// belichting
Graph.lights().forEach(l => Graph.scene().remove(l));
const ambient = new THREE.AmbientLight(0xffffff, 1.6);
const keyLight = new THREE.DirectionalLight(0xffffff, 1.8); keyLight.position.set(80, 140, 120);
const rim = new THREE.DirectionalLight(0xffffff, 0.6); rim.position.set(-120, -60, -100);
Graph.scene().add(ambient, keyLight, rim);
function setLights() {
  const dark = theme === 'dark';
  ambient.intensity = dark ? 1.1 : 0.55;   // lichte modus: minder licht zodat de bollen echt zwart blijven
  keyLight.intensity = dark ? 1.8 : 0.9;
  rim.intensity = dark ? 0.6 : 0.25;
  $('btn-theme').textContent = dark ? '☀' : '☾';
}
setLights();

const canvas = Graph.renderer().domElement;
canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); $('now').innerHTML = '<b>Grafische kaart herstarten…</b>'; });
canvas.addEventListener('webglcontextrestored', () => location.reload());
const controls = Graph.controls();
controls.enableDamping = true;
controls.dampingFactor = 0.06;
const camera = Graph.camera();
camera.near = 4;
camera.updateProjectionMatrix();
controls.minDistance = 60;     // niet tot in de bollen inzoomen
controls.maxDistance = 6000;
// zodra jij de camera vastpakt, stopt het automatisch draaien even
controls.addEventListener('start', () => { manualUntil = performance.now() + 9000; });
$('graph').addEventListener('wheel', () => { manualUntil = performance.now() + 9000; }, { passive: true });

function fitToPanel(open) {
  const w = open && innerWidth > 900 ? innerWidth - $('panel').offsetWidth : innerWidth;
  Graph.width(w).height(innerHeight);
}
addEventListener('resize', () => fitToPanel($('panel').classList.contains('open')));

/* ================= groeien ================= */
function reveal(id, from) {
  if (visible.has(id)) return false;
  const n = byId.get(id);
  visible.add(id);
  const p = from && byId.get(from);
  if (p && p.x !== undefined) {           // groeit uit zijn "ouder"
    const j = () => (Math.random() - 0.5) * 1.2;
    n.x = p.x + j(); n.y = p.y + j(); n.z = p.z + j();
  } else if (n.x === undefined) { n.x = n.y = n.z = 0; }
  shownNodes.push(n);
  birth.set(id, performance.now());
  const freshUntil = performance.now() + Math.max(2500, speedMs() * 3);
  for (const l of linksOf.get(id)) {
    const other = idOf(l.source) === id ? idOf(l.target) : idOf(l.source);
    const k = linkKey(l);
    if (visible.has(other) && !shownLinkKeys.has(k)) {
      shownLinkKeys.add(k);
      l.__fresh = freshUntil;
      l.__born = performance.now();
      if (l.__mat) l.__mat.opacity = 0;
      youngLinks.add(l);
      shownLinks.push(l);
    }
  }
  return true;
}
// de graaf krijgt telkens een KOPIE van de lijsten: zo rekent de simulatie nooit
// met een verbinding die nog niet aan zijn bolletjes gekoppeld is
function pushData() { Graph.graphData({ nodes: shownNodes.slice(), links: shownLinks.slice() }); $('count-shown').textContent = visible.size; }
// "verse" verbindingen terug normaal maken
setInterval(() => {
  Graph.linkDirectionalParticles(Graph.linkDirectionalParticles())
    .linkDirectionalParticleWidth(Graph.linkDirectionalParticleWidth())
    .linkDirectionalParticleSpeed(Graph.linkDirectionalParticleSpeed());
}, 1200);

function showNow(n) {
  const el = $('now');
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerHTML = `<b>${esc(n.name)}</b> · ${esc([n.vak, n.jaar].filter(Boolean).join(' · ') || n.type)}`;
    el.style.opacity = 1;
  }, 220);
}

function speedMs() { const v = +$('speed').value; return Math.round(2600 * Math.pow(0.05, v / 100)); } // 2600 → ±130 ms
let timer = null;
function step() {
  timer = null;
  if (!playing) return;
  const ms = speedMs();
  const batch = ms < 220 ? 3 : ms < 450 ? 2 : 1;
  let last = null;
  for (let i = 0; i < batch && cursor < order.length; i++) {
    const id = order[cursor++];
    if (reveal(id, parent.get(id))) last = byId.get(id);
  }
  if (last) { pushData(); showNow(last); newest = last; }
  if (cursor >= order.length) {
    playing = false; setPlayIcon(); newest = null;
    setTimeout(() => { $('now').innerHTML = '<b>Klaar</b> · klik op een bolletje of zoek een begrip'; }, 400);
    return;
  }
  timer = setTimeout(step, ms);
}
function play(on) { playing = on; setPlayIcon(); if (on && !timer && cursor < order.length) step(); }
function setPlayIcon() { $('btn-play').textContent = playing ? '❚❚' : '▶'; $('btn-play').setAttribute('aria-label', playing ? 'Pauze' : 'Verder'); }

function showAll() {
  play(false);
  while (cursor < order.length) { const id = order[cursor++]; reveal(id, parent.get(id)); }
  newest = null;
  pushData();
}
function restart() {
  closePanel();
  for (const n of data.nodes) for (const k of ['x', 'y', 'z', 'vx', 'vy', 'vz', 'fx', 'fy', 'fz']) delete n[k];
  visible = new Set(); shownNodes = []; shownLinks = []; shownLinkKeys.clear(); cursor = 0; newest = null;
  birth.clear();
  pushData();
  play(true);
}

/* ================= camera =================
   De camera staat altijd BUITEN de wolk van bolletjes (straal = grootte graaf + marge),
   draait langzaam rond, en kijkt naar een punt tussen het midden en het nieuwste bolletje.
   Zo komt er nooit een bol vlak voor de lens. */
const cam = { target: new THREE.Vector3(), radius: 420, angle: 0, elev: 0.28, flyFrom: null, flyTo: null, flyStart: 0, flyMs: 0 };
function graphBounds() {
  const c = new THREE.Vector3(); let k = 0;
  for (const n of shownNodes) if (Number.isFinite(n.x) && Number.isFinite(n.y) && Number.isFinite(n.z)) { c.x += n.x; c.y += n.y; c.z += n.z; k++; }
  if (k) c.divideScalar(k);
  const d = shownNodes.filter(n => Number.isFinite(n.x)).map(n => Math.hypot(n.x - c.x, n.y - c.y, n.z - c.z)).sort((a, b) => a - b);
  const r = d.length ? d[Math.floor(d.length * 0.92)] || d[d.length - 1] : 0;
  return { c, r };
}
let bounds = { c: new THREE.Vector3(), r: 0 }, boundsAt = 0;

function autoCamera(dt, now) {
  if (now - boundsAt > 250) { bounds = graphBounds(); boundsAt = now; }
  const focus = (selected && byId.get(selected)) || newest;
  const want = bounds.c.clone();
  if (focus && Number.isFinite(focus.x)) want.lerp(new THREE.Vector3(focus.x, focus.y, focus.z), selected ? 0.85 : 0.55);
  const wantRadius = Math.max(260, bounds.r * 1.35 + 160) * (selected ? 0.8 : 1);
  const k = 1 - Math.exp(-dt * 1.2);          // zachte, framerate-onafhankelijke demping
  cam.target.lerp(want, k);
  cam.radius = lerp(cam.radius, wantRadius, 1 - Math.exp(-dt * 0.8));
  if (orbit && !reduceMotion) cam.angle += dt * ORBIT_SPEED;
  const elev = cam.elev + Math.sin(now / 9000) * 0.12;   // licht op en neer golven
  const pos = new THREE.Vector3(
    bounds.c.x + Math.cos(cam.angle) * Math.cos(elev) * cam.radius,
    bounds.c.y + Math.sin(elev) * cam.radius,
    bounds.c.z + Math.sin(cam.angle) * Math.cos(elev) * cam.radius,
  );
  camera.position.lerp(pos, 1 - Math.exp(-dt * 2));
  controls.target.copy(cam.target);
  camera.lookAt(cam.target);
}
// wanneer je de camera zelf beweegt: hoek overnemen zodat het automatisch draaien er vloeiend op aansluit
function syncAngleFromCamera() {
  const v = camera.position.clone().sub(bounds.c);
  cam.angle = Math.atan2(v.z, v.x);
  cam.elev = Math.max(-0.6, Math.min(0.9, Math.asin(v.y / (v.length() || 1))));
  cam.radius = v.length();
  cam.target.copy(controls.target);
}

/* ================= veiligheidsnet camera =================
   1) ongeldige positie (NaN) → camera terugzetten
   2) camera te dicht bij een bol → zachtjes wegduwen, zodat er nooit een bol je scherm vult */
const tmpV = new THREE.Vector3();
let safeCheckAt = 0;
function keepCameraSafe(now) {
  const p = camera.position;
  if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.z) ||
      !Number.isFinite(controls.target.x)) {
    p.set(0, 120, 420); controls.target.set(0, 0, 0); cam.target.set(0, 0, 0); cam.radius = 420;
    camera.lookAt(0, 0, 0);
    return;
  }
  if (now - safeCheckAt < 50) return; safeCheckAt = now;
  for (const n of shownNodes) {
    if (n.x === undefined) continue;
    if (!Number.isFinite(n.x) || !Number.isFinite(n.y) || !Number.isFinite(n.z) || Math.abs(n.x) + Math.abs(n.y) + Math.abs(n.z) > 50000) {
      // bolletje is "weggeschoten": terug naar het midden en snelheid op nul
      n.x = n.y = n.z = 0; n.vx = n.vy = n.vz = 0; n.fx = n.fy = n.fz = undefined;
      continue;
    }
    const minD = sizeOf(n) * 4 + 18;
    tmpV.set(p.x - n.x, p.y - n.y, p.z - n.z);
    const d = tmpV.length();
    if (d < minD) {
      if (d < 0.001) tmpV.set(0, 0, 1); else tmpV.divideScalar(d);
      p.set(n.x + tmpV.x * minD, n.y + tmpV.y * minD, n.z + tmpV.z * minD);
    }
  }
}

/* ================= animatielus ================= */
let last = performance.now(), wasManual = false;
(function animate(now) {
  now = now || performance.now();
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  const k = 1 - Math.exp(-dt * 6); // zachte overgang voor dimmen/oplichten
  for (const n of shownNodes) {
    const o = objects.get(n.id); if (!o) continue;
    const u = o.userData;
    const t0 = birth.get(n.id);
    let grow = 1;
    if (t0 !== undefined) {
      const a = Math.min(1, (now - t0) / POP_MS);
      grow = reduceMotion ? 1 : easeOutBack(a);
      // rimpel: deint uit en vervaagt
      u.ripple.scale.setScalar(u.r * (2 + a * 7));
      u.ripple.material.opacity = reduceMotion ? 0 : 0.55 * (1 - a) * (1 - a);
      u.mesh.material.opacity = u.base * Math.min(1, a * 2.2);
      u.label.material.opacity = u.labelBase * Math.max(0, Math.min(1, (a - 0.35) / 0.5));
      if (a >= 1) { birth.delete(n.id); u.ripple.visible = false; }
    } else {
      u.mesh.material.opacity += (u.base - u.mesh.material.opacity) * k;
      u.label.material.opacity += (u.labelBase - u.label.material.opacity) * k;
    }
    u.mesh.scale.setScalar(Math.max(0.001, grow));
  }
  // verbindingen: infaden, fel beginnen en langzaam naar de normale kleur
  const inkC = new THREE.Color(T().ink), baseO = LINK_BASE();
  for (const l of youngLinks) {
    if (!l.__mat) continue;
    const age = now - l.__born;
    const fadeIn = Math.min(1, age / 900);
    const fresh = Math.max(0, Math.min(1, (l.__fresh - now) / 1500)); // 1 = vers, 0 = normaal
    l.__mat.color.copy(inkC);
    const target = (baseO + (LINK_FRESH - baseO) * fresh) * (l.__dim ? 0.25 : 1);
    if (fadeIn < 1) l.__mat.opacity = fadeIn * target;
    else l.__mat.opacity += (target - l.__mat.opacity) * k;
    if (fadeIn >= 1 && fresh <= 0 && Math.abs(target - l.__mat.opacity) < 0.005) youngLinks.delete(l);
  }
  const manual = dragging || now < manualUntil;
  if (manual) { wasManual = true; }
  else {
    if (wasManual) { syncAngleFromCamera(); wasManual = false; }
    autoCamera(dt, now);
  }
  if (!dragging) keepCameraSafe(now);
  requestAnimationFrame(animate);
})();

/* ================= thema ================= */
function applyTheme() {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.querySelector('meta[name=theme-color]').content = T().bg;
  Graph.backgroundColor(T().bg);
  for (const n of data.nodes) {
    const o = objects.get(n.id); if (!o) continue;
    o.userData.mesh.material.color.set(colorOf(n));
    o.userData.label.color = o.userData.big ? T().label : T().labelSoft;
    o.userData.ripple.material.color.set(colorOf(n));
  }
  for (const l of shownLinks) if (l.__mat) { l.__mat.color.set(T().ink); if (!youngLinks.has(l)) l.__mat.opacity = LINK_BASE() * (l.__dim ? 0.25 : 1); }
  Graph.linkDirectionalParticleColor(Graph.linkDirectionalParticleColor());
  setLights();
  buildLegend();
  try { localStorage.setItem('vault-theme', theme); } catch (e) {}
}
$('btn-theme').onclick = () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); };

/* ================= focus / filter ================= */
function applyFocus() {
  for (const n of data.nodes) {
    const o = objects.get(n.id); if (!o) continue;
    const dim = (focusVak && n.vak !== focusVak && !['opleiding', 'jaar'].includes(n.type)) ||
      (selected && selected !== n.id && !adj.get(selected).has(n.id));
    o.userData.base = dim ? 0.1 : 0.96;
    o.userData.labelBase = dim ? 0.08 : 1;
  }
  for (const l of shownLinks) {
    const s = idOf(l.source), t = idOf(l.target);
    l.__dim = !!selected && s !== selected && t !== selected;
    youngLinks.add(l); // laat de animatielus de nieuwe doorzichtigheid vloeiend instellen
    if (!l.__born) l.__born = 0;
  }
  Graph.linkVisibility(l => {
    if (!focusVak) return true;
    const s = byId.get(idOf(l.source)), t = byId.get(idOf(l.target));
    return s.vak === focusVak || t.vak === focusVak;
  });
}

/* ================= legende ================= */
function buildLegend() {
  const el = $('legend'); el.innerHTML = '';
  const perJaar = new Map();
  for (const n of data.nodes) if (n.vak) {
    const j = n.jaar || 'Overige'; if (!perJaar.has(j)) perJaar.set(j, new Set()); perJaar.get(j).add(n.vak);
  }
  for (const [jaar, vakken] of [...perJaar].sort()) {
    const h = document.createElement('div'); h.className = 'year'; h.textContent = jaar; el.append(h);
    for (const vak of [...vakken].sort()) {
      const b = document.createElement('button');
      b.className = focusVak === vak ? 'on' : '';
      b.innerHTML = `<span class="dot" style="background:${toneOfVak(vak)}"></span>${esc(vak)}`;
      b.onclick = () => {
        focusVak = focusVak === vak ? null : vak;
        buildLegend(); applyFocus();
        if (focusVak && !shownNodes.some(n => n.vak === vak)) showAll();
        if (focusVak) { const v = data.nodes.find(n => n.type === 'vak' && n.name === vak); if (v) { selected = null; newest = v; } }
      };
      el.append(b);
    }
  }
}

/* ================= paneel ================= */
function wikiToHtml(md) {
  return md.replace(/(!?)\[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]/g, (_, bang, target, _h, text) => {
    const n = byName.get(target.trim().toLowerCase());
    const label = text || target;
    return n ? `<a class="wl" data-node="${n.id}">${esc(label)}</a>` : esc(label);
  });
}
marked.setOptions({ gfm: true, breaks: false });
function openNode(id, fromClick = false) {
  const n = byId.get(id); if (!n) return;
  if (!visible.has(id)) { reveal(id, [...adj.get(id)].find(x => visible.has(x))); pushData(); }
  if (fromClick) play(false);
  selected = id; manualUntil = 0; applyFocus();
  $('panel-meta').textContent = [n.jaar, n.vak, n.type].filter(Boolean).join(' · ');
  $('panel-body').innerHTML = marked.parse(wikiToHtml(n.md.startsWith('# ') ? n.md : `# ${n.name}\n\n${n.md}`));
  $('panel-body').querySelectorAll('a:not(.wl)').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
  const nbs = [...adj.get(id)].map(x => byId.get(x)).sort((a, b) => (TYPE_RANK[a.type] ?? 9) - (TYPE_RANK[b.type] ?? 9) || a.name.localeCompare(b.name));
  $('panel-links').innerHTML = nbs.length ? `<div class="eyebrow" style="margin-bottom:8px">Verbonden (${nbs.length})</div>` +
    nbs.map(m => `<span class="chip" data-node="${m.id}">${esc(m.name)}</span>`).join('') : '';
  $('panel').classList.add('open'); $('panel').setAttribute('aria-hidden', 'false');
  fitToPanel(true);
  $('panel').scrollTop = 0;
  showNow(n);
  const url = new URL(location); url.searchParams.set('term', slugName(n.name)); history.replaceState(null, '', url);
}
function closePanel() {
  selected = null; applyFocus();
  $('panel').classList.remove('open'); $('panel').setAttribute('aria-hidden', 'true');
  fitToPanel(false);
  const url = new URL(location); url.searchParams.delete('term'); history.replaceState(null, '', url);
}
$('panel').addEventListener('click', e => { const t = e.target.closest('[data-node]'); if (t) { e.preventDefault(); openNode(t.dataset.node, true); } });
$('panel-close').onclick = closePanel;

/* ================= zoeken ================= */
const slugName = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
let hits = [], hi = 0;
function search(q) {
  q = q.trim().toLowerCase();
  if (!q) { hits = []; renderHits(); return; }
  const score = n => {
    const names = [n.name, ...(n.aliases || [])].map(s => s.toLowerCase());
    if (names.some(s => s === q)) return 0;
    if (names.some(s => s.startsWith(q))) return 1;
    if (names.some(s => s.includes(q))) return 2;
    if ((n.summary || '').toLowerCase().includes(q)) return 3;
    return 9;
  };
  hits = data.nodes.map(n => [score(n), n]).filter(([s]) => s < 9).sort((a, b) => a[0] - b[0] || a[1].name.length - b[1].name.length).slice(0, 12).map(x => x[1]);
  hi = 0; renderHits();
}
function renderHits() {
  const ul = $('results');
  ul.innerHTML = hits.map((n, i) => `<li role="option" aria-selected="${i === hi}" data-node="${n.id}">${esc(n.name)}<small>${esc([n.vak, n.type].filter(Boolean).join(' · '))}</small></li>`).join('');
  ul.classList.toggle('open', hits.length > 0);
}
$('search').addEventListener('input', e => search(e.target.value));
$('search').addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { hi = Math.min(hi + 1, hits.length - 1); renderHits(); e.preventDefault(); }
  if (e.key === 'ArrowUp') { hi = Math.max(hi - 1, 0); renderHits(); e.preventDefault(); }
  if (e.key === 'Enter' && hits[hi]) { openNode(hits[hi].id, true); $('results').classList.remove('open'); e.target.blur(); }
  if (e.key === 'Escape') { $('results').classList.remove('open'); e.target.blur(); }
});
$('results').addEventListener('mousedown', e => { const li = e.target.closest('li'); if (li) { openNode(li.dataset.node, true); $('results').classList.remove('open'); } });

/* ================= knoppen ================= */
$('btn-play').onclick = () => play(!playing);
$('btn-orbit').onclick = () => { orbit = !orbit; $('btn-orbit').classList.toggle('on', orbit); };
$('btn-all').onclick = showAll;
$('btn-restart').onclick = restart;
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space') { e.preventDefault(); play(!playing); }
  if (e.key === 'r' || e.key === 'R') $('btn-orbit').click();
  if (e.key === 'd' || e.key === 'D') $('btn-theme').click();
  if (e.key === 'Escape') closePanel();
  if (e.key === '/') { e.preventDefault(); $('search').focus(); }
});

function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

/* ================= start ================= */
buildLegend();
camera.position.set(0, 120, 420);
requestAnimationFrame(() => { $('intro-bar').style.width = '100%'; });
const term = new URL(location).searchParams.get('term');
setTimeout(() => {
  $('intro').classList.add('gone');
  if (term) {
    const n = data.nodes.find(x => slugName(x.name) === term) || byName.get(term.replace(/-/g, ' '));
    showAll();
    if (n) setTimeout(() => openNode(n.id), 1800);
  } else play(true);
}, 1700);
