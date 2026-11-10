import { site } from '../site.mjs';
import { esc, md, img } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

const top = ({ title, lede, image, trail }) => `<section class="ph"><div class="wrap">
  <div class="crumb">${crumbs(trail)}</div><h1>${esc(title)}</h1><p class="lead">${lede}</p>
  <div class="ph__pic" style="margin-top:2rem">${img(image, { eager: true, widths: [800, 1300, 1900], ratio: 21 / 8, alt: '' })}</div></div></section>`;

const box = (id) => `<aside class="sidebox">${leadForm({ id, heading: 'Free quote', intro: 'Share a few details and we will follow up to set a time.', layout: 'stack' })}</aside>`;

export function renderAbout() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About us', path: '/about-us/' }];
  const body = `${top({ title: 'About Lake Havasu City Epoxy', lede: 'A local coating crew for garages, pool decks, homes and businesses on the lake, focused on prep, honest quotes and floors that handle the heat.', image: 'palmsShore', trail })}
<section class="sec sec--s"><div class="wrap split2"><div class="up">
${md(`We do one thing: turn tired concrete into floors that hold up to how people actually live here. That means garages full of boats and side-by-sides, pool decks that see bare feet all summer, lake houses that fill up with guests, and businesses that cannot afford a peeling floor in peak season.

The most important part of that job happens before any color goes down. Heat is the enemy of a poorly bonded coating, so we grind every slab, repair every crack we can find and choose systems that are rated for the temperatures Havasu throws at them.`)}
<h2>What you can expect from us</h2>
<div class="vals">
  <div><b>Prep that is never skipped</b><span>Diamond grinding and repairs are standard on every project.</span></div>
  <div><b>Straightforward pricing</b><span>Written, itemized quotes with no "sign today" pressure.</span></div>
  <div><b>Right-sized systems</b><span>We match the coating to the space and the budget, not the other way round.</span></div>
  <div><b>Easy to work with</b><span>Clear scheduling, tidy crews and help coordinating access for second homes.</span></div>
</div>
${md(`## Who we help

Homeowners are most of our work: garages, RV and boat bays, pool decks, patios, casitas and interior floors. We also work with vacation rental owners and property managers who need durable, easy-clean surfaces and tight scheduling, and with local businesses, from restaurants and retail to marine service shops and storage facilities.

## How a project starts

You call or fill out the form. We schedule a visit, measure the space, look at the concrete and show you samples. Then you get a written quote with the options that make sense. If you decide to go ahead, we book a date and give you simple prep instructions, like what to move out of the garage.`)}
<p style="margin-top:1.5rem"><a class="pill pill--teal" href="/contact-us/">Contact us</a> <a class="pill pill--line" href="/garage-floor-coatings/">Garage coatings</a></p>
</div>${box('about-form')}</div></section>`;
  return layout({ path: '/about-us/', title: 'About Us | Lake Havasu City Epoxy', description: 'Meet the Lake Havasu City floor coating crew focused on careful prep, honest quotes and garage, pool deck and commercial floors built for the heat.', body, current: 'about', image: 'palmsShore', breadcrumbs: trail });
}

const towns = {
  'Lake Havasu City': 'All of town, north to south. Garages, RV bays, pool decks, patios and interiors, plus commercial and industrial projects.',
  'The Island': 'Homes, rentals and businesses across the London Bridge on Pittsburgh Point, where sand and lake water come with the territory.',
  'Havasu Foothills Estates': 'Larger homes with oversized garages and RV bays, often with view decks and pools that benefit from cool, textured coatings.',
  'Desert Hills': 'North of town, with bigger lots, shops and outbuildings. A good fit for flexible, heavy-duty garage and shop systems.',
  'Horizon Six': 'Homes and workshops along Highway 95 with garages and storage buildings that see hard use.',
  'Crystal Beach': 'Lakeside homes and second homes north of the city, many with boat garages and patios.',
  'Golden Shores': 'Homes and storage near Topock and the river, where heat and dust are part of daily life.',
  Parker: 'Commercial and residential projects along the Parker Strip and in town, by arrangement.',
  'Needles, CA': 'Selected residential and commercial projects just across the Colorado River.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Service areas', path: '/service-areas/' }];
  const body = `${top({ title: 'Areas we serve along the river', lede: 'Based in Lake Havasu City and working up and down this stretch of the Colorado River.', image: 'boatsFloat', trail })}
<section class="sec sec--s"><div class="wrap">
  <div class="read up">${md(`Coating work in this climate depends on timing. In summer, we often start at first light so the slab and materials stay cool enough to work properly. Staying close to Lake Havasu City lets us do that reliably and keep projects moving.

