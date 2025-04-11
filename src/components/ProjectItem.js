import React from "react";

function ProjectItem({ project = { name: "", about: "", technologies: [] } }) {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
