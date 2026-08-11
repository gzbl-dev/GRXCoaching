// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

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
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const activeSectionObserver = new IntersectionObserver(
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
sections.forEach((section) => activeSectionObserver.observe(section));

// Reveal-on-scroll
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
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
revealEls.forEach((el) => revealObserver.observe(el));

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
    return cards[0].getBoundingClientRect().width + trackGap;
  }

  function rebuildDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir al grupo ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function render() {
    reviewsTrack.style.transform = `translateX(-${current * stepPx()}px)`;
    Array.from(dotsWrap.children).forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function goTo(index) {
    current = (index + maxIndex + 1) % (maxIndex + 1);
    render();
  }

  function recalc() {
    const newMaxIndex = Math.max(0, cards.length - visibleCount());
    if (newMaxIndex !== maxIndex) {
      maxIndex = newMaxIndex;
      current = Math.min(current, maxIndex);
      rebuildDots();
    }
    const hideNav = maxIndex === 0;
    prevBtn.classList.toggle("is-hidden", hideNav);
    nextBtn.classList.toggle("is-hidden", hideNav);
    dotsWrap.classList.toggle("is-hidden", hideNav);
    render();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  window.addEventListener("resize", () => { recalc(); });

  recalc();
}

// Copy Discord username to clipboard
const discordCopy = document.getElementById("discordCopy");
if (discordCopy) {
  const hint = discordCopy.querySelector(".contact-hint");
  discordCopy.addEventListener("click", async () => {
    const value = discordCopy.dataset.value;
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      // Clipboard API unavailable — fall back silently, user can still read/select the value.
    }
    hint.textContent = hint.dataset.copied;
    setTimeout(() => {
      hint.textContent = hint.dataset.default;
    }, 1800);
  });
}
