import React from 'react'
import Content from '../../layout/Content'
import ProjectPreview from '../../layout/ProjectPreview'
import projectData from '../../data/projects.json'
import stuffData from '../../data/stuff.json'

interface Project {
  title: string
  description: string
  picture: string
  link: string
  slug: string
}

function Projects() {
  // project items using interface
  const projectItems = projectData.projects.map((project: Project) => (
    <li key={project.slug}>
      <ProjectPreview
        title={project.title}
        description={project.description}
        picture={project.picture}
        link={`/projects/${project.slug}`}
        slug={project.slug}
      />
    </li>
  ))
  const stuffItems = stuffData.stuff.map((project: Project) => (
    <li key={project.slug}>
      <ProjectPreview
        title={project.title}
        description={project.description}
        picture={project.picture}
        link={`/projects/${project.slug}`}
        slug={project.slug}
      />
    </li>
  ))
  return (
    <Content>
      <div className='container projects'>
        <h1>Projects</h1>
        <p>Here are some of my projects</p>
        <div className='projects-list'>
          <ul>{projectItems}</ul>
        </div>
      </div>
      <div className='container projects'>
        <h1>Stuff</h1>
        <p>Here is some other stuff</p>
        <div className='projects-list'>
          <ul>{stuffItems}</ul>
        </div>
      </div>
    </Content>
  )
}

export default Projects
