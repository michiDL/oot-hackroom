import React from "react";
import { project } from "./projectData.js";
import ASCIIText from "./components/ASCIIText.jsx";
import ElectricLogo from "./components/ElectricLogo.jsx";
import LineWaves from "./components/LineWaves.jsx";

export default function App() {
  const progress = Math.max(0, Math.min(100, Number(project.progress) || 0));

   return (
    <div className="app">

      {/* Nuevo contenedor para el diseño de líneas en la parte superior */}
      <div className="background-design-top">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={0.5}  // Ajuste de intensidad
          rotation={0}        // Rotación horizontal
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.3}
          color1="#6e14ef"    // Púrpura
          color2="#14efec"    // Cian/azul claro
          color3="#0800ff"    // Azul oscuro (opcional, para profundidad)
          enableMouseInteraction={true}
          mouseInfluence={2}
        />
      </div>

      <div className="scanlines" />

      {/* Contenedor principal para el contenido real */}
      <div className="main-container">
        <header className="hero">
          {/* Barra superior con alineación corregida */}
          <div className="topbar">
            <span className="live-dot" />
            PRIVATE DEVELOPMENT BUILD
            <span className="topbar-right">OOT / HACKROOM</span>
          </div>

          {/* Logo y texto central simulados para recrear el halo */}
          <div className="logo-container">
            <ElectricLogo
              src="/ocarina_model.png" // Usa una recreación de la Ocarina pixelada
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
              flicker={1.5}     // Aumento de parpadeo para el halo
              fill={1}
              cursorIntensity={0.55}
              cursorRadius={155}
            />
          </div>

          {/* Texto central integrado en el halo con estilo pixelado */}
          <div className="ascii-container">
            <ASCIIText
              text="ott hackroom"
              enableWaves={true}
              asciiFontSize={5} // Ajuste de tamaño
            />
          </div>

          <div className="subtitle">
            OCARINA OF TIME <b>//</b> HACKROOM
          </div>
        </header>

        {/* ... Resto del contenido del main ... */}
        <main className="content">
          {/* ... Tarjetas de progreso, objetivos, etc. ... */}
        </main>

        <footer>
          <span>OOT HACKROOM</span>
          <span>PRIVATE DEV PAGE</span>
          <span>© {new Date().getFullYear()} MICHIXDL</span>
        </footer>
      </div>
    </div>
  );
}