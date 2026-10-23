const LANG_KEY = "grx-lang";

const translations = {
  es: {
    "meta.title": "GRX Coaching | Sube de elo en League of Legends",
    "meta.description": "Coaching de League of Legends con GRX. Sube de elo con sesiones personalizadas.",
    "lang.label": "Idioma",
    "nav.about": "Sobre mí",
    "nav.career": "Trayectoria",
    "nav.packs": "Packs",
    "nav.reviews": "Reviews",
    "nav.contact": "Contacto",
    "nav.open": "Abrir menú",
    "cta.book": "Reserva tu sesión",
    "hero.eyebrow": "Mejora tu gameplay - Alcanza tu máximo potencial",
    "hero.title": "Sube elo con un jungla con experiencia",
    "hero.lead": "Soy Gonzalo <strong>“GRX”</strong>, jugador asiduo de alto nivel. Coacheo desde mi propia experiencia jugando SoloQ cada día, aplicando lo aprendido en la escena competitiva, no hace falta un manual ni aprender la teoría completa. Me adapto a cualquier situación.",
    "hero.leaguepedia": "Mi Leaguepedia ↗",
    "stats.rank": "Rango actual",
    "stats.yearsValue": "+4 años",
    "stats.experience": "Experiencia",
    "stats.peak": "Peak Rank Europa",
    "stats.coaching": "de coaching",
    "about.eyebrow": "Sobre mí",
    "about.title": "De UCAM Esports al coaching individual",
    "about.p1": "Empecé mi carrera competitiva en 2022 en la cantera de <strong>UCAM Esports Academy</strong>, compaginando la competición con mis estudios, en 2023 di el salto de suplente al primer equipo en <strong>Superliga</strong>. Desde entonces he competido con <strong>UCAM University Esports</strong>, <strong>Tan'i eSports</strong> y <strong>Oxygen Gaming</strong>, y soy <strong>tricampeón de la Liga Universitaria Española de League of Legends</strong> con UCAM University.",
    "about.p2": "Actualmente soy <strong>Rank 2000 de EUW </strong>en soloQ (peak +1350 LP) y quiero ayudarte a entender la jungla como se juega a nivel competitivo: pathing, lectura de mapa, control de objetivos, matchups y toma de decisiones en early/mid game. Nada de teoría genérica - trabajamos sobre tus propias partidas.",
    "about.twitter": "Sígueme en X ↗",
    "about.photoAlt": "Gromix con la camiseta de UCAM Universidad Esports",
    "career.eyebrow": "Trayectoria",
    "career.title": "Mi carrera competitiva",
    "career.bannerAlt": "Gromix y UCAM Universidad Esports celebrando un título",
    "career.2026.title": "Tricampeón Liga Universitaria · Top 3 Circuito Tormenta",
    "career.2026.body": "Tercer título de la Liga Universitaria Española con UCAM University, además de un top 3 en el Circuito Tormenta, y empiezo a compaginarlo con coaching individual.",
    "career.2025.body": "Competición activa en distintos proyectos de la escena española, segunda división e iberian cup.",
    "career.2024.title": "Bicampeón Liga Universitaria Española",
    "career.2024.body": "Título con UCAM University - segundo año consecutivo del club como campeón universitario a nivel nacional.",
    "career.2023.body": "Aprendiendo junto al primer equipo de UCAM Esports, supliendo en la máxima categoría nacional.",
    "career.2022.body": "Debut en la cantera de UCAM, jugando de jungla en la estructura académica del club.",
    "packs.eyebrow": "Packs de coaching",
    "packs.title": "¿Listo para subir de elo?",
    "packs.lead": "Sesiones personalizadas, individuales o en equipo, centradas en tus partidas: VOD review, pathing de jungla, macro y toma de decisiones.",
    "packs.perSession": "/ sesión",
    "packs.perPack": "/ pack",
    "packs.book": "Reservar",
    "packs.popular": "MÁS POPULAR",
    "packs.single.title": "Sesión individual",
    "packs.single.note": "Ideal para probar y resolver dudas puntuales",
    "packs.single.f1": "Review de VOD/replay",
    "packs.single.f2": "Análisis de pathing y objetivos",
    "packs.single.f3": "Feedback de matchups",
    "packs.3.title": "Pack 3 sesiones",
    "packs.3.note": "13,3€ por sesión · ahorras 11%",
    "packs.3.f1": "Todo lo del pack suelto",
    "packs.3.f2": "Seguimiento de progresión entre sesiones",
    "packs.3.f3": "Plan de mejora personalizado",
    "packs.5.title": "Pack 5 sesiones",
    "packs.5.note": "12€ por sesión · ahorras 20%",
    "packs.5.f1": "Todo lo del pack de 3 sesiones",
    "packs.5.f2": "Mejora sostenida a medio plazo",
    "packs.5.f3": "Mejor precio por sesión",
    "packs.from": "Desde",
    "packs.team.title": "Sesión de equipo",
    "packs.team.note": "Para equipos de flex o 5 man",
    "packs.team.f1": "VOD review del equipo",
    "packs.team.f2": "Análisis de comunicación y macro",
    "packs.team.f3": "Estrategias de draft",
    "packs.team.f4": "Plan de mejora grupal",
    "packs.team.cta": "El precio depende del equipo y del formato. Escríbeme y lo cuadramos.",
    "packs.team.book": "Háblame",
    "nav.process": "Cómo funciona",
    "nav.faq": "FAQ",
    "process.eyebrow": "Cómo funciona",
    "process.title": "De escribirme a tu primera sesión",
    "process.lead": "Sin formularios largos ni intermediarios. Tres pasos y estamos dentro.",
    "process.s1.title": "Escríbeme",
    "process.s1.body": "Por Discord, correo o Twitter. Cuéntame tus objetivos, tu elo actual y qué crees que te está frenando.",
    "process.s2.title": "Cuadramos día y hora",
    "process.s2.body": "Te paso los huecos que tenga y eliges el pack que mejor se adapte a ti, sin ningún compromiso.",
    "process.s3.title": "Sesión 1 a 1",
    "process.s3.body": "De 60 a 90 minutos compartiendo pantalla: tus errores y cómo decidiría en tu lugar un jugador competitivo.",
    "process.bring": "<strong>Qué traer:</strong> una partida reciente (replay o tu perfil de op.gg) y ganas de que te señalen lo que estás haciendo mal.",
    "faq.eyebrow": "Preguntas frecuentes",
    "faq.title": "Dudas antes de reservar",
    "faq.q1": "¿Necesito un rango mínimo para que me sirva?",
    "faq.a1": "No. Trabajo sobre tus partidas y tu nivel, así que el contenido cambia según dónde estés. Lo único que hace falta es que juegues con cierta regularidad para poder aplicar lo que veamos.",
    "faq.q2": "¿Cómo es una sesión por dentro?",
    "faq.a2": "Por Discord con pantalla compartida, entre 60 y 90 minutos. Revisamos partidas tuyas reales: pathing, decisiones en early y mid, control de objetivos y los errores que se repiten. Nada de teoría genérica que no puedas aplicar mañana.",
    "faq.q3": "¿Solo coacheas jungla?",
    "faq.a3": "La jungla es mi rol y donde más valor te puedo dar. Dicho eso, buena parte de lo que trabajamos (lectura de mapa, macro, control de objetivos y toma de decisiones) se aplica a cualquier línea. Si juegas otro rol, escríbeme y te digo con sinceridad si te compensa.",
    "faq.q4": "¿En qué idioma damos la sesión?",
    "faq.a4": "Español o inglés, el que prefieras. Dilo al escribirme.",
    "faq.q6": "¿Y si no puedo asistir a la hora acordada?",
    "faq.a6": "Avísame con antelación y la movemos sin problema. Entiendo que a veces surgen cosas.",
    "contact.mailto": "mailto:gzlbernal@gmail.com?subject=Reserva%20de%20sesi%C3%B3n%20-%20GRX%20Coaching&body=Hola%20Gonzalo%3A%0A%0A-%20Rango%20actual%3A%0A-%20Objetivo%3A%0A-%20Campeones%20que%20juego%3A%0A-%20Pack%20que%20me%20interesa%3A%0A-%20Disponibilidad%20%28dias%20y%20horas%29%3A%0A-%20Mi%20op.gg%20o%20replay%3A%0A%0AGracias%21%0A",
    "reviews.eyebrow": "Reviews",
    "reviews.title": "Lo que dicen mis alumnos",
    "reviews.prev": "Review anterior",
    "reviews.next": "Review siguiente",
    "reviews.dot": "Ir al grupo {n}",
    "reviews.role.pro": "Pro",
    "reviews.role.streamer": "Streamer",
    "reviews.role.student": "Alumno",
    "reviews.simpy": "Conozco a Gonzalo de la escena competitiva, sus sesiones van directas al grano, sin teoría vacía. Si de verdad quieres entender cómo se juega este rol a un nivel decente, GRX es el coach indicado.",
    "reviews.quevedo": "Gonzalo me ha ayudado muchísimo a corregir mis errores de macro y a no tiltearme en mis partidas. Te explica el control de objetivos y la toma de decisiones de una forma súper clara. Es cercano y profesional",
    "reviews.polak": "Mejor de lo que me esperaba. Te da una visión del juego diferente a lo que los coach normales te dicen. Es realista y aplicable a las partidas.",
    "reviews.irfs": "He compartido equipo con Gonzalo y, más allá de la experiencia competitiva, lo que de verdad le hace buen coach es la cantidad de horas que le mete a SoloQ.\nNo te va a vender humo con teorías súper complejas, te enseña de forma práctica a leer el mapa, castigar los errores del rival y tomar buenas decisiones en la jungla.",
    "reviews.sora": "Entré pensando que necesitaba mejorar mecánicas y acabé entendiendo que el problema era cómo tomaba decisiones. Gonzalo te explica el porqué de cada jugada y, sobre todo, te enseña a pensar por tu cuenta. Después de unas sesiones noté muchísimo la diferencia.",
    "contact.eyebrow": "Contacto",
    "contact.title": "¿Hablamos?",
    "contact.lead": "Escríbeme por privado en Discord a <strong>gromixlol</strong> o entra en mi servidor y cuadramos tu sesión.",
    "contact.server": "Servidor",
    "contact.join": "Unirse ↗",
    "contact.write": "Escribir",
    "contact.follow": "Seguir",
  },
  en: {
    "meta.title": "GRX Coaching | Climb elo in League of Legends",
    "meta.description": "League of Legends coaching with GRX. Climb elo with personalized sessions.",
    "lang.label": "Language",
    "nav.about": "About",
    "nav.career": "Career",
    "nav.packs": "Packs",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.open": "Open menu",
    "cta.book": "Book your session",
    "hero.eyebrow": "Improve your gameplay - Reach your full potential",
    "hero.title": "Climb elo with an experienced jungler",
    "hero.lead": "I'm Gonzalo <strong>“GRX”</strong>, a high-elo player who's in SoloQ every day. I coach from my own experience, applying what I learned in the competitive scene — you don't need a textbook or the full theory. I adapt to any situation.",
    "hero.leaguepedia": "My Leaguepedia ↗",
    "stats.rank": "Current rank",
    "stats.yearsValue": "+4 years",
    "stats.experience": "Experience",
    "stats.peak": "Peak Rank Europe",
    "stats.coaching": "of coaching",
    "about.eyebrow": "About me",
    "about.title": "From UCAM Esports to 1-on-1 coaching",
    "about.p1": "I started my competitive career in 2022 in the <strong>UCAM Esports Academy</strong>, balancing competition with my studies. In 2023 I moved from substitute to the first team in <strong>Superliga</strong>. Since then I've competed with <strong>UCAM University Esports</strong>, <strong>Tan'i eSports</strong> and <strong>Oxygen Gaming</strong>, and I'm a <strong>three-time Spanish University League of Legends champion</strong> with UCAM University.",
    "about.p2": "I'm currently <strong>Rank 2000 on EUW </strong>in SoloQ (peak +1350 LP) and I want to help you understand jungle the way it's played at a competitive level: pathing, map reading, objective control, matchups and early/mid-game decision-making. No generic theory — we work on your own games.",
    "about.twitter": "Follow me on X ↗",
    "about.photoAlt": "Gromix wearing the UCAM Universidad Esports jersey",
    "career.eyebrow": "Career",
    "career.title": "My competitive career",
    "career.bannerAlt": "Gromix and UCAM Universidad Esports celebrating a title",
    "career.2026.title": "Three-time University League champion · Top 3 Circuito Tormenta",
    "career.2026.body": "Third Spanish University League title with UCAM University, plus a top 3 in Circuito Tormenta, and I start combining it with 1-on-1 coaching.",
    "career.2025.body": "Active competition across different Spanish-scene projects, second division and Iberian Cup.",
    "career.2024.title": "Back-to-back Spanish University League champion",
    "career.2024.body": "Title with UCAM University — the club's second consecutive year as national university champion.",
    "career.2023.body": "Learning with UCAM Esports' first team, filling in in Spain's top league.",
    "career.2022.body": "Debut in UCAM's academy, playing jungle in the club's academic structure.",
    "packs.eyebrow": "Coaching packs",
    "packs.title": "Ready to climb elo?",
    "packs.lead": "Personalized sessions, solo or as a team, focused on your games: VOD review, jungle pathing, macro and decision-making.",
    "packs.perSession": "/ session",
    "packs.perPack": "/ pack",
    "packs.book": "Book",
    "packs.popular": "MOST POPULAR",
    "packs.single.title": "Single session",
    "packs.single.note": "Ideal to try it out and clear specific doubts",
    "packs.single.f1": "VOD/replay review",
    "packs.single.f2": "Pathing and objective analysis",
    "packs.single.f3": "Matchup feedback",
    "packs.3.title": "3-session pack",
    "packs.3.note": "€13.3 per session · save 11%",
    "packs.3.f1": "Everything in the single session",
    "packs.3.f2": "Progress tracking between sessions",
    "packs.3.f3": "Personalized improvement plan",
    "packs.5.title": "5-session pack",
    "packs.5.note": "€12 per session · save 20%",
    "packs.5.f1": "Everything in the 3-session pack",
    "packs.5.f2": "Sustained mid-term improvement",
    "packs.5.f3": "Best price per session",
    "packs.from": "From",
    "packs.team.title": "Team session",
    "packs.team.note": "For flex or 5-man teams",
    "packs.team.f1": "Team VOD review",
    "packs.team.f2": "Communication and macro analysis",
    "packs.team.f3": "Draft strategies",
    "packs.team.f4": "Group improvement plan",
    "packs.team.cta": "Price depends on the team and format. Message me and we will sort it out.",
    "packs.team.book": "Message me",
    "nav.process": "How it works",
    "nav.faq": "FAQ",
    "process.eyebrow": "How it works",
    "process.title": "From first message to your first session",
    "process.lead": "No long forms, no middlemen. Three steps and we are in.",
    "process.s1.title": "Message me",
    "process.s1.body": "On Discord, email or Twitter. Tell me your goals, your current rank and what you think is holding you back.",
    "process.s2.title": "We pick a day and time",
    "process.s2.body": "I send you my free slots and you pick the pack that suits you best, with no commitment at all.",
    "process.s3.title": "1-on-1 session",
    "process.s3.body": "60 to 90 minutes with screen share: your mistakes and how a competitive player would decide in your place.",
    "process.bring": "<strong>What to bring:</strong> a recent game (replay or your op.gg profile) and a willingness to hear what you are doing wrong.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions before booking",
    "faq.q1": "Do I need a minimum rank for this to be worth it?",
    "faq.a1": "No. I work on your games and your level, so the content changes depending on where you are. All you need is to play regularly enough to apply what we cover.",
    "faq.q2": "What does a session actually look like?",
    "faq.a2": "On Discord with screen share, 60 to 90 minutes. We go through your real games: pathing, early and mid game decisions, objective control and the mistakes that keep repeating. No generic theory you cannot use tomorrow.",
    "faq.q3": "Do you only coach jungle?",
    "faq.a3": "Jungle is my role and where I can give you the most value. That said, a lot of what we work on (map reading, macro, objective control and decision-making) applies to any lane. If you play another role, message me and I will tell you honestly whether it is worth it.",
    "faq.q4": "What language are sessions in?",
    "faq.a4": "Spanish or English, whichever you prefer. Just say so when you message me.",
    "faq.q6": "What if I cannot make the agreed time?",
    "faq.a6": "Let me know in advance and we will move it, no problem. Things come up.",
    "contact.mailto": "mailto:gzlbernal@gmail.com?subject=Session%20booking%20-%20GRX%20Coaching&body=Hi%20Gonzalo%2C%0A%0A-%20Current%20rank%3A%0A-%20Goal%3A%0A-%20Champions%20I%20play%3A%0A-%20Pack%20I%20am%20interested%20in%3A%0A-%20Availability%20%28days%20and%20times%29%3A%0A-%20My%20op.gg%20or%20replay%3A%0A%0AThanks%21%0A",
    "reviews.eyebrow": "Reviews",
    "reviews.title": "What my students say",
    "reviews.prev": "Previous review",
    "reviews.next": "Next review",
    "reviews.dot": "Go to group {n}",
    "reviews.role.pro": "Pro",
    "reviews.role.streamer": "Streamer",
    "reviews.role.student": "Student",
    "reviews.simpy": "I've known Gonzalo from the competitive scene. His sessions get straight to the point, with no empty theory. If you really want to understand how this role is played at a decent level, GRX is the right coach.",
    "reviews.quevedo": "Gonzalo has helped me a lot to fix my macro mistakes and to not tilt in my games. He explains objective control and decision-making super clearly. He's approachable and professional.",
    "reviews.polak": "Better than I expected. He gives you a different view of the game from what regular coaches tell you. It's realistic and applicable in games.",
    "reviews.irfs": "I've played on a team with Gonzalo and, beyond the competitive experience, what really makes him a good coach is the hours he puts into SoloQ.\nHe won't sell you smoke with overly complex theories — he teaches you practically how to read the map, punish the opponent's mistakes and make good jungle decisions.",
    "reviews.sora": "I came in thinking I needed to improve mechanics and ended up understanding that the problem was how I made decisions. Gonzalo explains the why behind every play and, above all, teaches you to think for yourself. After a few sessions I noticed a huge difference.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.lead": "Send me a DM on Discord at <strong>gromixlol</strong> or join my server and we'll set up your session.",
    "contact.server": "Server",
    "contact.join": "Join ↗",
    "contact.write": "Email",
    "contact.follow": "Follow",
  },
};

