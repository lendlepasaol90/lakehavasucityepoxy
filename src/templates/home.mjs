import { site } from '../site.mjs';
import { esc, md, img, beginDedupe, endDedupe } from '../lib/html.mjs';
import { layout } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

const ripple = `<svg class="ripple" viewBox="0 0 64 12" aria-hidden="true"><path d="M0 6c8-8 16 8 24 0s16 8 24 0 16 8 16 0" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
const ico = (d) => `<span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;

const faqs = [
  { q: 'Can you coat an RV or boat garage?', a: 'Yes, and they are some of our favorite projects. Large bays need a system that handles heavy tires, trailer jacks and the water that drips off a boat after a day on the lake. We usually recommend a flexible base coat, a flake broadcast and a textured topcoat, priced by the actual square footage of the bay.' },
  { q: 'How does a coating hold up to Havasu summer heat?', a: 'Heat is the main reason garage floors fail here. Hot tires soften weak coatings and pull them off the slab. We diamond-grind every floor so the coating bonds into the concrete, use base coats and topcoats rated for high temperatures, and install early in the day when slabs are coolest.' },
  { q: 'Will a pool deck coating be too hot to walk on?', a: 'Any surface in full July sun gets hot. Light colors and textured finishes stay noticeably more comfortable than dark or smooth ones, which is why we steer pool deck clients toward pale sand and soft grey tones with a knockdown or broadcast texture.' },
  { q: 'Can you finish between vacation rental bookings?', a: 'Often, yes. Fast-curing polyaspartic systems let many garages and patios go from bare concrete to usable within a day or two. Tell us your booking calendar and we will plan around it.' },
  { q: 'What about the sand we track in from the beach?', a: 'Sand is abrasive and will slowly dull any finish, but a flake floor hides it well and a quality topcoat resists wear. Sweeping or blowing out the garage regularly, plus a mat inside the door, keeps it looking good for years.' },
  { q: 'Do you work on the Island and in Desert Hills?', a: 'Yes. We cover all of Lake Havasu City including the Island, plus Desert Hills, Horizon Six, Crystal Beach, Golden Shores and down toward Parker. See the service areas section for more.' },
  { q: 'Do you coat garages for homes that are listed for sale?', a: 'Yes. A finished garage photographs well and is a quick, relatively affordable upgrade before listing. Fast-cure systems keep the garage out of use for only a short time.' },
  { q: 'How much does a garage floor coating cost?', a: 'It depends on size, slab condition, repairs and the system you choose. A standard two-car garage and a 50-foot RV bay are very different jobs. We measure in person and give you a written quote with clear options.' },
];

