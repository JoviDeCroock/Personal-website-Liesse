import React from 'react'

import projects from '../constants/projects'
import Gallery from '../components/Gallery'

const Projects = () => (
  <section id="three">
    <h2>Recent Work</h2>
    <Gallery images={projects} />
  </section>
)

export default Projects;
