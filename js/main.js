// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Back to top (logo/brand link) — anchoring to the sticky header itself doesn't
// reliably scroll in every browser, so force it via JS instead
// Defensivo: si matchMedia no existe, damos por hecho que no hay preferencia y
// seguimos. Antes, un fallo aqui tumbaba todo el resto del fichero (carrusel incluido).
const reducedMotion = typeof window.matchMedia === "function"
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : { matches: false };

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
  });
});

// Scroll progress bar
const scrollProgress = document.getElementById("scrollProgress");
let progressTicking = false;

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  progressTicking = false;
}

window.addEventListener("scroll", () => {
  if (!progressTicking) {
    requestAnimationFrame(updateScrollProgress);
    progressTicking = true;
  }
});
updateScrollProgress();

// Active nav link while scrolling
// Todo lo que sigue es decorativo. Si IntersectionObserver falla o no existe,
// degradamos en vez de reventar: lo importante (packs, carrusel, contacto) va detras.
const hasObserver = typeof IntersectionObserver === "function";

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const activeSectionObserver = hasObserver && new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
if (activeSectionObserver) sections.forEach((section) => activeSectionObserver.observe(section));

// Reveal-on-scroll
const revealEls = document.querySelectorAll(".reveal");
if (reducedMotion.matches || !hasObserver) {
  // Sin animacion de entrada: mostramos todo de una, nada de esperar al scroll.
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
const revealObserver = hasObserver && new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
if (revealObserver) revealEls.forEach((el) => revealObserver.observe(el));

// Reviews carousel — slides one card at a time, adapting to how many fit on screen
const reviewsTrack = document.getElementById("reviewsTrack");
if (reviewsTrack) {
  const cards = Array.from(reviewsTrack.children);
  const wrapEl = reviewsTrack.parentElement;
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const dotsWrap = document.getElementById("carouselDots");
  let current = 0;
  let maxIndex = 0;

  function visibleCount() {
    return parseInt(getComputedStyle(wrapEl).getPropertyValue("--cards-visible"), 10) || 1;
  }

  function stepPx() {
    const trackGap = parseFloat(getComputedStyle(reviewsTrack).gap) || 0;
    // El ancho calculado ignora el scale() de las tarjetas apagadas (.is-out), el rect no.
    // (offsetWidth tambien lo ignora, pero redondea y el error se acumula al avanzar.)
    return parseFloat(getComputedStyle(cards[0]).width) + trackGap;
  }

  function rebuildDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      const label = (window.GRX && window.GRX.t)
        ? window.GRX.t("reviews.dot", { n: i + 1 })
        : `Ir al grupo ${i + 1}`;
      dot.setAttribute("aria-label", label);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function render() {
    reviewsTrack.style.transform = `translateX(-${current * stepPx()}px)`;
    Array.from(dotsWrap.children).forEach((dot, i) => dot.classList.toggle("active", i === current));
    const shown = visibleCount();
    cards.forEach((card, i) => card.classList.toggle("is-out", i < current || i >= current + shown));
  }

  function goTo(index) {
    current = (index + maxIndex + 1) % (maxIndex + 1);
    render();
    restartAutoplay();
  }

  // Autoplay: avanza solo, pero se para cuando el usuario esta mirando o tocando el
  // carrusel, cuando no esta en pantalla o la pestaña esta oculta, y nunca arranca
  // si el sistema pide movimiento reducido.
  const AUTOPLAY_MS = 5500;
  const carouselEl = wrapEl.closest(".reviews-carousel") || wrapEl;
  const autoplayAllowed = !reducedMotion.matches;
  let autoTimer = null, autoStartedAt = 0, autoRemaining = AUTOPLAY_MS;
  let hovering = false, focusedByKeyboard = false, touching = false, inView = false;

  dotsWrap.style.setProperty("--autoplay-ms", `${AUTOPLAY_MS}ms`);
  dotsWrap.classList.toggle("is-autoplay", autoplayAllowed);

  function shouldRun() {
    return autoplayAllowed && maxIndex > 0 && inView && !document.hidden
      && !hovering && !focusedByKeyboard && !touching;
  }

  function stopTimer() {
    if (!autoTimer) return;
    clearTimeout(autoTimer);
    autoTimer = null;
    autoRemaining = Math.max(0, autoRemaining - (Date.now() - autoStartedAt));
  }

  function updateAutoplay() {
    const run = shouldRun();
    dotsWrap.classList.toggle("is-paused", !run);
    if (run && !autoTimer) {
      autoStartedAt = Date.now();
      autoTimer = setTimeout(() => {
        autoTimer = null;
        goTo(current + 1);
      }, autoRemaining);
    } else if (!run) {
      stopTimer();
    }
  }

  function restartAutoplay() {
    if (!autoplayAllowed) return;
    clearTimeout(autoTimer);
    autoTimer = null;
    autoRemaining = AUTOPLAY_MS;
    // Reinicia la barrita del punto activo aunque el indice no cambie
    const active = dotsWrap.querySelector("button.active");
    if (active) {
      active.classList.remove("active");
      void active.offsetWidth;
      active.classList.add("active");
    }
    updateAutoplay();
  }

  carouselEl.addEventListener("mouseenter", () => { hovering = true; updateAutoplay(); });
  carouselEl.addEventListener("mouseleave", () => { hovering = false; updateAutoplay(); });
  carouselEl.addEventListener("focusin", (e) => {
    // Solo pausamos con foco de teclado: tras un clic en una flecha el boton se queda
    // con el foco y no queremos que el carrusel se quede parado para siempre.
    let kb = true;
    try { kb = e.target.matches(":focus-visible"); } catch (err) {}
    focusedByKeyboard = kb;
    updateAutoplay();
  });
  carouselEl.addEventListener("focusout", (e) => {
    if (!carouselEl.contains(e.relatedTarget)) { focusedByKeyboard = false; updateAutoplay(); }
  });
  wrapEl.addEventListener("touchstart", () => { touching = true; updateAutoplay(); }, { passive: true });
  wrapEl.addEventListener("touchend", () => { touching = false; updateAutoplay(); });
  wrapEl.addEventListener("touchcancel", () => { touching = false; updateAutoplay(); });
  document.addEventListener("visibilitychange", updateAutoplay);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      updateAutoplay();
    }, { threshold: 0.35 }).observe(carouselEl);
  } else {
    inView = true;
  }

  function recalc() {
    const newMaxIndex = Math.max(0, cards.length - visibleCount());
    const changed = newMaxIndex !== maxIndex;
    if (changed) {
      maxIndex = newMaxIndex;
      current = Math.min(current, maxIndex);
      rebuildDots();
    }
    const hideNav = maxIndex === 0;
    prevBtn.classList.toggle("is-hidden", hideNav);
    nextBtn.classList.toggle("is-hidden", hideNav);
    dotsWrap.classList.toggle("is-hidden", hideNav);
    render();
    if (changed) restartAutoplay(); else updateAutoplay();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  // Flechas de teclado cuando el carrusel tiene el foco
  wrapEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
  });

  // Arrastrar / deslizar. La mayoria del trafico llega de Discord y X, o sea movil,
  // donde el gesto natural es deslizar la tarjeta, no buscar la flechita.
  let dragX = 0, dragY = 0, dragging = false, decided = false, horizontal = false;

  function dragStart(x, y) { dragX = x; dragY = y; dragging = true; decided = false; horizontal = false; }

  function dragMove(x, y, e) {
    if (!dragging) return;
    const dx = x - dragX;
    const dy = y - dragY;
    if (!decided && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      decided = true;
      horizontal = Math.abs(dx) > Math.abs(dy);
    }
    // Si el gesto es horizontal, es nuestro: cortamos el scroll vertical de la pagina.
    if (decided && horizontal && e.cancelable) e.preventDefault();
  }

  function dragEnd(x) {
    if (!dragging) return;
    const dx = x - dragX;
    dragging = false;
    if (horizontal && Math.abs(dx) > 45) goTo(dx < 0 ? current + 1 : current - 1);
  }

  wrapEl.addEventListener("touchstart", (e) => dragStart(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  wrapEl.addEventListener("touchmove", (e) => dragMove(e.touches[0].clientX, e.touches[0].clientY, e), { passive: false });
  wrapEl.addEventListener("touchend", (e) => dragEnd(e.changedTouches[0].clientX));
  wrapEl.addEventListener("touchcancel", () => { dragging = false; });

  wrapEl.addEventListener("mousedown", (e) => { dragStart(e.clientX, e.clientY); });
  window.addEventListener("mousemove", (e) => dragMove(e.clientX, e.clientY, e));
  window.addEventListener("mouseup", (e) => dragEnd(e.clientX));
  wrapEl.addEventListener("dragstart", (e) => e.preventDefault());

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(recalc, 120);
  });
  window.addEventListener("grx:langchange", () => { rebuildDots(); render(); restartAutoplay(); });

  recalc();
}

