import React from 'react'
import './Project.css'

function Project({title, projectUrl, image}) {
  return (
    <div id="projectsPage">
        <h1>{title}</h1>
        <img src={image} alt="" />
    </div>
  )
}

export default Project
