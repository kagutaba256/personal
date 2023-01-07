import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../layout/Content'

function StreetFighterDQN() {
  return (
    <Content>
      <div className='container' id='street-fighter-dqn'>
        <div className='back-button'>
          <Link to='/projects'>
            <i className='fas fa-arrow-left' /> <span>Back</span>
          </Link>
        </div>
        <div className='project'>
          <h1>Street Fighter DQN</h1>
          <h3>
            A Deep Q Learning neural network that learned how to (poorly) play
            Street Figther III: 3rd Strike using{' '}
            <a
              href='https://diambra.ai/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              Diambra Arena
            </a>
          </h3>
          <h3>June 2022</h3>
          <div className='links'>
            <ul>
              <li>
                <div className='github'>
                  <a
                    title='https://github.com/kagutaba256/diambra-deep-q'
                    href='https://github.com/kagutaba256/diambra-deep-q'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <i className='fab fa-github' />{' '}
                    <span className='text'>Source Code on GitHub</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='line' />
          <br />

          <div className='screenshot'>
            <video
              loop
              controls
              autoPlay
              muted
              playsInline
              className='screenshot'
              style={{ width: '100%' }}
            >
              <source
                src='
                /assets/projects/street-fighter-dqn/street-fighter-dqn-spammer.mp4
              '
                type='video/mp4'
              />
            </video>
            <p className='caption'>
              The neural network playing the character Yun from Street Fighter
              III: 3rd Strike vs. an Easy AI opponent
            </p>
          </div>

          <h3 id='about'>About The Project</h3>
          <p>
            This was my final project for my Deep Reinforcement Learning class
            at Portland State University in Spring, 2022. The task was to train
            a Deep Q Learning neural network to play a game of our choice in the
            style of the DeepMind Atari paper. I chose to use a non-standard
            OpenAI Gym environment called{' '}
            <a
              href='https://diambra.ai/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              Diambra Arena
            </a>
            , which uses MAME to emulate arcade versions of a few different
            fighting games, including Street Fighter III: 3rd Strike. I wanted
            to pick either Street Fighter III or Tekken Tag Tournament, and
            being 2D instead of 3D, SFIII was a bit easier to train. Diambra
            Arena is an excellent project and, although using it definitely took
            a bit more work than using a standard OpenAI Gym environment for
            this project, it was well worth it, and it resulted in a neural
            network that could actually beat some of the the Easy difficulty AI
            controlled opponents.
          </p>
          <br />

          <h3 id='about-diambra-arena'>About Diambra Arena</h3>
          <p></p>
          <br />

          <h3 id='project-architecture'>Project Architecture</h3>
          <p></p>
          <br />
        </div>
      </div>
    </Content>
  )
}

export default StreetFighterDQN
