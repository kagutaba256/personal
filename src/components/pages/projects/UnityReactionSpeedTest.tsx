import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../layout/Content'

function UnityReactionSpeedTest() {
  return (
    <Content>
      <div className='container' id='unity-reaction-speed-test'>
        <div className='back-button'>
          <Link to='/projects'>
            <i className='fas fa-arrow-left' /> <span>Back</span>
          </Link>
        </div>
        <div className='project'>
          <h1>Unity Reaction Speed Tester</h1>
          <h2>A free reaction speed testing program with less added delay than the HumanBenchmark one</h2>
          <h3>September 2021</h3>
          <div className='links'>
            <ul>
              <li>
                <div className='github'>
                  <a
                    title='https://github.com/kagutaba256/unity-reaction-speed-test'
                    href='https://github.com/kagutaba256/unity-reaction-speed-test'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <i className='fab fa-github' />{' '}
                    <span className='text'>Source Code on GitHub</span>
                  </a>
                </div>
              </li>
              <li>
                <div className='docs'>
                  <a
                    title='https://github.com/kagutaba256/unity-reaction-speed-test/releases'
                    href='https://github.com/kagutaba256/unity-reaction-speed-test/releases'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <i className='fas fa-book' />{' '}
                    <span className='text'>Download Latest Build</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='line' />
          <br />

          <div className='screenshot'>
            <img
              src='/assets/projects/unity-reaction-speed-test/unity-reaction-speed-screenshot1.png'
              alt='Unity Reaction Speed Test'
            />
            <p className='caption'>
              The reaction speed test measuring reaction speeds
            </p>
          </div>

          <h3 id='about'>About The Project</h3>
          <p>
            Before I made this program, I would frequently use this reaction speed test: {' '}
            <a
              href='https://humanbenchmark.com/tests/reactiontime'
              target='_blank'
              rel='noopener noreferrer'
            >
              HumanBenchmark
            </a>
            , to test my reaction speed. However, I couldn't help but wonder if there was a
            significant delay caused by the website having to process all the browser stuff, display
            to the screen, etc. I had just been learning some Unity tutorials and figured that using
            a game engine would probably be a lot more responsive. I quickly wrote up
            a copy of the app in Unity. I was surprised to find that the clone I made actually
            was consistently around 20ms more responsive than the original! I then packged it up into a standalone
            executable and released it on GitHub, and now I use this one whenever I feel particularly
            sluggish and want a confidence boost, lol.
          </p>
        </div>
      </div>
    </Content>
  )
}

export default UnityReactionSpeedTest
