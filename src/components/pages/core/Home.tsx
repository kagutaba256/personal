import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div id='home' className='container'>
        <div className='text'>
          <h1 className='title'>Sam Little</h1>
          <h2>Software Development Engineer</h2>
          <h3 className='subtitle'>
            MS in Computer Science, August 2022, Portland State University
          </h3>
        </div>
        <div className='links'>
          <ul>
            <li>
              <Link to='/about' className='btn' draggable='false'>
                About Me
              </Link>
            </li>
            <li>
              <Link to='/projects' className='btn' draggable='false'>
                My Stuff
              </Link>
            </li>
            <li>
              <a
                href='/assets/sam-resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                draggable='false'
                className='btn'
              >
                Resume <i className='external fas fa-external-link-alt'></i>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/kagutaba256'
                target='_blank'
                rel='noopener noreferrer'
                draggable='false'
                className='btn'
              >
                <i className='fab fa-github'></i> Github{' '}
                <i className='external fas fa-external-link-alt'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sam-m-little'
                target='_blank'
                rel='noopener noreferrer'
                draggable='false'
                className='btn'
              >
                <i className='fab fa-linkedin'></i> Linkedin{' '}
                <i className='external fas fa-external-link-alt'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-text'>
          <p>
            Copyright <span className='copy'>&copy;</span> 2022 Sam Little
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
