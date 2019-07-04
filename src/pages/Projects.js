import React from 'react'

import projects from '../constants/projects'
import Gallery from '../components/Gallery'

const Projects = () => (
  <section id="three">
    <h2>Recent Work</h2>
    <Gallery
        images={projects.map(({ id, src, thumbnail, caption, description }) => ({
            src,
            thumbnail,
            caption,
            description
        }))}
    />
  </section>
)

export default Projects;
