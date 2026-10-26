import './typewriter.js';
import './contact.js';

const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };
const load = (name) => fetch(`data/${name}.json`).then((r) => r.json());

function renderSkills(data) {
  const grid = document.getElementById('skills-grid');
  data.forEach(({ title, items }) => {
    const card = el('div', 'schema-card');
    card.append(el('div', 'schema-card-head', title));
    const ul = el('ul');
    items.forEach(([name, level]) => { const li = el('li', '', name); li.append(el('span', 'type', level)); ul.append(li); });
    card.append(ul); grid.append(card);
  });
}

function renderCerts(data) {
  const ul = document.getElementById('cert-list');
  data.forEach(({ name, badge, date }) => {
    const li = el('li'); const d = el('span', 'cert-date');
    if (badge) d.append(el('span', `badge ${badge === 'preparing' || badge === 'in progress' || badge === 'final project' ? 'prog' : 'done'}`, badge));
    if (date) d.append(document.createTextNode(`${badge ? ' · ' : ''}${date}`));
    li.append(el('span', 'cert-name', name), d); ul.append(li);
  });
}

function renderProjects(data) {
  const grid = document.getElementById('projects-grid');
  const filters = document.getElementById('filters');
  const draw = (tag) => {
    grid.replaceChildren();
    data.filter((p) => tag === 'all' || p.tags.includes(tag)).forEach((p) => {
      const card = el('div', 'proj-card'); const name = el('div', 'proj-name', p.name);
      if (p.status) name.append(' ', el('span', 'badge prog', p.status));
      card.append(name, el('div', 'proj-desc', p.desc), el('span', 'proj-tag', p.tech));
      const links = el('div', 'proj-links');
      [['demo', 'live demo ↗'], ['code', 'code ↗']].forEach(([k, label]) => {
        if (!p[k]) return;
        const a = el('a', '', label); a.href = p[k]; a.target = '_blank'; a.rel = 'noopener'; links.append(a);
      });
      if (links.children.length) card.append(links);
      grid.append(card);
    });
  };
  ['all', 'fullstack', 'frontend'].forEach((t) => {
    const b = el('button', 'tag', t); b.type = 'button'; b.setAttribute('aria-pressed', t === 'all');
    b.addEventListener('click', () => { filters.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b)); draw(t); });
    filters.append(b);
  });
  draw('all');
}

Promise.all([load('skills'), load('certifications'), load('projects')])
  .then(([s, c, p]) => { renderSkills(s); renderCerts(c); renderProjects(p); })
  .catch(() => { document.getElementById('projects-grid').textContent = 'Could not load data. Serve the site over http (Live Server).'; });

const set = (id, text) => { document.getElementById(id).textContent = text; };
load('profile').then(({ about, experience }) => {
  set('p-headline', about.headline); set('p-meta', about.meta); set('p-intro', about.intro); set('p-status', about.status);
  about.tags.forEach((t) => document.getElementById('p-tags').append(el('span', 'tag', t)));
  const list = document.getElementById('xp-list');
  experience.forEach(({ period, role, client, desc }) => {
    const row = el('div', 'xp-row'); const body = el('div');
    body.append(el('p', 'xp-role', role), el('span', 'xp-client', client), el('p', 'xp-desc', desc));
    row.append(el('div', 'xp-period', period), body); list.append(row);
  });
});