These are the communities we cover most. If you are outside them, call us anyway; we may still be able to help, especially with larger projects.`)}</div>
  <div class="townlist">${site.serviceAreas.map((a) => `<article class="up"><h2>${esc(a.name)}</h2><p>${esc(towns[a.name] || a.note)}</p></article>`).join('')}</div>
  <div class="read up" style="margin-top:3rem"><h2>Services in every area</h2><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a>: ${esc(s.tagline)}</li>`).join('')}</ul></div>
</div></section>
<section class="sec closer" id="estimate"><div class="wrap closer__grid"><div><h2>Check if we cover you</h2><p>Send your address area and project and we will confirm when we follow up, or call ${phoneLink()}.</p></div><div class="closer__card">${leadForm({ id: 'areas-form', heading: 'Request a quote', withMessage: true })}</div></div></section>`;
  return layout({ path: '/service-areas/', title: 'Service Areas | Lake Havasu City Epoxy', description: 'Floor coatings in Lake Havasu City, the Island, Havasu Foothills Estates, Desert Hills, Horizon Six, Crystal Beach, Golden Shores, Parker and Needles.', body, current: 'areas', image: 'boatsFloat', breadcrumbs: trail });
}

export function renderContact() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact-us/' }];
  const body = `${top({ title: 'Contact us', lede: 'Questions, quotes or scheduling. Send a note and we will get back to you.', image: 'poolDeck', trail })}
<section class="sec sec--s" id="estimate"><div class="wrap split2">
  <div class="up">
    <h2>Helpful details to include</h2>
    <ul><li>What you want coated: garage, RV or boat bay, pool deck, patio, interior or business</li><li>Rough size, and whether there is an existing coating or paint</li><li>Any cracks, stains or problem areas</li><li>Your timing, including rental bookings or when you will be out of town</li></ul>
    <p><strong>Phone:</strong> ${phoneLink()}${site.email ? `<br><strong>Email:</strong> <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>` : ''}</p>
    <h3>What happens next</h3>
    <ol><li>We reach out to schedule a visit.</li><li>We measure, check the slab and bring samples.</li><li>You get a written quote with clear options.</li></ol>
  </div>
  <div class="sidebox up t1" style="position:static">${leadForm({ id: 'contact-form', heading: 'Request your free quote', withMessage: true })}</div>
</div></section>`;
  return layout({ path: '/contact-us/', title: 'Contact Us | Free Floor Coating Quotes in Lake Havasu City', description: 'Request a free, on-site quote for garage, RV bay, pool deck, interior or commercial floor coatings in Lake Havasu City and nearby river communities.', body, current: 'contact', image: 'poolDeck', breadcrumbs: trail });
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Privacy policy', path: '/privacy-policy/' }];
  const body = `${top({ title: 'Privacy policy', lede: 'How the information you send through this website is handled.', image: 'palmsShore', trail })}
<section class="sec sec--s"><div class="wrap read">${md(`## What we receive

When you use a form on this site, we receive the name, phone number, email, project type and message you enter, plus the page you sent it from. We do not use advertising or tracking cookies.

## How we use it

Only to answer your request, arrange a quote and talk with you about your project. We never sell or rent your details.

## Third-party services

Messages may be delivered to us through an email or automation service. The map is provided by Google Maps and photos are loaded from Unsplash, which may log basic technical data such as your IP address under their own policies.

## Your choices

Ask us anytime to correct or delete what you sent by reaching out through our [contact page](/contact-us/).

## Changes

We may update this policy. The current version is always here.`)}</div></section>`;
  return layout({ path: '/privacy-policy/', title: 'Privacy Policy | Lake Havasu City Epoxy', description: 'How Lake Havasu City Epoxy collects, uses and protects details submitted through the quote and contact forms on this website.', body, breadcrumbs: trail });
}

export function render404() {
  const body = `<section class="nf"><div class="wrap read ctr"><h1>This page drifted off</h1><p class="lead">The link may be old or mistyped. Try one of these.</p><p><a class="pill pill--teal" href="/">Homepage</a> <a class="pill pill--line" href="/garage-floor-coatings/">Garage coatings</a> <a class="pill pill--line" href="/contact-us/">Contact</a></p></div></section>`;
  return layout({ path: '/404.html', title: 'Page not found | Lake Havasu City Epoxy', description: 'The page you were looking for could not be found.', body }).replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">');
}
