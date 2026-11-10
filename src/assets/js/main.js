/* Lake Havasu City Epoxy — interactions */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header turns solid once you leave the top of the page */
  const top = $('[data-header]');
  const solid = () => top?.classList.toggle('is-solid', scrollY > 10 || !document.querySelector('.hero'));
  solid(); addEventListener('scroll', solid, { passive: true });

  /* Services dropdown */
  const ddBtn = $('.nav__btn'), dd = $('#dd-services');
  const setDD = (o) => { if (!ddBtn) return; ddBtn.setAttribute('aria-expanded', String(o)); dd.classList.toggle('is-open', o); };
  if (ddBtn) {
    const li = ddBtn.parentElement; let t;
    ddBtn.addEventListener('click', () => setDD(ddBtn.getAttribute('aria-expanded') !== 'true'));
    li.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) { clearTimeout(t); setDD(true); } });
    li.addEventListener('mouseleave', () => { if (matchMedia('(hover: hover)').matches) t = setTimeout(() => setDD(false), 180); });
    li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) setDD(false); });
    document.addEventListener('click', (e) => { if (!li.contains(e.target)) setDD(false); });
  }

  /* Mobile nav */
  const burger = $('[data-burger]'), mnav = $('#mnav');
  const setNav = (o) => { if (!burger) return; mnav.hidden = !o; burger.setAttribute('aria-expanded', String(o)); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); top?.classList.add('is-solid'); if (!o) solid(); };
  burger?.addEventListener('click', () => setNav(mnav.hidden));

  /* Quote modal (native <dialog>) */
  const modal = $('#quote-modal');
  const openModal = () => { if (!modal) return; setNav(false); setDD(false); if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', ''); setTimeout(() => $('input', modal)?.focus(), 30); };
  const closeModal = () => { if (modal?.open) modal.close ? modal.close() : modal.removeAttribute('open'); };
  $$('[data-quote]').forEach((b) => b.addEventListener('click', openModal));
  $$('[data-modal-close]').forEach((b) => b.addEventListener('click', closeModal));
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setDD(false); if (mnav && !mnav.hidden) { setNav(false); burger.focus(); } } });

  /* Reveal */
  const els = $$('.up, .mask');
  if (still || !('IntersectionObserver' in window)) els.forEach((e) => e.classList.add('on'));
  else { const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }); els.forEach((e) => io.observe(e)); }

  /* Parallax */
  const px = $$('[data-parallax]');
  if (px.length && !still) {
    let q = false;
    const run = () => { const vh = innerHeight; px.forEach((el) => { const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; el.style.transform = `translate3d(0,${(((r.top + r.height / 2 - vh / 2) / vh) * -64).toFixed(1)}px,0)`; }); q = false; };
    addEventListener('scroll', () => { if (!q) { q = true; requestAnimationFrame(run); } }, { passive: true }); run();
  }

  /* Counters */
  const animate = (el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || '', pre = el.dataset.prefix || '';
    if (still) { el.textContent = pre + end.toLocaleString('en-US') + suf; return; }
    const t0 = performance.now();
    const f = (t) => { const p = Math.min(1, (t - t0) / 1400); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US') + suf; if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  };
  if ('IntersectionObserver' in window) { const co = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { animate(en.target); co.unobserve(en.target); } }), { threshold: 0.6 }); $$('[data-count]').forEach((c) => co.observe(c)); }

  /* Service switcher (vertical tabs) */
  $$('[data-switch]').forEach((root) => {
    const tabs = $$('[role="tab"]', root);
    const pick = (tab, focus) => { tabs.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; $('#' + t.getAttribute('aria-controls')).hidden = !on; }); if (focus) tab.focus(); };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pick(t));
      t.addEventListener('keydown', (e) => {
        const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (d) { e.preventDefault(); pick(tabs[(i + d + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); pick(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); pick(tabs[tabs.length - 1], true); }
      });
    });
  });

  /* Contents rail highlighting */
  const rail = $$('.rail a[href^="#"]');
  if (rail.length && 'IntersectionObserver' in window) {
    const m = new Map(rail.map((a) => [a.hash.slice(1), a]));
    const ro = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { rail.forEach((a) => a.classList.remove('cur')); m.get(en.target.id)?.classList.add('cur'); } }), { rootMargin: '-30% 0px -60% 0px' });
    m.forEach((_, id) => { const el = document.getElementById(id); if (el) ro.observe(el); });
  }

  /* Lead forms */
  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please add your name.'),
    phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a full 10-digit phone number.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please check your email address.'),
    project: (v) => (v ? '' : 'Please choose a project type.'),
  };
  const check = (el) => {
    const r = rules[el.name]; if (!r) return true;
    const msg = r(el.value), box = el.closest('.in'), err = $('.in__err', box);
    box.classList.toggle('bad', !!msg); el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) { err.id ||= el.id + '-err'; el.setAttribute('aria-describedby', err.id); err.textContent = msg; }
    return !msg;
  };
  $$('[data-lead-form]').forEach((form) => {
    const ph = form.elements.phone;
    ph?.addEventListener('input', () => { const d = ph.value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10); ph.value = d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d; });
    $$('input, select', form).forEach((el) => { el.addEventListener('blur', () => el.value && check(el)); el.addEventListener('input', () => el.closest('.in')?.classList.contains('bad') && check(el)); });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msg = $('.qf__msg', form), fields = $$('[name]', form).filter((el) => rules[el.name]);
      if (!fields.map(check).every(Boolean)) { fields.find((f) => f.getAttribute('aria-invalid') === 'true')?.focus(); return; }
      const btn = $('.qf__go', form), lbl = $('span', btn), txt = lbl.textContent;
      btn.disabled = true; lbl.textContent = 'Sending…'; msg.className = 'qf__msg'; msg.textContent = '';
      const data = Object.fromEntries(new FormData(form)); data.page = location.pathname;
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || !out.ok) throw new Error();
        form.classList.add('sent'); msg.classList.add('ok');
        msg.textContent = `Thanks, ${data.name.trim().split(' ')[0]}! Your quote request is in. We'll reach out shortly to set up a visit.`;
        msg.tabIndex = -1; msg.focus({ preventScroll: true });
      } catch {
        msg.classList.add('no');
        const tel = $('.top__tel');
        msg.innerHTML = `We couldn't send that just now. Please try again or call <a href="${tel?.getAttribute('href') || '#'}">${$('.top__tel-num')?.textContent || 'us'}</a>.`;
      } finally { btn.disabled = false; lbl.textContent = txt; }
    });
  });
  $$('[data-year]').forEach((y) => (y.textContent = new Date().getFullYear()));
})();
