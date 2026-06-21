"use client";

import React from 'react';

const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "Java", icon: "☕", color: "#ED8B00" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Django", icon: "🎯", color: "#092E20" },
  { name: "Spring", icon: "🌱", color: "#6DB33F" },
  { name: "HTML5", icon: "◇", color: "#E34F26" },
  { name: "CSS3", icon: "◆", color: "#1572B6" },
  { name: "Node.js", icon: "⬡", color: "#339933" },
  { name: "Git", icon: "⑂", color: "#F05032" },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      {/* Foto / Avatar placeholder */}
      <div className="hero-photo">
        <div className="photo-frame">
          <div className="photo-placeholder">
            <span className="photo-initials">TJ</span>
            <span className="photo-label">Sua foto aqui</span>
          </div>
        </div>
        <div className="photo-glow" />
      </div>

      {/* Terminal animado */}
      <div className="hero-terminal">
        <div className="terminal-header">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span className="terminal-title">terminal</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">whoami</span>
          </div>
          <div className="terminal-line output">
            <span>Thyago José — Full Stack Developer</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command typing">stack --list</span>
          </div>
          <div className="terminal-line output">
            <span>React, Next.js, Spring Boot, Django...</span>
          </div>
        </div>
      </div>

      {/* Tech stack icons flutuantes */}
      <div className="tech-icons">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="tech-icon"
            style={{
              '--icon-color': tech.color,
              '--delay': `${index * 0.1}s`,
              '--x': `${(index % 4) * 25}%`,
              '--y': `${Math.floor(index / 4) * 33}%`,
            } as React.CSSProperties}
            title={tech.name}
          >
            <span className="icon-symbol">{tech.icon}</span>
            <span className="icon-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