function langFromUrl() {
  try {
    const value = new URLSearchParams(window.location.search).get("lang");
    const code = String(value || "").toLowerCase().slice(0, 2);
    if (code === "en" || code === "es") return code;
  } catch (err) {
    // navegador sin URLSearchParams
  }
  return null;
}

function detectLang() {
  // El parametro de la URL manda: asi /?lang=en es un enlace compartible
  // y una URL propia que Google puede indexar.
  const fromUrl = langFromUrl();
  if (fromUrl) return fromUrl;

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch (err) {
    // private mode / blocked storage
  }

  const list = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || "es"];

  for (const item of list) {
    const code = String(item || "").toLowerCase().slice(0, 2);
    if (code === "en") return "en";
    if (code === "es") return "es";
  }
  return "es";
}

function t(key, vars) {
  const lang = document.documentElement.getAttribute("data-lang") || "es";
  let value = (translations[lang] && translations[lang][key])
    || translations.es[key]
    || key;
  if (vars) {
    Object.keys(vars).forEach((name) => {
      value = value.replaceAll(`{${name}}`, String(vars[name]));
    });
  }
  return value;
}

function applyLang(lang) {
  const next = lang === "en" ? "en" : "es";
  document.documentElement.lang = next;
  document.documentElement.setAttribute("data-lang", next);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const attr = el.getAttribute("data-i18n-attr");
    const html = el.hasAttribute("data-i18n-html");
    const value = t(key);

    if (attr) {
      el.setAttribute(attr, value);
    } else if (html) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }

    if (el.hasAttribute("data-default")) {
      el.dataset.default = value;
    }
    if (el.hasAttribute("data-i18n-copied")) {
      el.dataset.copied = t(el.getAttribute("data-i18n-copied"));
    }
  });

  document.title = t("meta.title");
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.setAttribute("content", t("meta.description"));
  if (ogTitle) ogTitle.setAttribute("content", t("meta.title"));
  if (ogDescription) ogDescription.setAttribute("content", t("meta.description"));

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-set-lang") === next;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  document.documentElement.setAttribute("data-i18n-ready", "true");
  window.dispatchEvent(new CustomEvent("grx:langchange", { detail: { lang: next } }));
}

function syncUrl(lang) {
  if (!window.history || !window.history.replaceState) return;
  try {
    const url = new URL(window.location.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url.toString());
  } catch (err) {
    // no pasa nada: el idioma ya se aplico igualmente
  }
}

function setLang(lang, persist) {
  const next = lang === "en" ? "en" : "es";
  if (persist) {
    try { localStorage.setItem(LANG_KEY, next); } catch (err) {}
  }
  applyLang(next);
  syncUrl(next);
}

try {
  applyLang(detectLang());
} catch (err) {
  // Pase lo que pase, la pagina tiene que verse (queda en el idioma del HTML).
  document.documentElement.setAttribute("data-i18n-ready", "true");
  console.error("i18n:", err);
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.getAttribute("data-set-lang"), true);
  });
});

window.GRX = { t, detectLang, setLang };
