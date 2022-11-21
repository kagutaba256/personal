import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../layout/Content'

function About() {
  return (
    <Content>
      <div className='container' id='about'>
        <header>
          <div className='bio'>
            <h1>About Me</h1>
            <p>
              I'm <strong>Sam Little</strong>, a Software Developer in Portland,
              Oregon. I graduated from Portland State University with a Master's
              degree in Computer Science in August, 2022, and am currently{' '}
              <strong>
                searching for a full time software development position.
              </strong>
            </p>
          </div>
          <img src='/assets/avatar.jpg' alt='Sam Little' className='avatar' />
        </header>
        <div className='contact'>
          <h2>Contact</h2>
          <p>
            If you want to get in touch with me, please send me an email at
            <img
              src='/assets/email.png'
              title='my email address'
              alt='my email address'
              className='email-address'
              draggable='false'
            />
            .
          </p>
          <p>You can also find me on these other sites:</p>
          <div className='links'>
            <ul>
              <li>
                <a
                  title='github.com/kagutaba256'
                  href='https://github.com/kagutaba256'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-github fa-3x' />
                </a>
              </li>
              <li>
                <a
                  title='linkedin.com/in/sam-m-little'
                  href='https://www.linkedin.com/in/sam-m-little/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-linkedin fa-3x' />
                </a>
              </li>
              <li>
                <a
                  title='twitter.com/kagutaba256'
                  href='https://www.twitter.com/kagutaba256/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter fa-3x' />
                </a>
              </li>
              <li>
                <a
                  title='youtube.com/channel/UCQf_5zNTRXJ5xuTDbGIpsQg'
                  href='https://www.youtube.com/channel/UCQf_5zNTRXJ5xuTDbGIpsQg'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-youtube fa-3x' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='myprojects'>
          <h2>My Projects</h2>
          <p>
            You can check out my projects{' '}
            <Link className='projects-link' to='/projects' draggable='false'>
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </Content>
  )
}

export default About
