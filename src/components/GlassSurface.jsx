import React from "react";

export default function GlassSurface({
  children,
  borderRadius = 26,
  blur = 8,
  saturation = 1.15,
  opacity = 0.75,
  className = "",
}) {
  return (
    <div
      className={`glass-surface ${className}`}
      style={{
        "--glass-opacity": opacity,
        "--glass-blur": `${blur}px`,
        "--glass-radius": `${borderRadius}px`,
        "--glass-saturation": saturation,
      }}
    >
      <div className="glass-surface-content">
        {children}
      </div>
    </div>
  );
}