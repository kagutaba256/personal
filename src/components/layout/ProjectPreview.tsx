import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

type Props = {
  picture: string
  link: string
  title: string
  description: string
  slug: string
}

function ProjectPreview(props: Props) {
  return (
    <div className='project-preview' id={props.slug}>
      <Link to={props.link} draggable='false'>
        <div className='content'>
          {props.picture ? (
            <img src={props.picture} alt={props.title} draggable='false' />
          ) : (
            <Skeleton height={200} width={300} />
          )}
          <div className='info'>
            {<h3>{props.title}</h3> || <Skeleton />}
            {<p>{props.description}</p> || <Skeleton count={3} />}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreview
