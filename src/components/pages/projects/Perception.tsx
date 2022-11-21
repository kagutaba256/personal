import React from 'react'
import {Link} from 'react-router-dom'
import Content from '../../layout/Content'

function Perception() {
  return (
    <Content>
      <div className='container' id='perception'>
        <div className="back-button">
          <Link to="/projects">
            <i className="fas fa-arrow-left" />{' '}
            <span>Back</span>
          </Link>
        </div>
        <div className='project'>
          <h1>Perception</h1>
          <h2>EIA-508/608 (Line 21) Compliant Captions Maker</h2>
          <h3>June 2019 - December 2019</h3>
          <div className='links'>
            <ul>
              <li>
                <div className='github'>
                  <a
                    title='https://github.com/capstone-team-a/Perception'
                    href='https://github.com/capstone-team-a/Perception'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <i className='fab fa-github' />{' '}
                    <span className="text">
                      Source Code on GitHub
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='line' />
          <br />

          <div className='screenshot'>
            <img
              src='/assets/projects/perception/perception-screenshot1.png'
              alt='Perception'
            />
            <p className='caption'>
              Test captions shown in the Perception UI, with stylized preview.
            </p>
          </div>

          <h3 id='about'>About The Project</h3>
          <p>
            Perception was the name of the capstone project developed by me and
            a team of seven other students for my 6-month long undergraduate
            capstone projects class at PSU. The project was sponsored by Amazon
            AWS Elemental, a live video processing service that was looking for
            an open-source application that could take basic user input and
            create a sequence of byte-pairs that encode the input into valid
            EIA-608 captions, which was then used to test their software.
            Development followed a two-week Agile sprint cycle, with each sprint
            culminating in a demo for the sponsors. The project was completed in
            December, 2019.
          </p>
          <br />

          <h3 id='about-standard'>About The EIA-608 Captions Standard</h3>
          <p>
            EIA-608, also known as "Line 21 captioning," is an old standard for
            closed captioning on NTSC TV broadcasts (analog!). Line 21 refers to
            the actual 21st scanline of the broadcast, which doesn't show up on
            an actual TV, but is just out of frame-- that is where the data for
            these captions is stored, all compressed as "teletext" packets,
            which are bytepairs. The data was then decoded by the cable box and
            displayed on the final image sent to the TV.
          </p>
          <p>
            Despite the age of the standard, it's still around quite a bit,
            mostly in the form of embedded captions in video files. Many movie
            rips, for example, have the captions embedded in the transport
            stream, which are usually encoded as EIA-608, to be decoded by the
            video player.
          </p>
          <p>
            More information about the standard can be found on Wikipedia:{' '}
            <a
              href='https://en.wikipedia.org/wiki/EIA-608'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}
            >
              EIA-608
            </a>
            .
          </p>
          <br />

          <h3 id='architecture'>Project Architecture</h3>
          <p>
            This was a full stack application with a backend that could be used
            standalone (fed JSON as input, also outputted JSON) as well as a web
            based frontend that could be hosted locally. The backend was written
            in Python and the frontend was created using the Mithril JS
            framework. The frontend can be hosted locally using the Python Flask
            module.
          </p>
          <br />

          <h3 id='role'>My Role</h3>
          <p>
            In the early development of the project, I was partially responsible
            for figuring out how the standard worked, creating example bytepairs
            by hand, embedding them into videos with{' '}
            <span className='monospace'>ffmpeg</span>, and testing the output
            with various video players. When development started, I worked on
            the backend of the project, adding features that worked with
            processing the JSON passed along to the backend, though I did add a
            few features to the frontend as well. Additionally, I was
            responsible for meeting with the sponsors from AWS Elemental,
            gathering requirements, and setting up the software on a server the
            team could use to test the output of our software for validity. I
            also made and presented the final demos for the class and the AWS
            Elemental team.
          </p>
          <br />
        </div>
      </div>
    </Content>
  )
}

export default Perception