import React from 'react'
import './Project.css'

function Project({title, description, projectUrl, githubUrl, image}) {
  return (
    <div id="projectsPage">
      <div className="projectsPage__left">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="projectsPage__buttons">
          <a href={projectUrl} target="_blank" rel="noreferrer">Live Demo</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">Code On Github</a>
        </div>
      </div>
      <div className="projectsPage__right">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Project
