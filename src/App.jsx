import React from "react";
import { project } from "./projectData.js";
import ASCIIText from "./components/ASCIIText.jsx";
import ElectricLogo from "./components/ElectricLogo.jsx";
import LineWaves from "./components/LineWaves.jsx";

export default function App() {
  const progress = Math.max(0, Math.min(100, Number(project.progress) || 0));

  return (
   <div className="app">
  <div className="line-waves-background">
    <LineWaves
      speed={0.3}
      innerLineCount={32}
      outerLineCount={36}
      warpIntensity={0.9}
      rotation={-91}
      edgeFadeWidth={0}
      colorCycleSpeed={1}
      brightness={0.3}
      color1="#009aff"
      color2="#d60000"
      color3="#0800ff"
      enableMouseInteraction={true}
      mouseInfluence={2}
    />
  </div>

  <div className="scanlines" />
      

      <header className="hero">
        <div className="topbar">
          <span className="live-dot" />
          PRIVATE DEVELOPMENT BUILD
          <span className="topbar-right">OOT / HACKROOM</span>
        </div>

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

        <div className="subtitle">OCARINA OF TIME <b>//</b> HACKROOM</div>
      </header>

      <main className="content">
        <div className="tag">// PROJECT_STATUS</div>

        <section className="card progress-card">
          <div className="status-head">
            <div>
              <div className="label">CURRENT PHASE</div>
              <h1>{project.phase}</h1>
            </div>
            <div className="badge"><i /> {project.status}</div>
          </div>

          <div className="progress-info">
            <span>DEVELOPMENT PROGRESS</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="scale">
            <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
          </div>

          <div className="meta">
            <div><span>LAST UPDATE</span><b>{project.lastUpdate}</b></div>
            <div><span>PROJECT</span><b>Ocarina of Time Hackroom</b></div>
          </div>
        </section>

        <div className="columns">
          <section className="card panel">
            <div className="tag">// ABOUT</div>
            <h2>¿Qué es esta página?</h2>
            <p>{project.description}</p>
            <p>{project.phaseDescription}</p>
          </section>

          <section className="card panel">
            <div className="tag">// CURRENT_OBJECTIVES</div>
            <h2>Objetivos</h2>
            <ol>
              {project.objectives.map((item, i) => (
                <li key={item}><em>{String(i + 1).padStart(2, "0")}</em>{item}</li>
              ))}
            </ol>
          </section>
        </div>

        <section className="card panel log">
          <div className="tag">// DEVELOPMENT_LOG</div>
          <p><b>[SYSTEM]</b> Hackroom initialized.</p>
          <p><b>[STATUS]</b> {project.phase} — {progress}% complete.</p>
          <p><b>[ACCESS]</b> Private development build.</p>
        </section>

        <section className="credits">
          <div className="tag">// CREDITS</div>
          <div className="credit-grid">
            {project.credits.map(([name, role]) => (
              <div className="credit" key={name}>
                <b>{name}</b><span>{role}</span>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <span>OOT HACKROOM</span>
          <span>PRIVATE DEV PAGE</span>
          <span>© {new Date().getFullYear()} MICHIXDL</span>
        </footer>
      </main>
    </div>
  );
}