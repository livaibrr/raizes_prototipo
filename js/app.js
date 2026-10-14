/**
 * Raízes — Protótipo interativo
 * Navegação entre 10 telas + interações
 */
(function () {
  'use strict';

  const screens = document.querySelectorAll('.screen');
  const bottomNav = document.getElementById('bottomNav');
  const navItems = document.querySelectorAll('.nav-item');

  const navScreens = ['home', 'discover', 'map', 'route-result', 'profile'];
  const screensWithNav = new Set(navScreens);

  let currentScreen = 'splash';
  let onboardStep = 1;
  const totalSteps = 4;
  let galleryIndex = 0;
  let galleryTimer = null;

  /* ── Navegação principal ── */
  function goTo(screenId) {
    if (currentScreen === screenId) return;
    currentScreen = screenId;

    screens.forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + screenId);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }

    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.nav === screenId);
    });

    if (bottomNav) {
      bottomNav.classList.toggle('hidden', !screensWithNav.has(screenId));
    }

    if (screenId === 'place') startGallery();
    else stopGallery();
  }

  /* ── Event delegation ── */
  document.addEventListener('click', e => {
    const goBtn = e.target.closest('[data-go]');
    if (goBtn) {
      e.preventDefault();
      goTo(goBtn.dataset.go);
      return;
    }

    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      goTo(navBtn.dataset.nav);
      return;
    }

  });

  /* ── Chips toggle ── */
  document.addEventListener('click', e => {
    const chip = e.target.closest('[data-chip]');
    if (chip) chip.classList.toggle('selected');

    const option = e.target.closest('[data-option]');
    if (option) {
      const siblings = option.closest('.option-cards, .onboard-step');
      if (siblings) {
        siblings.querySelectorAll('[data-option]').forEach(o => o.classList.remove('selected'));
      }
      option.classList.add('selected');
    }

    const filterChip = e.target.closest('.filter-chip');
    if (filterChip) {
      filterChip.closest('.filter-chips')?.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      filterChip.classList.add('active');
    }

    const dateTab = e.target.closest('.date-tab');
    if (dateTab) {
      dateTab.closest('.date-tabs')?.querySelectorAll('.date-tab').forEach(t => t.classList.remove('active'));
      dateTab.classList.add('active');
    }
  });

  /* ── Onboarding steps ── */
  const progressFill = document.getElementById('onboardProgress');
  const stepLabel = document.getElementById('stepLabel');
  const onboardNext = document.getElementById('onboardNext');
  const onboardBack = document.getElementById('onboardBack');

  function updateOnboardStep() {
    document.querySelectorAll('.onboard-step').forEach(step => {
      step.classList.toggle('active', parseInt(step.dataset.step) === onboardStep);
    });
    if (progressFill) progressFill.style.width = (onboardStep / totalSteps * 100) + '%';
    if (stepLabel) stepLabel.textContent = onboardStep + ' de ' + totalSteps;
    if (onboardNext) {
      onboardNext.textContent = onboardStep === totalSteps ? 'Permitir e começar' : 'Continuar';
    }
    document.getElementById('screen-onboarding')?.classList.toggle('onboard-location-mode', onboardStep === 4);
  }

  onboardNext?.addEventListener('click', () => {
    if (onboardStep < totalSteps) {
      onboardStep++;
      updateOnboardStep();
    } else {
      goTo('home');
      onboardStep = 1;
      updateOnboardStep();
    }
  });

  onboardBack?.addEventListener('click', () => {
    if (onboardStep > 1) {
      onboardStep--;
      updateOnboardStep();
    } else {
      goTo('splash');
    }
  });

  /* ── Range slider ── */
  const distRange = document.getElementById('distRange');
  const distValue = document.getElementById('distValue');
  distRange?.addEventListener('input', () => {
    if (distValue) distValue.textContent = distRange.value + ' km';
  });

  /* ── Place gallery auto-slide ── */
  function startGallery() {
    stopGallery();
    galleryIndex = 0;
    galleryTimer = setInterval(() => {
      const slides = document.querySelectorAll('.gallery-slide');
      const dots = document.querySelectorAll('#galleryDots .dot');
      if (!slides.length) return;
      slides[galleryIndex]?.classList.remove('active');
      dots[galleryIndex]?.classList.remove('active');
      galleryIndex = (galleryIndex + 1) % slides.length;
      slides[galleryIndex]?.classList.add('active');
      dots[galleryIndex]?.classList.add('active');
    }, 3500);
  }

  function stopGallery() {
    if (galleryTimer) {
      clearInterval(galleryTimer);
      galleryTimer = null;
    }
  }

  /* ── Favoritar toggle ── */
  document.querySelector('.place-fav')?.addEventListener('click', function () {
    this.classList.toggle('is-fav');
  });

  /* ── Init + image fallback ── */
  if (bottomNav) bottomNav.classList.add('hidden');
  updateOnboardStep();

  const FALLBACK_IMG = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80';
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function handleImgError() {
      if (this.dataset.fallback) return;
      this.dataset.fallback = '1';
      this.src = FALLBACK_IMG;
    }, { once: false });
  });
})();