// FAQ: se despliega con animacion y solo queda abierta una pregunta a la vez
const faqItems = document.querySelectorAll(".faq-item");
const canAnimate = typeof Element.prototype.animate === "function";

function animateFaq(item, opening) {
  const body = item.querySelector(".faq-body");
  if (item._faqAnim) item._faqAnim.cancel();

  item.classList.toggle("is-open", opening);
  if (opening) item.open = true;

  if (!body || !canAnimate || reducedMotion.matches) {
    item.open = opening;
    return;
  }

  const full = body.scrollHeight + "px";
  const anim = body.animate(
    opening
      ? [{ height: "0px", opacity: 0 }, { height: full, opacity: 1 }]
      : [{ height: full, opacity: 1 }, { height: "0px", opacity: 0 }],
    { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
  );
  item._faqAnim = anim;
  anim.onfinish = () => {
    item._faqAnim = null;
    if (!opening) item.open = false;
  };
}

faqItems.forEach((item) => {
  const summary = item.querySelector("summary");
  if (!summary) return;
  summary.addEventListener("click", (e) => {
    e.preventDefault();
    const opening = !item.classList.contains("is-open");
    if (opening) {
      faqItems.forEach((other) => {
        if (other !== item && other.classList.contains("is-open")) animateFaq(other, false);
      });
    }
    animateFaq(item, opening);
  });
});
