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
            style of the DeepMind Atari paper. I chose to use an 
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
          <p>
            <a
              href='https://diambra.ai/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              Diambra Arena
            </a>{' '}
            is an OpenAI Gym environment that emulates a variety of fighting
            games using the free and open source arcade emulator <a
              href='https://www.mamedev.org/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              MAME
            </a>. Many fighting games, such as Street Fighter III: 3rd Strike,
            Tekken Tag Tournament, Ultimate Mortal Kombat 3, and others, are packaged
            in the OpenAI Gym environment. Each step, the environment provides an observation
            or state of the game, a reward, and some metadata. These can then be fed to the 
            reinforcement learning agent.
          </p>
          <p>
            The environment doesn't provide any machine learning algorithms, so the reinforcement
            learning agent was provided by me. Because emulation is a very slow process, the training
            was bottlenecked by the slow speed of the emulator. However, with a lot of training,
            I was still able to use the environment to get some cool results.
          </p>
          <br />

          <h3 id='project-architecture'>Project Architecture</h3>
          <p>
            Deep Q-Networks all require three things at each step: the current state of the environment,
            the reward recieved for the current step, and finally the action to perform for the current
            step, which is calculated by the neural network. Diambra Arena provides through the OpenAI
            Gym the state and the reward, and the network determines the action.
          </p>
          <p>
            Although the observation object provided by Diambra allowed for a few different things to be
            used as the state, for this project I decided to adhere most closely to the DeepMind Atari paper's
            approach and use a scaled 224x384 image of the screen as the state, with a convolutional network
            calculating actions. The actions that were then put back into the environment were a combination
            of the 4 buttons and direction of the joystick on the arcade cabinet.
          </p>
          <p>
            The reward provided by Diambra Arena was very good out of the box, and was provided as the
            result of a calculation that was based on the player's health vs enemy health-- basically,
            the more health the agent had vs the health of the component, the bigger the reward. The idea
            of this was to incentivize the agent to keep its health high while decreasing the enemy's health.
            Actually winning the game wasn't included in the reward calculation.
          </p>
          <br />

          <h3 id='convolutional-neural-network'>About the Convolutional Neural Network</h3>
          <p>
            For the convolutional neural network, I used a model that was very similar to the one used in the
            DeepMind Atari paper. The state image was scaled down to 84x84, and then passed through 3 convolutional
            layers, then into 2 fully connected layers, and finally into an output layer that calculated the
            Q values for each of the possible actions. The below image contains the structure of the CNN that had
            the best results.
          </p>
          <img
            src='/assets/projects/street-fighter-dqn/street-fighter-dqn-cnn.png'
            alt='CNN Architecture'
            className='screenshot'
          />
          <p className='caption'>
            The CNN architecture used for the project
          </p>
          <br />
        </div>
      </div>
    </Content>
  )
}

export default StreetFighterDQN
