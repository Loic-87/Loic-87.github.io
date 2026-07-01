// ===== Portfolio — interactions légères =====

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// 0-) Écran de lancement
const splash = document.getElementById('splash');
if (splash) {
  const hideSplash = () => splash.classList.add('hide');
  if (reduceMotion) { splash.remove(); }
  else {
    window.addEventListener('load', () => setTimeout(hideSplash, 1400));
    // sécurité : ne jamais rester bloqué sur le splash
    setTimeout(hideSplash, 3000);
    splash.addEventListener('transitionend', () => splash.remove());
  }
}

// 0-) Bascule du thème clair / sombre
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('theme', 'dark'); } catch (e) {}
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      try { localStorage.setItem('theme', 'light'); } catch (e) {}
    }
  });
}

// 0-) Formulaire de contact -> ouvre le client mail (site statique, sans serveur)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();
    if (!name || !email || !message) {
      const hint = document.getElementById('form-hint');
      if (hint) { hint.textContent = 'Merci de remplir les trois champs.'; hint.style.color = 'var(--magenta)'; }
      return;
    }
    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:loic.lf87@gmail.com?subject=${subject}&body=${body}`;
  });
}

// 0-) Neutralise les liens encore en placeholder (href="#") pour éviter le saut en haut
document.querySelectorAll('a[href="#"]').forEach((a) => {
  a.addEventListener('click', (e) => e.preventDefault());
});

// 0-) Barre de progression de lecture
const progress = document.getElementById('progress');
if (progress) {
  const setProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const ratio = max > 0 ? h.scrollTop / max : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };
  setProgress();
  window.addEventListener('scroll', setProgress, { passive: true });
}

// 0-) Parallaxe des halos d'arrière-plan
const bgDecor = document.querySelector('.bg-decor');
if (bgDecor && !reduceMotion) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const shift = Math.min(window.scrollY * 0.12, 150);
      bgDecor.style.transform = `translate3d(0, ${shift}px, 0)`;
      ticking = false;
    });
  }, { passive: true });
}

// 0-) Compteurs animés (stats du hero)
const stats = document.querySelectorAll('.stat-num');
if (stats.length && 'IntersectionObserver' in window && !reduceMotion) {
  const countUp = (el) => {
    const m = el.textContent.trim().match(/^(\d+)(\D*)$/);
    if (!m) return; // ex. "Limoges" : on ne touche pas
    const target = parseInt(m[1], 10);
    const suffix = m[2];
    const dur = 1200;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { countUp(entry.target); statObs.unobserve(entry.target); }
    });
  }, { threshold: 0.6 });
  stats.forEach((s) => statObs.observe(s));
}

// 0-) Lueur intérieure des cartes projets (suit le curseur)
if (finePointer) {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });
}

// 0-) Boutons magnétiques (hero)
if (finePointer && !reduceMotion) {
  document.querySelectorAll('.hero-btns .btn').forEach((btn) => {
    const STR = 0.35;
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${x * STR}px, ${y * STR}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}

// 0a) Lueur qui suit la souris
const glow = document.querySelector('.cursor-glow');
if (glow && finePointer && !reduceMotion) {
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  const render = () => {
    cx += (tx - cx) * 0.15;
    cy += (ty - cy) * 0.15;
    glow.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
      raf = requestAnimationFrame(render);
    } else { raf = null; }
  };
  window.addEventListener('pointermove', (e) => {
    tx = e.clientX; ty = e.clientY;
    glow.style.opacity = '1';
    if (!raf) raf = requestAnimationFrame(render);
  });
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
}

// 0b) Titre animé — effet de frappe sur une liste de mots
const rotator = document.getElementById('rotator');
if (rotator) {
  const words = ['web', 'web mobile', 'front-end', 'back-end', 'en reconversion'];
  if (reduceMotion) {
    rotator.textContent = words[0];
  } else {
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = words[wi];
      ci += deleting ? -1 : 1;
      rotator.textContent = word.slice(0, ci);
      let delay = deleting ? 45 : 90;
      if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 350; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 800);
  }
}

// 1) Apparition des éléments au scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // léger décalage en cascade pour les éléments visibles ensemble
        entry.target.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// 2) Bordure de la nav quand on scrolle
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// 3) Menu mobile
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// 4) Lien de navigation actif selon la section visible
const sections = document.querySelectorAll('main section[id]');
const navMap = new Map(
  [...links.querySelectorAll('a')].map((a) => [a.getAttribute('href').slice(1), a])
);
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = navMap.get(entry.target.id);
      if (link && entry.isIntersecting) {
        navMap.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach((s) => spy.observe(s));
}
