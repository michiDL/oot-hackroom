import React from "react";

import { project } from "./projectData.js";

import ASCIIText from "./components/ASCIIText.jsx";
import ElectricLogo from "./components/ElectricLogo.jsx";
import GlassSurface from "./components/GlassSurface.jsx";
import ShaderBackground from "./components/ShaderBackground.jsx";

export default function App() {
  const progress = Math.max(
    0,
    Math.min(
      100,
      Number(project.progress) || 0
    )
  );

  return (
    <div className="app">

      {/* ========================================
          SHADER BACKGROUND
      ======================================== */}

      <ShaderBackground
        image="/background.jpg"
        speed={0.35}
        frequency={8.0}
        waveAmplitude={0.025}
      />

      <div className="background-vignette" />

      <div className="scanlines" />

      {/* ========================================
          CONTENT
      ======================================== */}

      <main className="content">

        {/* ======================================
            HERO
        ====================================== */}

        <section className="hero">

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
              text="oot hackroom"
              enableWaves={true}
              asciiFontSize={5}
            />

          </div>

          <div className="hero-subtitle">

            <span>
              OCARINA OF TIME
            </span>

            <b>
              //
            </b>

            <span>
              HACKROOM
            </span>

          </div>

          <p className="hero-description">
            PRIVATE DEVELOPMENT PROJECT
          </p>

        </section>

        {/* ======================================
            STATUS
        ====================================== */}

        <section className="status-section">

          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={28}
            borderWidth={0.08}
            brightness={50}
            opacity={0.75}
            blur={8}
            displace={0}
            backgroundOpacity={0.01}
            saturation={1.15}
            distortionScale={-200}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="status-card"
          >

            <div className="status-card-inner">

              <div className="section-heading">

                <div>

                  <span className="eyebrow">
                    PROJECT STATUS
                  </span>

                  <h1>
                    {project.phase}
                  </h1>

                </div>

                <div className="status-pill">

                  <span />

                  {project.status}

                </div>

              </div>

              <div className="progress-header">

                <span>
                  DEVELOPMENT PROGRESS
                </span>

                <strong>
                  {progress}%
                </strong>

              </div>

              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{
                    width:
                      `${progress}%`,
                  }}
                />

              </div>

              <div className="progress-scale">

                <span>
                  0%
                </span>

                <span>
                  25%
                </span>

                <span>
                  50%
                </span>

                <span>
                  75%
                </span>

                <span>
                  100%
                </span>

              </div>

              <div className="status-meta">

                <div>

                  <span>
                    LAST UPDATE
                  </span>

                  <strong>
                    {project.lastUpdate}
                  </strong>

                </div>

                <div>

                  <span>
                    PROJECT
                  </span>

                  <strong>
                    Ocarina of Time Hackroom
                  </strong>

                </div>

              </div>

            </div>

          </GlassSurface>

        </section>

        {/* ======================================
            ABOUT / OBJECTIVES
        ====================================== */}

        <section className="glass-grid">

          {/* ABOUT */}

          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={26}
            borderWidth={0.08}
            brightness={50}
            opacity={0.75}
            blur={8}
            displace={0}
            backgroundOpacity={0.01}
            saturation={1.15}
            distortionScale={-200}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="glass-panel"
          >

            <div className="panel-inner">

              <span className="eyebrow">
                // ABOUT
              </span>

              <h2>
                ¿Qué es esta página?
              </h2>

              <p>
                {project.description}
              </p>

              <div className="phase-note">

                <span>
                  PHASE NOTE
                </span>

                <strong>
                  {project.phaseDescription}
                </strong>

              </div>

            </div>

          </GlassSurface>

          {/* OBJECTIVES */}

          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={26}
            borderWidth={0.08}
            brightness={50}
            opacity={0.75}
            blur={8}
            displace={0}
            backgroundOpacity={0.01}
            saturation={1.15}
            distortionScale={-200}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="glass-panel"
          >

            <div className="panel-inner">

              <span className="eyebrow">
                // CURRENT OBJECTIVES
              </span>

              <h2>
                Objetivos
              </h2>

              <div className="objectives-list">

                {project.objectives.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      className="objective"
                      key={item}
                    >

                      <div className="objective-number">

                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}

                      </div>

                      <span>
                        {item}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </GlassSurface>

        </section>

        {/* ======================================
            DEVELOPMENT LOG
        ====================================== */}

        <section className="development-section">

          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={26}
            borderWidth={0.08}
            brightness={50}
            opacity={0.72}
            blur={8}
            displace={0}
            backgroundOpacity={0.01}
            saturation={1.15}
            distortionScale={-190}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="log-card"
          >

            <div className="log-inner">

              <span className="eyebrow">
                // DEVELOPMENT LOG
              </span>

              <p>
                <b>
                  [SYSTEM]
                </b>{" "}
                Hackroom initialized.
              </p>

              <p>
                <b>
                  [STATUS]
                </b>{" "}
                {project.phase} —{" "}
                {progress}% complete.
              </p>

              <p>
                <b>
                  [ACCESS]
                </b>{" "}
                Private development build.
              </p>

            </div>

          </GlassSurface>

        </section>

        {/* ======================================
            CREDITS
        ====================================== */}

        <section className="credits-section">

          <span className="eyebrow">
            // CREDITS
          </span>

          <div className="credit-grid">

            {project.credits.map(
              (
                [name, role],
                index
              ) => (

                <GlassSurface
                  key={name}

                  width="100%"
                  height="100%"

                  borderRadius={22}

                  borderWidth={0.08}

                  brightness={50}

                  opacity={0.72}

                  blur={8}

                  displace={0}

                  backgroundOpacity={0.01}

                  saturation={1.15}

                  distortionScale={-180}

                  redOffset={0}

                  greenOffset={10}

                  blueOffset={20}

                  className="credit-card"
                >

                  <div className="credit-inner">

                    <span className="credit-index">

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>

                    <div className="credit-info">

                      <strong>
                        {name}
                      </strong>

                      <small>
                        {role}
                      </small>

                    </div>

                  </div>

                </GlassSurface>

              )
            )}

          </div>

        </section>

        {/* ======================================
            FOOTER
        ====================================== */}

        <footer className="site-footer">

          <span>
            OOT HACKROOM
          </span>

          <span>
            PRIVATE DEV PAGE
          </span>

          <span>
            ©{" "}
            {new Date().getFullYear()}{" "}
            MICHIXDL
          </span>

        </footer>

      </main>

    </div>
  );
}