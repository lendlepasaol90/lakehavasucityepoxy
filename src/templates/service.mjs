import { site } from '../site.mjs';
import { esc, md, inline, img, abs } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { bySlug } from '../content/services/index.mjs';

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function part(b) {
  const id = b.id || slugify(b.heading);
  const h = `<h2 id="${id}">${esc(b.heading)}</h2>`;
  switch (b.kind) {
    case 'split':
      return `<section class="part part--pic${b.flip ? ' rev' : ''}" aria-labelledby="${id}"><div class="up">${h}${md(b.body)}</div><figure class="mask">${img(b.image, { sizes: '(max-width: 980px) 92vw, 420px', widths: [420, 700, 900], ratio: 0.8 })}</figure></section>`;
    case 'options':
      return `<section class="part" aria-labelledby="${id}"><div class="up">${h}${md(b.body || '')}</div><div class="optgrid">${b.items.map((o, i) => `<article class="up t${i % 3}"><h3>${esc(o.name)}</h3><p>${inline(o.body)}</p></article>`).join('')}</div>${b.after ? `<div class="up" style="margin-top:1.4rem">${md(b.after)}</div>` : ''}</section>`;
    case 'uses':
      return `<section class="part" aria-labelledby="${id}"><div class="up">${h}${md(b.body || '')}</div><div class="usegrid up">${b.items.map((u) => `<div><b>${esc(u.name)}</b><span>${inline(u.body)}</span></div>`).join('')}</div></section>`;
    case 'steps':
      return `<section class="part" aria-labelledby="${id}"><div class="up">${h}${md(b.body || '')}</div><ol class="flow">${b.items.map((s) => `<li class="up"><div><h3>${esc(s.name)}</h3><p>${inline(s.body)}</p></div></li>`).join('')}</ol></section>`;
    case 'callout':
      return `<section class="part callout up" aria-labelledby="${id}">${h}${md(b.body)}</section>`;
    case 'local':
      return `<section class="part lakebox" aria-labelledby="${id}"><div class="lakebox__bg" aria-hidden="true">${img(b.image || 'lakeBoat', { widths: [800, 1300], alt: '' })}</div>${h}${md(b.body)}</section>`;
    case 'table':
      return `<section class="part" aria-labelledby="${id}"><div class="up">${h}${md(b.body || '')}</div><div class="tblw up"><table class="tbl"><thead><tr>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${b.after ? `<div class="up" style="margin-top:1.4rem">${md(b.after)}</div>` : ''}</section>`;
    default:
      return `<section class="part up" aria-labelledby="${id}">${h}${md(b.body)}</section>`;
  }
}

export function renderService(s) {
  const path = `/${s.slug}/`;
  const rel = (s.related || []).map((r) => bySlug[r]).filter(Boolean);
  const body = `
<section class="ph">
  <div class="wrap">
    <div class="crumb">${crumbs([{ name: 'Home', path: '/' }, { name: s.name, path }])}</div>
    <h1 class="up on">${esc(s.h1)}</h1>
    <p class="lead up on">${inline(s.lede)}</p>
    <div class="ph__btns"><button class="pill pill--teal" type="button" data-quote>Get a free quote</button><a class="pill pill--line" href="${site.phoneHref}">Call ${esc(site.phone)}</a></div>
    <div class="ph__pic">${img(s.image, { eager: true, widths: [800, 1300, 1900], ratio: 21 / 8 })}${s.chips ? `<ul class="ph__chips">${s.chips.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}</div>
  </div>
</section>
<div class="sec sec--s">
  <div class="wrap doc">
    <aside class="rail" aria-label="On this page">
      <p>On this page</p>
      <ol>${s.blocks.map((b) => `<li><a href="#${b.id || slugify(b.heading)}">${esc(b.toc || b.heading)}</a></li>`).join('')}<li><a href="#faq">Questions</a></li></ol>
      <div class="rail__cta"><b>Free on-site quote</b><span>We measure, check the slab and put the price in writing.</span><button class="pill pill--teal pill--sm pill--block" type="button" data-quote>Request a quote</button></div>
    </aside>
    <article class="doc__main">
      <div class="open up">${md(s.intro)}</div>
      ${s.blocks.map(part).join('\n')}
    </article>
  </div>
</div>
<section class="sec sec--aqua" id="faq" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="head ctr up"><svg class="ripple" viewBox="0 0 64 12" aria-hidden="true"><path d="M0 6c8-8 16 8 24 0s16 8 24 0 16 8 16 0" fill="none" stroke="currentColor" stroke-width="2"/></svg><h2 id="faq-h">${esc(s.faqHeading)}</h2></div>
    <div class="acc">${s.faqs.map((f) => `<details class="up"><summary>${esc(f.q)}</summary><div class="acc__a">${md(f.a)}</div></details>`).join('')}</div>
  </div>
</section>
${rel.length ? `<section class="sec sec--s" aria-labelledby="rel-h"><div class="wrap"><h2 id="rel-h" class="up" style="font-size:1.7rem">${esc(s.relatedHeading || 'Related services')}</h2>
  <div class="rel">${rel.map((r) => `<a class="up" href="/${r.slug}/">${img(r.image, { widths: [400, 700], sizes: '(max-width: 980px) 92vw, 380px', ratio: 4 / 3, alt: '' })}<div><b>${esc(r.name)}</b><span>${esc(r.tagline)}</span></div></a>`).join('')}</div></div></section>` : ''}
<section class="sec closer" id="estimate" aria-labelledby="est-h">
  <div class="closer__bg" aria-hidden="true">${img(s.closerImage || 'sunsetRide', { widths: [800, 1400], alt: '' })}</div>
  <div class="wrap closer__grid">
    <div class="up"><h2 id="est-h">${esc(s.cta.heading)}</h2>${md(s.cta.body)}
      <ul class="closer__list"><li><i>☎</i>${phoneLink()}</li><li><i>✓</i>Free, written, on-site quotes</li><li><i>⌖</i><a href="/service-areas/">Lake Havasu City and nearby</a></li></ul></div>
    <div class="closer__card up t1">${leadForm({ id: `${s.slug}-form`, heading: 'Request a quote', withMessage: true, preset: s.formPreset })}</div>
  </div>
</section>`;
  const schema = [
    { '@type': 'Service', '@id': abs(path) + '#service', name: s.name, serviceType: s.serviceType, description: s.description, provider: { '@id': abs('/#business') }, areaServed: site.serviceAreas.map((a) => ({ '@type': 'Place', name: a.name })), url: abs(path) },
    { '@type': 'FAQPage', mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })) },
  ];
  return layout({ path, title: s.title, description: s.description, body, current: s.slug, image: s.image, schema, breadcrumbs: [{ name: 'Home', path: '/' }, { name: s.name, path }] });
}
