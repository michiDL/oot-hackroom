import React, { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Texture,
} from "ogl";

export default function ShaderBackground({
  image = "/background.jpg",
  speed = 0.35,
  frequency = 8.0,
  waveAmplitude = 0.025,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(
        window.devicePixelRatio || 1,
        2
      ),
    });

    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 1);

    container.appendChild(gl.canvas);

    const resize = () => {
      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    };

    resize();

    // ==========================================
    // IMAGEN
    // ==========================================

    const texture = new Texture(gl);

    const img = new Image();

    img.onload = () => {
      texture.image = img;
    };

    img.onerror = () => {
      console.error(
        "No se pudo cargar:",
        image
      );
    };

    img.src = image;

    // ==========================================
    // VERTEX SHADER
    // ==========================================

    const vertex = `
      attribute vec2 position;
      attribute vec2 uv;

      varying vec2 vUv;

      void main() {
        vUv = uv;

        gl_Position = vec4(
          position,
          0.0,
          1.0
        );
      }
    `;

    // ==========================================
    // FRAGMENT SHADER
    // ==========================================

    const fragment = `
      precision highp float;

      uniform sampler2D tMap;

      uniform float uTime;
      uniform float uSpeed;
      uniform float uFrequency;
      uniform float uWaveAmplitude;

      varying vec2 vUv;

      // ========================================
      // WAVE
      // ========================================

      vec2 sineWave(vec2 pt)
      {
        float x = 0.0;
        float y = 0.0;

        float safeX =
          max(pt.x, 0.001);

        float safeY =
          max(pt.y, 0.001);

        float offsetX =
          sin(
            pt.y * uFrequency +
            uTime * uSpeed
          ) *
          (
            uWaveAmplitude /
            safeX *
            pt.y
          );

        float offsetY =
          sin(
            pt.x * uFrequency -
            uTime * uSpeed
          ) *
          (
            uWaveAmplitude /
            safeY *
            pt.x
          );

        pt.x += offsetX;
        pt.y += offsetY;

        return vec2(
          pt.x + x,
          pt.y + y
        );
      }

      // ========================================
      // MAIN
      // ========================================

      void main()
      {
        vec2 uv =
          sineWave(vUv);

        vec4 color =
          texture2D(
            tMap,
            uv
          );

        gl_FragColor =
          color;
      }
    `;

    // ==========================================
    // GEOMETRY
    // ==========================================

    const geometry =
      new Triangle(gl);

    // ==========================================
    // PROGRAM
    // ==========================================

    const program =
      new Program(gl, {
        vertex,
        fragment,

        uniforms: {
          tMap: {
            value: texture,
          },

          uTime: {
            value: 0,
          },

          uSpeed: {
            value: speed,
          },

          uFrequency: {
            value: frequency,
          },

          uWaveAmplitude: {
            value: waveAmplitude,
          },
        },
      });

    // ==========================================
    // MESH
    // ==========================================

    const mesh =
      new Mesh(gl, {
        geometry,
        program,
      });

    // ==========================================
    // ANIMATION
    // ==========================================

    let animationFrame;

    const animate = (time) => {
      program.uniforms.uTime.value =
        time * 0.001;

      renderer.render({
        scene: mesh,
      });

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    // ==========================================
    // RESIZE
    // ==========================================

    window.addEventListener(
      "resize",
      resize
    );

    // ==========================================
    // CLEANUP
    // ==========================================

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      if (
        gl.canvas.parentNode ===
        container
      ) {
        container.removeChild(
          gl.canvas
        );
      }

      gl.getExtension(
        "WEBGL_lose_context"
      )?.loseContext();
    };
  }, [
    image,
    speed,
    frequency,
    waveAmplitude,
  ]);

  return (
    <div
      ref={containerRef}
      className="shader-background"
    />
  );
}