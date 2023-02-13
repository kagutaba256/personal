import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <nav className='sidebar' id='sidebar'>
      <div className='sidebar-header'>
        <NavLink to='/' draggable='false'>
          <h1 id='logo'>Sam Little</h1>
        </NavLink>
        <div id='links'>
          <a
            href='https://github.com/kagutaba256'
            target='_blank'
            rel='noopener noreferrer'
            draggable='false'
          >
            <i className='fab fa-github'></i> Github
          </a>
          <a
            href='https://www.linkedin.com/in/sam-m-little'
            target='_blank'
            rel='noopener noreferrer'
            draggable='false'
          >
            <i className='fab fa-linkedin'></i> Linkedin
          </a>
        </div>
      </div>
      <div className='sidebar-body'>
        <ul>
          <li>
            <NavLink to='/' draggable='false'>
              Home <i className='fas fa-home'></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              draggable='false'
              className={window.location.pathname === '/about' ? 'selected' : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href='/assets/sam-resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              draggable='false'
            >
              Resume <i className='fas fa-external-link-alt'></i>
            </a>
          </li>
          <li>
            <NavLink
              to='/projects'
              draggable='false'
              className={
                window.location.pathname === '/projects' ? 'selected' : ''
              }
            >
              Stuff
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='sidebar-footer'>
        <p>
          Copyright <span className='copy'>&copy;</span> 2023 Sam Little
        </p>
      </div>
    </nav>
  )
}

export default Sidebar
