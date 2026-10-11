"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type Language = "en" | "es";

type IconProps = { size?: number; className?: string };

function ArrowIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRight({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M7 6h11v11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 3.5C10 3.5 4 7.1 4 14.1c0 3.5 2.5 6 5.8 6 7.1 0 10.7-6.5 10.7-16.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 20c3.1-6.7 6.9-9.2 12-12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PauseIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 6v12M16 6v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const projects = [
  {
    slug: "the-wild-leads",
    number: "01",
    image: "/images/project-wild.webp",
    year: "2026",
    tag: "Digital experience",
    tagEs: "Experiencia digital",
    title: "Let the wild lead.",
    titleEs: "Que guíe lo salvaje.",
    description: "An exploration of organic forms, quiet motion and immersive storytelling.",
    descriptionEs: "Una exploración de formas orgánicas, movimiento sutil y narrativa inmersiva.",
  },
  {
    slug: "after-the-rain",
    number: "02",
    image: "/images/project-rain.webp",
    year: "2026",
    tag: "Art direction",
    tagEs: "Dirección de arte",
    title: "After the Rain",
    titleEs: "Después de la lluvia",
    description: "A visual study of light, mist and the shapes that emerge after rainfall.",
    descriptionEs: "Un estudio visual de la luz, la niebla y las formas que emergen tras la lluvia.",
  },
  {
    slug: "rooted-in-motion",
    number: "03",
    image: "/images/project-roots.webp",
    year: "2026",
    tag: "Motion concept",
    tagEs: "Concepto de movimiento",
    title: "Rooted in Motion",
    titleEs: "Raíces en movimiento",
    description: "A small study in perspective, scroll-driven transitions and natural textures.",
    descriptionEs: "Un estudio de perspectiva, transiciones con scroll y texturas naturales.",
  },
] as const;

const dictionary = {
  en: {
    navHome: "Home",
    navWork: "Projects",
    navAbout: "Studio",
    navContact: "Contact",
    heroLine1: "Step into",
    heroLine2: "the living world",
    heroIntro: "We explore wild places through design, motion and imagination. A new perspective on the natural world.",
    explore: "Explore the work",
    scroll: "Scroll to explore",
    heroEyebrow: "Independent digital experiments",
    living: "Our ethos",
    heroCard1: "Let the wild lead.",
    heroCard2: "After the Rain",
    heroArt: "Art direction",
    heroInteraction: "Interactive world",
    chapter: "Chapter 01 / 03",
    watch: "Enter the experience",
    introKicker: "Our perspective",
    introHeading1: "Nature isn't still.",
    introHeading2: "Neither are we.",
    introText: "We build expressive interfaces that feel alive. Inspired by the quiet intelligence of the natural world, every detail invites a little curiosity.",
    workKicker: "Selected explorations / 2026",
    workTitle: "A few worlds",
    workTitle2: "worth discovering.",
    workInfo: "Three original visual concepts created to explore the boundaries between digital design and nature.",
    viewProject: "View concept",
    aboutKicker: "The way we see it",
    aboutHeading: "Made with curiosity.\nDesigned to feel alive.",
    aboutText: "WILDROOT is a fictional experimental studio — a frontend portfolio concept celebrating typography, immersive visuals, subtle motion and the unexpected beauty of organic forms.",
    principles: ["Thoughtful interaction", "Organic visual language", "Craft in every detail"],
    contactKicker: "An invitation",
    contactHeading: "Let something\ngood grow.",
    contactText: "Have a creative idea in mind? Make this concept your own by replacing the placeholder contact address.",
    contactButton: "Start a conversation",
    footer: "A frontend portfolio concept. No real client work is represented.",
    close: "Close",
    experienceKicker: "An immersive interlude",
    experienceTitle: "Look a little closer.",
    experienceText: "Sometimes the most interesting things happen when we slow down and pay attention.",
    back: "Back to the world",
    projectNote: "Original concept study · Not commissioned client work",
    details: "About the concept",
    discipline: "Discipline",
    year: "Year",
    goBack: "Back to projects",
    menu: "Open menu",
    switchLang: "Cambiar a español",
  },
  es: {
    navHome: "Inicio",
    navWork: "Proyectos",
    navAbout: "Estudio",
    navContact: "Contacto",
    heroLine1: "Entra en",
    heroLine2: "un mundo vivo",
    heroIntro: "Exploramos lugares salvajes a través del diseño, el movimiento y la imaginación. Otra perspectiva del mundo natural.",
    explore: "Explorar proyectos",
    scroll: "Desliza para explorar",
    heroEyebrow: "Experimentos digitales independientes",
    living: "Nuestra esencia",
    heroCard1: "Que guíe lo salvaje.",
    heroCard2: "Después de la lluvia",
    heroArt: "Dirección de arte",
    heroInteraction: "Mundo interactivo",
    chapter: "Capítulo 01 / 03",
    watch: "Entrar en la experiencia",
    introKicker: "Nuestra perspectiva",
    introHeading1: "La naturaleza se mueve.",
    introHeading2: "Nosotros también.",
    introText: "Creamos interfaces expresivas que parecen tener vida. Inspirados en la inteligencia del mundo natural, cada detalle invita a descubrir algo más.",
    workKicker: "Exploraciones seleccionadas / 2026",
    workTitle: "Pequeños mundos",
    workTitle2: "por descubrir.",
    workInfo: "Tres conceptos visuales originales para explorar la conexión entre el diseño digital y la naturaleza.",
    viewProject: "Ver concepto",
    aboutKicker: "Nuestra visión",
    aboutHeading: "Hecho con curiosidad.\nDiseñado para sentir.",
    aboutText: "WILDROOT es un estudio experimental ficticio: un concepto de portafolio frontend que celebra la tipografía, los visuales inmersivos, el movimiento sutil y la belleza de las formas orgánicas.",
    principles: ["Interacción consciente", "Lenguaje visual orgánico", "Atención a cada detalle"],
    contactKicker: "Una invitación",
    contactHeading: "Hagamos crecer\nalgo especial.",
    contactText: "¿Tienes una idea creativa? Personaliza este concepto reemplazando la dirección de contacto de ejemplo.",
    contactButton: "Iniciar conversación",
    footer: "Concepto de portafolio frontend. No representa trabajo real de clientes.",
    close: "Cerrar",
    experienceKicker: "Un momento de inmersión",
    experienceTitle: "Mira un poco más cerca.",
    experienceText: "A veces lo más interesante sucede cuando reducimos la velocidad y prestamos atención.",
    back: "Volver al mundo",
    projectNote: "Estudio conceptual original · No es trabajo por encargo",
    details: "Sobre el concepto",
    discipline: "Disciplina",
    year: "Año",
    goBack: "Volver a proyectos",
    menu: "Abrir menú",
    switchLang: "Switch to English",
  },
};

function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const t = dictionary[language];
  const modalOpen = selectedProject !== null || experienceOpen;

  useRevealOnScroll();

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 70);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const onScroll = () => {
      const remaining = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(remaining > 0 ? (window.scrollY / remaining) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setExperienceOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = priorOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen]);

  const goTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch" || !heroRef.current) return;
    const box = heroRef.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    heroRef.current.style.setProperty("--pointer-x", `${x * -11}px`);
    heroRef.current.style.setProperty("--pointer-y", `${y * -7}px`);
  };

  const onLeave = () => {
    heroRef.current?.style.setProperty("--pointer-x", "0px");
    heroRef.current?.style.setProperty("--pointer-y", "0px");
  };

  const currentProject = selectedProject === null ? null : projects[selectedProject];

  return (
    <main className={`site-shell ${ready ? "is-loaded" : ""}`}>
      <div className="scroll-progress" style={{ width: `${scrollPercent}%` }} aria-hidden="true" />

      <section className="hero" id="home" ref={heroRef} onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-fog" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-fireflies" aria-hidden="true">
          {Array.from({ length: 13 }, (_, i) => <i key={i} className={`firefly firefly-${i + 1}`} />)}
        </div>

        <header className="site-header">
          <a className="brand-wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label="WILDROOT — Home">
            W<span className="brand-leaf"><LeafIcon size={14} /></span>
          </a>
          <nav className={`nav-pill ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            <button className="nav-logo" type="button" onClick={() => goTo("home")} aria-label="Home">
              <LeafIcon size={14} />
              <span>WILDROOT</span>
            </button>
            <span className="nav-divider" aria-hidden="true" />
            <a href="#work" onClick={() => setMenuOpen(false)}>{t.navWork}</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>{t.navAbout}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.navContact}</a>
            <span className="nav-divider" aria-hidden="true" />
            <button className="language-toggle" type="button" onClick={() => setLanguage((v) => v === "en" ? "es" : "en")} aria-label={t.switchLang}>
              {language === "en" ? "ES" : "EN"}
            </button>
          </nav>
          <button className="mobile-nav-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={t.menu} aria-expanded={menuOpen}>
            <span /><span />
          </button>
          <span className="header-right">01 — 03 <span className="header-star">✳</span></span>
        </header>

        <div className="hero-content">
          <div className="hero-heading-wrap">
            <p className="hero-kicker hero-item">WILDROOT <span className="kicker-dot" /> {t.heroEyebrow}</p>
            <h1 className="hero-title hero-item"><span>{t.heroLine1}</span><br /><span>{t.heroLine2}</span></h1>
          </div>
          <div className="hero-description hero-item">
            <p>{t.heroIntro}</p>
            <button type="button" className="dark-button" onClick={() => goTo("work")}>
              <span className="button-icon"><ArrowUpRight size={13} /></span>
              {t.explore}
              <ArrowIcon size={14} className="button-tail" />
            </button>
          </div>
          <aside className="hero-side-details hero-item" aria-label="Experience details">
            <span>{t.heroArt}</span><strong>2026 / W</strong>
            <span>{t.heroInteraction}</span><strong>03 concepts</strong>
          </aside>
        </div>

        <div className="card-float card-float-one">
          <button className="hero-project-card" type="button" onClick={() => setSelectedProject(0)} aria-label={`${t.viewProject}: ${t.heroCard1}`}>
            <span className="card-cover"><img src="/images/project-wild.webp" alt="Moss-covered valley and giant natural arches" /></span>
            <span className="card-content"><span className="card-caption">01 / {t.living}</span><strong>{t.heroCard1}</strong></span>
            <span className="card-round-arrow"><ArrowUpRight size={16} /></span>
          </button>
        </div>
        <div className="card-float card-float-two">
          <button className="hero-project-card" type="button" onClick={() => setSelectedProject(1)} aria-label={`${t.viewProject}: ${t.heroCard2}`}>
            <span className="card-content card-content-spaced"><span className="card-caption">02 / ART STUDY</span><strong>{t.heroCard2}</strong></span>
            <span className="card-cover"><img src="/images/project-rain.webp" alt="Lush green arches emerging from morning mist" /></span>
            <span className="card-round-arrow"><ArrowUpRight size={16} /></span>
          </button>
        </div>

        <button type="button" className="play-experience hero-item" onClick={() => setExperienceOpen(true)} aria-label={t.watch}>
          <span className="play-ring"><span className="play-triangle" /></span>
          <span className="play-tooltip">{t.watch}</span>
        </button>

        <div className="hero-bottom hero-item">
          <span className="scroll-indicator"><span className="scroll-line" /> {t.scroll}</span>
          <span className="hero-chapter">{t.chapter}</span>
          <button className="hero-bottom-arrow" type="button" onClick={() => goTo("intro")} aria-label={t.scroll}>
            <span>↓</span>
          </button>
        </div>
        <div className="hero-preload-curtain" aria-hidden="true" />
      </section>

      <section className="intro-section section-pad" id="intro">
        <div className="section-eyebrow" data-reveal><span className="little-circle" /> {t.introKicker} <span className="eyebrow-count">(01)</span></div>
        <div className="intro-grid">
          <h2 data-reveal>{t.introHeading1}<br /><em>{t.introHeading2}</em></h2>
          <div className="intro-copy" data-reveal><span className="asterisk">✳</span><p>{t.introText}</p><span className="thin-rule" /></div>
        </div>
        <div className="intro-image" data-reveal role="img" aria-label="Misty landscape of moss-covered natural arches">
          <div className="intro-image-label"><LeafIcon size={16} /><span>WILDROOT / FIELD NOTES</span><span>001 — 026</span></div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-eyebrow" data-reveal><span className="little-circle" /> {t.workKicker} <span className="eyebrow-count">(02)</span></div>
        <div className="work-header" data-reveal>
          <h2>{t.workTitle}<br /><em>{t.workTitle2}</em></h2>
          <p>{t.workInfo}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <button key={project.slug} type="button" className={`project-tile project-tile-${index + 1}`} onClick={() => setSelectedProject(index)} data-reveal aria-label={`${t.viewProject}: ${language === "en" ? project.title : project.titleEs}`}>
              <span className="tile-image"><img src={project.image} alt="Fantastical green landscape in fog" loading="lazy" /><span className="tile-overlay-number">/{project.number}</span><span className="tile-cta"><ArrowUpRight size={19} /></span></span>
              <span className="tile-meta"><span>{language === "en" ? project.tag : project.tagEs}</span><span>{project.year}</span></span>
              <span className="tile-title">{language === "en" ? project.title : project.titleEs}<ArrowUpRight size={20} /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-ornament" aria-hidden="true"><span className="ornament-ring ornament-ring-one" /><span className="ornament-ring ornament-ring-two" /><LeafIcon size={110} /></div>
        <div className="section-eyebrow" data-reveal><span className="little-circle" /> {t.aboutKicker} <span className="eyebrow-count">(03)</span></div>
        <div className="about-main">
          <div data-reveal><h2>{t.aboutHeading.split("\n").map((s, i) => <span key={s}>{s}{i === 0 && <br />}</span>)}</h2></div>
          <div className="about-copy" data-reveal><p>{t.aboutText}</p><ul>{t.principles.map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}<ArrowUpRight size={16} /></li>)}</ul></div>
        </div>
      </section>

      <footer className="contact-section section-pad" id="contact">
        <div className="contact-top"><div className="section-eyebrow" data-reveal><span className="little-circle" /> {t.contactKicker}</div><span className="footer-leaf"><LeafIcon size={32} /></span></div>
        <h2 data-reveal>{t.contactHeading.split("\n").map((s, i) => <span key={s}>{s}{i === 0 && <br />}</span>)}</h2>
        <div className="contact-bottom" data-reveal><p>{t.contactText}</p><a className="contact-link" href="mailto:hello@wildroot.example?subject=Wildroot%20project">{t.contactButton} <ArrowUpRight size={19} /></a></div>
        <div className="footer-divider" />
        <div className="footer-meta"><span>© 2026 WILDROOT®</span><span>{t.footer}</span><a href="#home" onClick={() => setMenuOpen(false)}>BACK TO TOP ↑</a></div>
      </footer>

      {experienceOpen && (
        <div className="experience-modal" role="dialog" aria-modal="true" aria-label={t.experienceKicker}>
          <div className="experience-background" aria-hidden="true" />
          <div className="experience-shade" aria-hidden="true" />
          <button className="modal-close" onClick={() => setExperienceOpen(false)} type="button" aria-label={t.close}><span>×</span> {t.close}</button>
          <div className="experience-copy"><span className="modal-eyebrow"><LeafIcon size={18} /> {t.experienceKicker}</span><h2>{t.experienceTitle}</h2><p>{t.experienceText}</p><button className="outline-light-button" type="button" onClick={() => setExperienceOpen(false)}><PauseIcon /> {t.back}</button></div>
          <span className="experience-bottom-mark">WILDROOT / AN EXPERIMENT IN ATTENTION</span>
        </div>
      )}

      {currentProject && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button className="modal-close project-modal-close" onClick={() => setSelectedProject(null)} type="button" aria-label={t.close}><span>×</span> {t.close}</button>
            <div className="project-modal-image"><img src={currentProject.image} alt="Natural moss and monumental green arches" /></div>
            <div className="project-modal-body"><p className="modal-eyebrow">WILDROOT / PROJECT {currentProject.number}</p><h2 id="project-modal-title">{language === "en" ? currentProject.title : currentProject.titleEs}</h2><div className="project-modal-cols"><div><span className="modal-label">{t.discipline}</span><strong>{language === "en" ? currentProject.tag : currentProject.tagEs}</strong></div><div><span className="modal-label">{t.year}</span><strong>{currentProject.year}</strong></div></div><span className="modal-label">{t.details}</span><p className="project-modal-description">{language === "en" ? currentProject.description : currentProject.descriptionEs}</p><p className="project-disclaimer">{t.projectNote}</p><button className="back-project-button" onClick={() => setSelectedProject(null)} type="button">← {t.goBack}</button></div>
          </div>
        </div>
      )}
    </main>
  );
}
