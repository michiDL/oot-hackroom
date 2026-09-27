import React from "react";
/*
  Component ported and enhanced from
  https://codepen.io/JuanFuentes/pen/eYEeoyE
*/

export default function ASCIIText({
  text = "ott hackrom",
  enableWaves = true,
  asciiFontSize = 9
}) {
  const chars = "@#*+=-:.";
  const amount = Math.max(20, Math.floor(72 / Math.max(asciiFontSize, 1)));

  return (
    <div className={"ascii-text " + (enableWaves ? "waves" : "")}>
      <div className="ascii-background">
        {Array.from({ length: amount }, (_, row) => (
          <div className="ascii-row" key={row}>
            {Array.from({ length: amount * 2 }, (_, col) => (
              <span key={col}>{chars[(row + col) % chars.length]}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="ascii-title">{text}</div>
    </div>
  );
}