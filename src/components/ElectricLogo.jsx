import React from "react";
export default function ElectricLogo({
  src = "/logo.png",
  color = "#0024ff",
  glowColor = "#000afb",
  scale = 0.4,
  interactive = true
}) {
  return (
    <div
      className={"electric-logo " + (interactive ? "interactive" : "")}
      style={{
        "--electric-color": color,
        "--electric-glow": glowColor,
        "--logo-scale": scale
      }}
    >
      <div className="electric-ring ring-one" />
      <div className="electric-ring ring-two" />
      <div className="electric-ring ring-three" />
      <div className="electric-arcs" />
      <img src={src} alt="OoT Hackroom" />
    </div>
  );
}