export function renderHome() {
  beginDedupe(['xShinyRoom', 'marina', 'galleryFloor', 'garageDoorway', 'garagePair', 'garageShow', 'lakeBoats', 'loungers', 'poolLadder', 'warehouseModern']);
  const tabs = services.map((s, i) => `<li role="presentation"><button class="switch__tab" type="button" role="tab" id="st-${s.slug}" aria-controls="sp-${s.slug}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${esc(s.name)}<i aria-hidden="true">→</i></button></li>`).join('');
  const panels = services
    .map((s, i) => `<div class="switch__panel" role="tabpanel" id="sp-${s.slug}" aria-labelledby="st-${s.slug}"${i ? ' hidden' : ''}>
      <figure>${img(s.image, { sizes: '(max-width: 980px) 92vw, 680px', widths: [500, 900, 1300], ratio: 2, alt: '' })}</figure>
      <div class="switch__body"><h3>${esc(s.name)}</h3><p>${esc(s.homeBlurb)}</p><a class="go" href="/${s.slug}/">See ${esc(s.name.toLowerCase())}</a></div></div>`)
    .join('');

  const body = `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero__ghost" aria-hidden="true">${img('lakeBoats', { keep: true, widths: [800, 1400, 2000], alt: '' })}</div>
  <div class="wrap hero__grid">
    <div>
      <h1 id="hero-h" class="up on">Floors made for lake life</h1>
      <p class="lead up on">Epoxy and polyaspartic coatings for Lake Havasu City garages, RV and boat bays, pool decks and businesses. Built to take triple-digit heat, beach sand and everything that drips off a boat trailer.</p>
      <div class="hero__form up on">${leadForm({ id: 'hero-form', heading: 'Get a free quote', button: 'Request my quote' })}</div>
    </div>
    <div class="hero__pic">
      <div class="hero__img">${img('garageDoorway', { keep: true, eager: true, sizes: '(max-width: 980px) 92vw, 540px', widths: [480, 760, 1080], ratio: 0.8 })}</div>
      <p class="hero__badge"><i>✓</i><span><b>Diamond-ground prep</b>Every slab, every time. It is what keeps coatings bonded in the heat.</span></p>
    </div>
  </div>
</section>

<section class="sec sec--s" aria-label="Lake Havasu facts">
  <div class="wrap tickers">
    <div class="ticker up"><b><span data-count="128">128</span>°F</b><span class="ticker__lbl">Arizona's all-time record high, set right here in 1994. Floors here have to expect heat.</span></div>
    <div class="ticker up t1"><b><span data-count="9">9</span></b><span class="ticker__lbl">Coating services, from garage flake floors to marina and warehouse systems.</span></div>
    <div class="ticker up t2"><b><span data-count="24">24</span>–48h</b><span class="ticker__lbl">Typical return to use for fast-cure garage systems in warm weather.</span></div>
  </div>
</section>

<section class="sec" aria-labelledby="intro-h">
  <div class="wrap intro">
    <div class="collage up" aria-hidden="true">
      <div>${img('garagePair', { widths: [500, 800], sizes: '(max-width: 980px) 55vw, 340px', ratio: 0.65, alt: '' })}</div>
      <div>${img('poolDeck', { widths: [400, 600], sizes: '(max-width: 980px) 40vw, 260px', ratio: 1, alt: '' })}</div>
      <div>${img('marina', { widths: [400, 600], sizes: '(max-width: 980px) 40vw, 260px', ratio: 1, alt: '' })}</div>
    </div>
    <div class="up t1">
      ${ripple}
      <h2 id="intro-h">Concrete coatings for Havasu homes, toys and businesses</h2>
      <p>Life in Lake Havasu City happens outside, and a lot of it starts in the garage. That is where the boat waits on its trailer, the side-by-side gets hosed off, the coolers get loaded and the wet towels land after a day on the water. It is also where the concrete takes the most punishment.</p>
      <p>We coat that concrete so it lasts. Our crews grind and repair the slab, then install a system that suits how you use the space, whether that is a <a href="/garage-floor-coatings/">garage floor coating</a> with a sand-hiding flake finish, a cooler, slip-resistant <a href="/patio-concrete-coatings/">pool deck</a>, a seamless <a href="/residential-epoxy-flooring/">interior floor</a> for a lake house, or a tough <a href="/commercial-epoxy-flooring/">commercial floor</a> for a marina shop or restaurant.</p>
      <p>Not sure where to start? Most people begin with the garage, then come back for the pool deck or an interior room once they see the difference. Others coat everything at once to get it done before summer. Either way, we will walk the property with you and price each area separately.</p>
      <p>Every quote is free, done on site and written down, so you know exactly what you are getting before anything starts.</p>
    </div>
  </div>
</section>

<section class="sec sec--aqua" id="services" aria-labelledby="svc-h">
  <div class="wrap">
    <div class="head up">${ripple}<h2 id="svc-h">Choose a coating</h2><p class="muted">Nine services, each with its own page. Pick one to see what it is best for.</p></div>
    <div class="switch" data-switch>
      <ul class="switch__list" role="tablist" aria-label="Coating services" aria-orientation="vertical">${tabs}</ul>
      <div>${panels}</div>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="garage-h">
  <div class="wrap">
    <div class="overlay mask">
      <div class="overlay__img" aria-hidden="true">${img('garageRow', { sizes: '100vw', widths: [800, 1300, 1900], alt: '' })}</div>
      <div class="overlay__card up">
        <h2 id="garage-h">Garage, RV and boat bay coatings</h2>
        <p>A Havasu garage is rarely just a garage. It is a boat shed, an RV bay, a gym, a beer fridge and a workshop, and its floor sees hot tires in July, lake water off the trailer and sand tracked in from the beach. Bare concrete stains, dusts and cracks under all of that. Cheap coatings peel.</p>
        <p>Our garage systems start with a full diamond grind and crack repair, then a strong base coat, a decorative flake broadcast and a UV-stable, slip-resistant topcoat. The result handles hot tires and heavy trailers, wipes clean after a messy lake day and looks sharp when the door is up.</p>
        <ul class="dots"><li>Sized for oversized RV and boat bays</li><li>Hot-tire-resistant, UV-stable topcoats</li><li>Textured for wet floors after washing the boat</li></ul>
        <a class="go" href="/garage-floor-coatings/">Explore garage coatings</a>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--s" aria-label="Residential and decorative floors">
  <div class="wrap pair">
    <article class="card up">
      <figure>${img('galleryWhite', { sizes: '(max-width: 980px) 92vw, 600px', widths: [500, 900], ratio: 1.6 })}</figure>
      <div class="card__body">
        <h2 style="font-size:1.75rem">Residential epoxy flooring</h2>
        <p>Inside a lake house, floors deal with wet feet, sandy flip-flops, dogs fresh out of the water and guests who are not going to take their shoes off. A seamless epoxy or polyaspartic floor laid over the slab shrugs it all off and stays cool underfoot through long summers.</p>
        <p>We coat living areas, casitas, laundry rooms, game rooms and the hallways between the garage and the pool. Satin finishes keep the look calm and hide footprints, and light colors bounce daylight around rooms with smaller windows. Read more on our <a href="/residential-epoxy-flooring/">residential epoxy page</a>.</p>
      </div>
    </article>
    <article class="card card--offset up t1">
      <figure>${img('xShinyRoom', { keep: true, sizes: '(max-width: 980px) 92vw, 600px', widths: [500, 900], ratio: 1.6 })}</figure>
      <div class="card__body">
        <h2 style="font-size:1.75rem">Decorative and metallic finishes</h2>
        <p>Want a floor that turns heads? Decorative flake systems scatter colored chips through the coating for a speckled, granite-like look that hides sand. Metallic epoxy uses pearl and metal pigments, hand-worked while wet, for a finish with real depth, a lot like light moving across the lake surface.</p>
        <div class="finishes" aria-label="Popular color directions">
          <span><i style="background:linear-gradient(135deg,#bfe6e2,#5fb2ad)"></i>Shoreline aqua</span>
          <span><i style="background:linear-gradient(135deg,#efe1c6,#c7a979)"></i>Beach sand</span>
          <span><i style="background:linear-gradient(135deg,#d9dde0,#8e979c)"></i>Driftwood grey</span>
          <span><i style="background:linear-gradient(135deg,#e7b38e,#a8623d)"></i>Sunset copper</span>
        </div>
        <p>See <a href="/decorative-flake-flooring/">decorative flake</a> and <a href="/metallic-epoxy-flooring/">metallic epoxy</a>.</p>
      </div>
    </article>
  </div>
</section>

<section class="lake" aria-labelledby="lake-h">
  <div class="lake__bg" data-parallax aria-hidden="true">${img('lakeBoat', { widths: [800, 1400, 2000, 2600], alt: '' })}</div>
  <div class="wrap">
    <div class="lake__in up">
      <h2 id="lake-h">What heat, sun and sand do to Havasu concrete</h2>
      <p>Lake Havasu City is one of the hottest places in the country, and it shows on concrete. Garage slabs bake all afternoon, tires come home hot enough to soften cheap coatings, and the low western sun pours into open garages and across pool decks. Add fine wind-blown sand, hard water spots from sprinklers and lake water, and occasional heavy summer storms, and you have a tough environment for any floor.</p>
      <div class="lake__facts">
        <div><b>Heat</b><span>Hot slabs shorten working time; we install early in the day</span></div>
        <div><b>UV</b><span>Strong sun yellows standard epoxy; we use UV-stable topcoats</span></div>
        <div><b>Sand</b><span>Abrasive grit is hidden by flake and resisted by tough topcoats</span></div>
      </div>
      <button class="pill pill--white" type="button" data-quote>Plan a floor for the heat</button>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="biz-h">
  <div class="wrap">
    <div class="head up">${ripple}<h2 id="biz-h">Commercial and industrial flooring</h2><p class="muted">Havasu businesses run on tourism, boating and the services that support them. Their floors need to be tough, easy to clean and installed without costing a busy weekend.</p></div>
    <div class="biz">
      <article class="biz__row up">
        <figure>${img('marina', { keep: true, sizes: '(max-width: 980px) 92vw, 480px', widths: [500, 900], alt: 'London Bridge over the channel, close to the lakeside businesses we serve' })}</figure>
        <div class="biz__body">
          <h3 style="font-size:1.5rem">Commercial epoxy flooring</h3>
          <p>Restaurants and bars near the Channel, retail along McCulloch Boulevard, boat dealers and service shops, hotels and vacation rental managers all need floors that take traffic and clean quickly. We install seamless resin systems with texture where floors get wet, chemical-resistant topcoats for kitchens and service bays, and decorative finishes for showrooms.</p>
          <ul class="tags"><li>Restaurants & bars</li><li>Boat dealers & service</li><li>Retail & showrooms</li><li>Hotels & rentals</li><li>Clinics & offices</li></ul>
          <a class="go" href="/commercial-epoxy-flooring/">Commercial flooring</a>
        </div>
      </article>
      <article class="biz__row up">
        <figure>${img('warehouse', { sizes: '(max-width: 980px) 92vw, 480px', widths: [500, 900] })}</figure>
        <div class="biz__body">
          <h3 style="font-size:1.5rem">Industrial flooring solutions</h3>
          <p>Boat and RV storage facilities, fabrication shops, marine manufacturing and warehouse space around the airport industrial area all depend on floors that survive heavy loads and constant traffic. We use high-build epoxy and polyurea systems, repair joints, add striping and plan phased installs so operations keep moving.</p>
          <ul class="tags"><li>Boat & RV storage</li><li>Marine manufacturing</li><li>Warehouses</li><li>Fabrication shops</li><li>Striping & zones</li></ul>
          <a class="go" href="/warehouse-floor-coatings/">Warehouse coatings</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="sec sec--aqua" aria-labelledby="why-h">
  <div class="wrap">
    <div class="head ctr up">${ripple}<h2 id="why-h">Why choose our epoxy flooring services?</h2><p class="muted">We keep it simple: careful prep, the right system, straight answers.</p></div>
    <div class="why">
      <article class="up">${ico('M4 20l4-4m0 0l8-8 4 4-8 8m-4-4l4 4M14 6l4 4')}<h3>Ground, not etched</h3><p>Diamond grinding opens the concrete so coatings bond in, not just on. That is the step that beats hot-tire peeling.</p></article>
      <article class="up t1">${ico('M12 3v2m0 14v2m9-9h-2M5 12H3m15.4-6.4l-1.4 1.4M7 17l-1.4 1.4m12.8 0L17 17M7 7L5.6 5.6M12 8a4 4 0 100 8 4 4 0 000-8z')}<h3>Heat-smart scheduling</h3><p>Summer installs start early, materials stay shaded and batches are sized for hot slabs.</p></article>
      <article class="up t2">${ico('M9 5h10M9 12h10M9 19h10M5 5h.01M5 12h.01M5 19h.01')}<h3>Clear written quotes</h3><p>Every layer, repair and cure time spelled out, so comparing quotes is easy.</p></article>
      <article class="up">${ico('M3 12h4l3-8 4 16 3-8h4')}<h3>Systems sized to the job</h3><p>An RV bay, a pool deck and a laundry room each get the system that suits them, not one-size-fits-all.</p></article>
      <article class="up t1">${ico('M4 7h16v12H4zM8 7V5h8v2')}<h3>Respectful crews</h3><p>Dust-controlled grinding, protected walls and a clean space when we leave, rental or residence.</p></article>
      <article class="up t2">${ico('M5 13l4 4L19 7')}<h3>Care that lasts</h3><p>We walk you through cure times and simple cleaning tips so your floor stays looking new.</p></article>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="proc-h">
  <div class="wrap">
    <div class="head up">${ripple}<h2 id="proc-h">Our flooring installation process</h2><p class="muted">Most two- and three-car garages take one to two days. RV bays, pool decks and commercial spaces get a written schedule up front.</p></div>
    <div style="position:relative">
      <svg class="steps-h__line" viewBox="0 0 1000 14" preserveAspectRatio="none" aria-hidden="true"><path d="M0 7c40-10 80 10 120 0s80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0 80 10 40 0" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      <ol class="steps-h">
        <li class="up"><h3>On-site quote</h3><p>We measure, check the slab for moisture, cracks and old coatings, and show you samples.</p></li>
        <li class="up t1"><h3>Grind and repair</h3><p>Diamond grinding with dust control, then crack and pit repair for a sound surface.</p></li>
        <li class="up t2"><h3>Base coat</h3><p>A bonding base coat goes down while the concrete is open and clean.</p></li>
        <li class="up t3"><h3>Color or flake</h3><p>Flake broadcast, metallic work or solid color, depending on your system.</p></li>
        <li class="up t3"><h3>Topcoat and walkthrough</h3><p>A UV-stable, textured topcoat, then a walkthrough and care tips.</p></li>
      </ol>
    </div>
  </div>
</section>

<section class="sec sec--white" aria-labelledby="ben-h">
  <div class="wrap bens">
    <div>
      <div class="up">${ripple}<h2 id="ben-h">Benefits of professional epoxy flooring</h2><p class="muted">Here is what changes once your concrete is properly coated.</p></div>
      <ul class="ben-list">
        <li class="up"><b>No more concrete dust</b><span>Sealed floors stop shedding the grey powder that ends up on everything in the garage.</span></li>
        <li class="up t1"><b>Spills wipe up</b><span>Oil, sunscreen, fuel and boat cleaners stay on top instead of staining.</span></li>
        <li class="up"><b>Cooler, brighter space</b><span>Light finishes reflect light and feel more comfortable than bare concrete.</span></li>
        <li class="up t1"><b>Safer when wet</b><span>Textured topcoats give grip after washing the boat or a summer storm.</span></li>
        <li class="up"><b>Sand stays hidden</b><span>Flake finishes disguise the grit that blows in and rides home on the boat.</span></li>
        <li class="up t1"><b>Lasting value</b><span>A finished garage or deck stands out to buyers and rental guests alike.</span></li>
      </ul>
    </div>
    <div class="bens__pic mask">${img('poolBlue', { sizes: '(max-width: 980px) 92vw, 540px', widths: [500, 800, 1100], ratio: 0.8 })}</div>
  </div>
</section>

<section class="sec sec--s" aria-labelledby="cal-h">
  <div class="wrap">
    <div class="head up">${ripple}<h2 id="cal-h">Planning your project around the Havasu calendar</h2></div>
    <div class="pair">
      <div class="up"><p>There is no bad time to coat a floor here, but each season has its quirks. Late fall through early spring is the easiest stretch: slabs are cooler, materials behave and it is the quietest time for most businesses and rental owners. It is also when we have the most flexibility on dates.</p><p>Spring fills up fast as people get ready for boating season, so book early if you want the garage finished before the boat comes out of storage.</p></div>
      <div class="up t1"><p>Summer installs are routine for us, but they run on an early schedule. Crews arrive at first light, materials stay in the shade and batches are sized to the slab temperature. Fast-curing systems mean the garage is usually back in use quickly.</p><p>Outdoor projects in late summer are planned around storm forecasts, since decks and patios need dry weather while coatings set. We will suggest the best window for your project when we quote it.</p></div>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="local-h">
  <div class="wrap local">
    <div class="up">
      ${ripple}
      <h2 id="local-h">Why property owners in Lake Havasu City choose us</h2>
      <p>Havasu is not a typical Arizona town. It is a lake town with a desert climate, and a lot of its homes were built around the boat, the RV or the pool. Many have oversized garages and side yards, many are second homes or vacation rentals, and nearly all of them deal with heat, sun and sand.</p>
      <p>Owners tell us they want floors that survive the summer, quotes that are clear, and crews that show up when they say they will, often while the owner is out of town. We plan around all of that, coordinating access for second-home owners and keeping rental calendars in mind.</p>
      <p>We also understand the practical side of a lake town: boats that need to go back in the garage by Friday, guests arriving on Saturday and HOA rules about what can be seen from the street. Those details go into every schedule we write.</p>
      <p>We work in every part of town, including:</p>
      <ul class="chips"><li>The Island</li><li>Havasu Foothills Estates</li><li>The Refuge</li><li>Bridgewater Channel area</li><li>Uptown McCulloch</li><li>North Havasu</li><li>South Havasu</li><li>Desert Hills</li></ul>
    </div>
    <aside class="tip up t1">
      <h3>Vacation rental owners</h3>
      <p>A coated garage, patio or pool deck is easier to clean between guests and holds up better to people who are not treating it like their own. Fast-cure systems mean shorter downtime between bookings.</p>
      <p>Send us your calendar and we will find a window that works.</p>
      <button class="pill pill--teal pill--sm" type="button" data-quote>Ask about scheduling</button>
    </aside>
  </div>
</section>

<section class="sec sec--aqua" aria-labelledby="gal-h">
  <div class="wrap">
    <div class="head up">${ripple}<h2 id="gal-h">Featured floor styles</h2><p class="muted">A look at the finishes we install most. Bring your questions and we will bring the samples.</p></div>
    <div class="masonry">
      <figure class="up">${img('garagePair', { keep: true, widths: [400, 700], sizes: '(max-width: 640px) 92vw, 400px', ratio: 0.75 })}<figcaption>High-gloss garage floor</figcaption></figure>
      <figure class="up">${img('poolLadder', { keep: true, widths: [400, 700], sizes: '(max-width: 640px) 92vw, 400px', ratio: 1.2 })}<figcaption>Pool surround</figcaption></figure>
      <figure class="up">${img('galleryFloor', { keep: true, widths: [400, 700], sizes: '(max-width: 640px) 92vw, 400px', ratio: 0.9 })}<figcaption>Seamless interior</figcaption></figure>
      <figure class="up">${img('garageShow', { keep: true, widths: [400, 700], sizes: '(max-width: 640px) 92vw, 400px', ratio: 1.3 })}<figcaption>Showcase garage</figcaption></figure>
      <figure class="up">${img('warehouseModern', { keep: true, widths: [400, 700], sizes: '(max-width: 640px) 92vw, 400px', ratio: 0.8 })}<figcaption>Light industrial</figcaption></figure>
      <figure class="up">${img('loungers', { keep: true, widths: [400, 700], sizes: '(max-width: 640px) 92vw, 400px', ratio: 1.25 })}<figcaption>Textured pool deck</figcaption></figure>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="areas-h">
  <div class="wrap areas">
    <div class="up">${ripple}<h2 id="areas-h">Service areas</h2><p>We are focused on Lake Havasu City and the communities up and down this stretch of the Colorado River. If you are a little further out, give us a call. Larger commercial projects often make the drive worthwhile.</p><a class="go" href="/service-areas/">All service areas</a></div>
    <div class="area-tiles up t1">${site.serviceAreas.map((a) => `<div><b>${esc(a.name)}</b><span>${esc(a.note)}</span></div>`).join('')}</div>
  </div>
</section>

<section class="sec sec--aqua" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="head ctr up">${ripple}<h2 id="faq-h">Frequently asked questions</h2><p class="muted">Quick answers to what Havasu homeowners ask most. Need more? Call ${phoneLink()}.</p></div>
    <div class="acc">${faqs.map((f) => `<details class="up"><summary>${esc(f.q)}</summary><div class="acc__a">${md(f.a)}</div></details>`).join('')}</div>
  </div>
</section>

<section class="sec closer" id="estimate" aria-labelledby="est-h">
  <div class="closer__bg" aria-hidden="true">${img('sunsetRide', { widths: [800, 1400, 2000], alt: '' })}</div>
  <div class="wrap closer__grid">
    <div class="up">
      <h2 id="est-h">Ready for a floor that keeps up with lake life?</h2>
      <p>Tell us about your garage, RV bay, pool deck or business. We will come out, measure, check the slab and leave you with a clear written quote.</p>
      <ul class="closer__list"><li><i>☎</i>${phoneLink()}</li><li><i>✓</i>Free on-site quotes</li><li><i>⌖</i>Lake Havasu City and nearby</li></ul>
    </div>
    <div class="closer__card up t1">${leadForm({ id: 'home-form', heading: 'Request your free quote', intro: 'Takes about a minute. We will follow up to schedule your visit.', withMessage: true })}</div>
  </div>
</section>`;

  endDedupe();
  return layout({
    path: '/',
    title: 'Lake Havasu City Epoxy | Garage, RV Bay & Pool Deck Coatings',
    description: 'Epoxy and polyaspartic floor coatings for Lake Havasu City garages, RV and boat bays, pool decks, homes and businesses. Built for heat, sun and sand.',
    body,
    image: 'garagePair',
    schema: [{ '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }],
  });
}
