import { site } from '../site.mjs';
import { esc } from '../lib/html.mjs';
import { services } from '../content/services/index.mjs';

export const phoneLink = (cls = '') => `<a class="${cls}" href="${site.phoneHref}">${esc(site.phone)}</a>`;

export function leadForm({ id, heading, intro, button = 'Get my free quote', withMessage = false, preset = '', layout = 'grid' }) {
  const f = (n) => `${id}-${n}`;
  const opts = site.projectTypes.map((t) => `<option${t === preset ? ' selected' : ''}>${esc(t)}</option>`).join('');
  return `<form class="qf qf--${layout}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${heading ? `<p class="qf__title">${esc(heading)}</p>` : ''}
  ${intro ? `<p class="qf__intro">${esc(intro)}</p>` : ''}
  <div class="qf__grid">
    <div class="in"><label for="${f('name')}">Full name</label><input id="${f('name')}" name="name" type="text" autocomplete="name" required maxlength="80" placeholder="Jordan Smith"><p class="in__err" aria-live="polite"></p></div>
    <div class="in"><label for="${f('phone')}">Phone</label><input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="(928) 000-0000"><p class="in__err" aria-live="polite"></p></div>
    <div class="in"><label for="${f('email')}">Email</label><input id="${f('email')}" name="email" type="email" autocomplete="email" required maxlength="120" placeholder="you@email.com"><p class="in__err" aria-live="polite"></p></div>
    <div class="in"><label for="${f('project')}">Project</label><select id="${f('project')}" name="project" required><option value="">Choose a project</option>${opts}</select><p class="in__err" aria-live="polite"></p></div>
    ${withMessage ? `<div class="in in--wide"><label for="${f('message')}">Details <span class="in__opt">(optional)</span></label><textarea id="${f('message')}" name="message" rows="3" maxlength="2000" placeholder="Garage size, RV or boat bay, pool deck, timing"></textarea></div>` : ''}
    <div class="hp" aria-hidden="true"><label for="${f('company')}">Company</label><input id="${f('company')}" name="company" type="text" tabindex="-1" autocomplete="off"></div>
  </div>
  <button class="pill pill--teal qf__go" type="submit"><span>${esc(button)}</span></button>
  <p class="qf__note">No spam, no sharing. We use your details only to reply. <a href="/privacy-policy/">Privacy</a></p>
  <div class="qf__msg" role="status" aria-live="polite"></div>
</form>`;
}

export function header(current = '') {
  const items = services.map((s) => `<li><a href="/${s.slug}/"${current === s.slug ? ' aria-current="page"' : ''}><b>${esc(s.name)}</b><span>${esc(s.tagline)}</span></a></li>`).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="top" data-header>
  <div class="wrap top__in">
    <a class="logo" href="/" aria-label="${esc(site.name)} home">
      <!-- Logo placeholder: swap these spans for the final logo image. -->
      <span class="logo__ph" aria-hidden="true"></span><span class="logo__txt">${esc(site.name)}</span>
    </a>
    <nav class="nav" aria-label="Main">
      <ul>
        <li class="nav__dd"><button type="button" class="nav__btn" aria-expanded="false" aria-controls="dd-services">Services <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="dd" id="dd-services"><ul>${items}</ul></div></li>
        <li><a href="/about-us/"${current === 'about' ? ' aria-current="page"' : ''}>About us</a></li>
        <li><a href="/service-areas/"${current === 'areas' ? ' aria-current="page"' : ''}>Service areas</a></li>
        <li><a href="/contact-us/"${current === 'contact' ? ' aria-current="page"' : ''}>Contact</a></li>
      </ul>
    </nav>
    <div class="top__act">
      <a class="top__tel" href="${site.phoneHref}"><span class="top__tel-ico" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg></span><span class="top__tel-num">${esc(site.phone)}</span></a>
      <button class="pill pill--teal pill--sm" type="button" data-quote>Free quote</button>
      <button class="burger" type="button" data-burger aria-expanded="false" aria-controls="mnav" aria-label="Open menu"><span></span></button>
    </div>
  </div>
  <div class="mnav" id="mnav" hidden>
    <div class="wrap">
      <ul class="mnav__svc">${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul>
      <ul class="mnav__pg"><li><a href="/">Home</a></li><li><a href="/about-us/">About us</a></li><li><a href="/service-areas/">Service areas</a></li><li><a href="/contact-us/">Contact</a></li></ul>
      <a class="pill pill--teal pill--block" href="${site.phoneHref}">Call ${esc(site.phone)}</a>
    </div>
  </div>
</header>
<dialog class="modal" id="quote-modal" aria-labelledby="modal-h">
  <div class="modal__box">
    <button class="modal__x" type="button" data-modal-close aria-label="Close">×</button>
    <div class="modal__side" aria-hidden="true"><svg viewBox="0 0 200 400" preserveAspectRatio="none"><path d="M0 0h120c-40 60 40 110 0 170s40 120 0 230H0z" /></svg></div>
    <div class="modal__body">
      <h2 id="modal-h">Get a free floor quote</h2>
      <p class="modal__lead">Tell us what you'd like coated. We'll be in touch to set up a quick on-site visit and a written price.</p>
      ${leadForm({ id: 'modal-form', withMessage: true, layout: 'grid' })}
      <p class="modal__alt">Prefer the phone? ${phoneLink()}</p>
    </div>
  </div>
</dialog>`;
}

export function footer() {
  const m = site.map;
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(m.query)}&ll=${m.lat},${m.lng}&z=${m.zoom}&output=embed`;
  return `<footer class="foot">
  <svg class="foot__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30 C240 0 480 60 720 30 S1200 0 1440 30 V60 H0Z"/></svg>
  <div class="wrap foot__grid">
    <div>
      <a class="logo logo--light" href="/"><span class="logo__ph" aria-hidden="true"></span><span class="logo__txt">${esc(site.name)}</span></a>
      <p class="foot__blurb">Garage, pool deck, home and commercial floor coatings for Lake Havasu City and the Colorado River communities around it.</p>
      <a class="foot__tel" href="${site.phoneHref}">${esc(site.phone)}</a>
    </div>
    <nav aria-label="Footer services"><p class="foot__h">Coatings</p><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul></nav>
    <nav aria-label="Footer company"><p class="foot__h">Company</p><ul><li><a href="/about-us/">About us</a></li><li><a href="/service-areas/">Service areas</a></li><li><a href="/contact-us/">Contact</a></li><li><a href="/privacy-policy/">Privacy policy</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul></nav>
    <div class="foot__map"><p class="foot__h">Lake Havasu City, AZ</p><div class="foot__frame"><iframe title="Map of Lake Havasu City, Arizona" src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>
  </div>
  <div class="wrap foot__base"><p>© <span data-year>2026</span> ${esc(site.name)}. All rights reserved.</p></div>
</footer>
<a class="callbar" href="${site.phoneHref}">Call now</a><button class="callbar callbar--q" type="button" data-quote>Free quote</button>`;
}
