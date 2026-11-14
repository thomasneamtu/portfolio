// Shared header, footer and project card component. No libraries required.
(() => {
  const data = window.portfolio, base = document.body.dataset.base || '';
  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }
  const header = el('div', 'container header-inner');
  const brand = el('a', 'brand', data.name);
  brand.href = base + 'index.html';
  header.append(brand);
  const nav = el('nav');
  nav.setAttribute('aria-label', 'Main navigation');
  for (const [label, url, key] of [['Projects', 'index.html', 'projects'], ['About', 'about.html', 'about'], ['Resume', 'resume.html', 'resume']]) {
    const a = el('a', 'nav-link', label);
    a.href = base + url;
    if (document.body.dataset.page === key) a.setAttribute('aria-current', 'page');
    nav.append(a);
  }
  header.append(nav);
  document.querySelector('[data-header]').append(header);
  document.querySelectorAll('[data-name]').forEach(n => n.textContent = data.name);
  document.querySelectorAll('[data-role]').forEach(n => n.textContent = data.role);
  const list = document.querySelector('[data-projects]');
  if (list) data.projects.forEach((p, i) => {
    const article = el('article', 'project'), a = el('a', 'project-card');
    a.href = base + p.href;
    const img = el('img', 'project-image');
    img.src = base + p.image;
    img.alt = ''; // Decorative; the project name labels the link.
    img.width = 1600; img.height = 700;
    img.loading = i ? 'lazy' : 'eager';
    img.style.objectPosition = p.position || 'center';
    const copy = el('div', 'project-copy');
    copy.append(el('p', 'project-type', p.type), el('h3', 'project-title', p.title), el('p', 'project-focus', p.focus));
    const arrow = el('span', 'project-arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    a.append(img, el('span', 'placeholder-label', 'Placeholder image'), copy, arrow);
    article.append(a); list.append(article);
  });
  const foot = el('div', 'container footer-inner');
  foot.append(el('span', '', '© ' + new Date().getFullYear() + ' ' + data.name), el('span', '', data.role));
  document.querySelector('[data-footer]').append(foot);
})();
