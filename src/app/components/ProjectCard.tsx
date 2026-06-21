import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  image?: string;
  isProprietary?: boolean;
}

export default function ProjectCard({
  title,
  description,
  stack,
  image,
  isProprietary = true
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-placeholder">
            <span className="placeholder-icon">📁</span>
          </div>
        )}
        {isProprietary && (
          <div className="proprietary-badge">
            <span>🔒</span> Privado
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-stack">
          {stack.map((tech) => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>
        {isProprietary && (
          <p className="proprietary-note">
            Demonstração disponível em entrevista
          </p>
        )}
      </div>
    </div>
  );
}
