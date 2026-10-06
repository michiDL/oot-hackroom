import React from "react";
import { project } from "./projectData.js";
import ASCIIText from "./components/ASCIIText.jsx";
import ElectricLogo from "./components/ElectricLogo.jsx";
import LineWaves from "./components/LineWaves.jsx";
import GlassSurface from "./components/GlassSurface.jsx";

function Icon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "github") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.03c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .3.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (type === "sky") {
    return (
      <svg {...common}>
        <path d="M5.5 7.5h13a2 2 0 0 1 0 4h-13a2 2 0 1 1 0-4Z" />
        <path d="M5.5 12.5h10a2 2 0 0 1 0 4h-10a2 2 0 1 1 0-4Z" />
        <path d="M8 7.5c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" />
      </svg>
    );
  }

  if (type === "texture") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-4.5-4.5L7 20" />
        <path d="m13 14 2-2 6 6" />
      </svg>
    );
  }

  if (type === "model") {
    return (
      <svg {...common}>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

function ObjectiveIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M7 7 4 18h6L7 7Z" />
      <path d="M17 7l-3 11h6L17 7Z" />
    </svg>
  );
}

export default function App() {
  const progress = Math.max(
    0,
    Math.min(100, Number(project.progress) || 0)
  );

  return (
    <div className="app">
      {/* BACKGROUND */}
      <div className="line-waves-background">
        <LineWaves
          speed={0.16}
          innerLineCount={24}
          outerLineCount={30}
          warpIntensity={0.65}
          rotation={-91}
          edgeFadeWidth={0}
          colorCycleSpeed={0.55}
          brightness={0.18}
          color1="#009aff"
          color2="#1800ff"
          color3="#0055ff"
          enableMouseInteraction={true}
          mouseInfluence={1.25}
        />
      </div>

      <div className="background-vignette" />
      <div className="scanlines" />

      {/* TOP BAR */}
      <header className="site-header">
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={22}
          backgroundOpacity={0.08}
          saturation={1.25}
          distortionScale={-120}
          redOffset={0}
          greenOffset={6}
          blueOffset={12}
          className="topbar-glass"
        >
          <div className="topbar">
            <div className="topbar-status">
              <span className="live-dot" />
              <span>PRIVATE DEVELOPMENT BUILD</span>
            </div>

            <div className="topbar-right">
              <span>OOT</span>
              <i />
              <span>HACKROOM</span>
            </div>
          </div>
        </GlassSurface>
      </header>

      {/* HERO */}
      <main className="content">
        <section className="hero">
          <div className="hero-glow" />

          <div className="logo-container">
            <ElectricLogo
              src="/logo.png"
              color="#0024ff"
              glowColor="#000afb"
              scale={0.6}
              strands={1}
              bend={0.4}
              crackle={1.5}
              arcs={1.8}
              speed={2.5}
              interactive
              glow={0.35}
              flicker={1}
              fill={1}
              cursorIntensity={0.55}
              cursorRadius={155}
            />
          </div>

          <div className="ascii-container">
            <ASCIIText
              text="ott hackroom"
              enableWaves={true}
              asciiFontSize={5}
            />
          </div>

          <div className="hero-subtitle">
            <span>OCARINA OF TIME</span>
            <b>//</b>
            <span>HACKROOM</span>
          </div>

          <p className="hero-description">
            PRIVATE DEVELOPMENT PROJECT
          </p>
        </section>

        {/* STATUS */}
        <section className="status-section">
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={28}
            backgroundOpacity={0.075}
            saturation={1.3}
            distortionScale={-150}
            redOffset={0}
            greenOffset={8}
            blueOffset={16}
            className="status-card"
          >
            <div className="status-card-inner">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">PROJECT STATUS</span>
                  <h1>{project.phase}</h1>
                </div>

                <div className="status-pill">
                  <span />
                  {project.status}
                </div>
              </div>

              <div className="progress-header">
                <span>DEVELOPMENT PROGRESS</span>
                <strong>{progress}%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                >
                  <span className="progress-shine" />
                </div>
              </div>

              <div className="progress-scale">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>

              <div className="status-meta">
                <div>
                  <span>LAST UPDATE</span>
                  <strong>{project.lastUpdate}</strong>
                </div>

                <div>
                  <span>PROJECT</span>
                  <strong>Ocarina of Time Hackroom</strong>
                </div>
              </div>
            </div>
          </GlassSurface>
        </section>

        {/* ABOUT + OBJECTIVES */}
        <section className="glass-grid">
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={26}
            backgroundOpacity={0.065}
            saturation={1.25}
            distortionScale={-130}
            className="glass-panel"
          >
            <div className="panel-inner">
              <span className="eyebrow">// ABOUT</span>

              <div className="panel-icon">
                <span>✦</span>
              </div>

              <h2>¿Qué es esta página?</h2>

              <p>{project.description}</p>

              <div className="phase-note">
                <span>PHASE NOTE</span>
                <strong>{project.phaseDescription}</strong>
              </div>
            </div>
          </GlassSurface>

          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={26}
            backgroundOpacity={0.065}
            saturation={1.25}
            distortionScale={-130}
            className="glass-panel"
          >
            <div className="panel-inner objectives-panel">
              <span className="eyebrow">// CURRENT OBJECTIVES</span>

              <h2>Objetivos</h2>

              <div className="objectives-list">
                {project.objectives.map((item, i) => (
                  <div className="objective" key={item}>
                    <div className="objective-number">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="objective-icon">
                      <ObjectiveIcon />
                    </div>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassSurface>
        </section>

        {/* DEVELOPMENT LOG */}
        <section className="development-section">
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={26}
            backgroundOpacity={0.06}
            saturation={1.25}
            distortionScale={-110}
            className="log-card"
          >
            <div className="log-inner">
              <div className="log-heading">
                <span className="eyebrow">// DEVELOPMENT LOG</span>
                <span className="log-indicator">LIVE</span>
              </div>

              <div className="log-lines">
                <p>
                  <b>[SYSTEM]</b>
                  <span>Hackroom initialized.</span>
                </p>

                <p>
                  <b>[STATUS]</b>
                  <span>
                    {project.phase} — {progress}% complete.
                  </span>
                </p>

                <p>
                  <b>[ACCESS]</b>
                  <span>Private development build.</span>
                </p>
              </div>
            </div>
          </GlassSurface>
        </section>

        {/* CREDITS */}
        <section className="credits-section">
          <div className="credits-heading">
            <span className="eyebrow">// CREDITS</span>
            <p>PEOPLE WHO HELP MAKE THIS PROJECT POSSIBLE</p>
          </div>

          <div className="credit-grid">
            {project.credits.map(([name, role], index) => {
              let icon = "person";

              if (name.toLowerCase() === "michixdl") {
                icon = "github";
              } else if (name.toLowerCase() === "bluesky") {
                icon = "model";
              } else if (name.toLowerCase() === "goonerbro") {
                icon = "texture";
              }

              return (
                <GlassSurface
                  key={name}
                  width="100%"
                  height="100%"
                  borderRadius={22}
                  backgroundOpacity={0.055}
                  saturation={1.2}
                  distortionScale={-100}
                  className="credit-card"
                >
                  <div className="credit-inner">
                    <div className="credit-icon">
                      <Icon type={icon} />
                    </div>

                    <div className="credit-info">
                      <span className="credit-index">
                        0{index + 1}
                      </span>

                      <strong>{name}</strong>
                      <small>{role}</small>
                    </div>

                    <span className="credit-arrow">↗</span>
                  </div>
                </GlassSurface>
              );
            })}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-line" />

          <div className="footer-content">
            <span>OOT HACKROOM</span>
            <span>PRIVATE DEV PAGE</span>
            <span>© {new Date().getFullYear()} MICHIXDL</span>
          </div>
        </footer>
      </main>
    </div>
  );
}