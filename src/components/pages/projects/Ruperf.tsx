import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../layout/Content'

function Ruperf() {
  return (
    <Content>
      <div className='container' id='ruperf'>
        <div className='back-button'>
          <Link to='/projects'>
            <i className='fas fa-arrow-left' /> <span>Back</span>
          </Link>
        </div>
        <div className='project'>
          <h1>Ruperf</h1>
          <h2>Linux Perf, Implemented in Rust</h2>
          <h3>June 2021 - August 2021</h3>
          <div className='links'>
            <ul>
              <li>
                <div className='github'>
                  <a
                    title='https://github.com/HOMS-OSS/ruperf'
                    href='https://github.com/HOMS-OSS/ruperf'
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
                <div className='youtube'>
                  <a
                    title='https://www.youtube.com/watch?v=tS1O9fe4wSM'
                    href='https://www.youtube.com/watch?v=tS1O9fe4wSM'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <i className='fab fa-youtube' />{' '}
                    <span className='text'>Ruperf Demo on YouTube</span>
                  </a>
                </div>
              </li>
              <li>
                <div className='docs'>
                  <a
                    title='https://homs-oss.github.io/ruperf/docs/overview/'
                    href='https://homs-oss.github.io/ruperf/docs/overview/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                  >
                    <i className='fas fa-book' />{' '}
                    <span className='text'>Ruperf Project Page</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='line' />
          <br />

          <div className='screenshot'>
            <img
              src='/assets/projects/ruperf/ruperf-screenshot1.png'
              alt='Ruperf'
            />
            <p className='caption'>
              <span className='monospace' style={{ fontSize: '0.7rem' }}>
                ruperf
              </span>{' '}
              providing performance statistics for a file IO heavy sample
              program.
            </p>
          </div>

          <h3 id='about'>About The Project</h3>
          <p>
            Ruperf was the name of a term long group project for the Portland
            State University CS561 - Open Source Software class. The FOSS
            software was developed by me and a team of three other students. We
            set out to improve both our Rust and Linux skills by remaking an
            existing linux utility that was close to hardware, and that we could
            use to learn about the Linux kernel. We chose{' '}
            <span className='monospace'>perf</span>, a Linux utility that
            provides performance statistics for a given program. The five of us
            were able to create a version of{' '}
            <span className='monospace'>perf stat</span> using Rust that
            provides the number of CPU cycles, instructions, and cache misses
            for a given program, as well as some other statistics. Additionally,
            the project includes a GUI for ease of use.
          </p>
          <br />

          <h3 id='project-architecture'>Project Architecture</h3>
          <p>
            Ruperf is a command-line utility that can be used to profile a
            program, and is similar to the Linux utility{' '}
            <span className='monospace'>perf</span>. The program is written in
            Rust, and uses a bindgen wrapper around the Linux kernel's{' '}
            <span className='monospace'>perf_event_open</span> system call to
            collect performance statistics. Ruperf is able to collect a variety
            of statistics about a program, including the number of CPU cycles,
            instructions, cache reads and writes, cache misses, and context
            switches.
          </p>
          <p>
            The program is split into three different subcommands:{' '}
            <span className='monospace'>stat</span>, which collects statistics
            about a program, <span className='monospace'>test</span>, which runs
            test to help configure the environment for running{' '}
            <span className='monospace'>stat</span>, and{' '}
            <span className='monospace'>gui</span>, which provides a simple GUI
            for the program.
          </p>
          <br />

          <h3 id='my-role'>My Role</h3>
          <p>
            At the beginning of the project, I wrote a small program in C that
            used <span className='monospace'>perf_event_open</span> to collect
            statistics about a program, familiarized myself with the data passed
            back and how we could eventually use it in our Rust version of{' '}
            <span className='monospace'>perf</span>. I also wrote a small
            program in Rust to familiarize myself with the basics of the
            StructOpt crate, which we used to parse command line arguments.
          </p>
          <p>
            Ultimately, I was responsible for the{' '}
            <span className='monospace'>test</span> subcommand, which runs a
            series of tests to help configure the environment for running{' '}
            <span className='monospace'>stat</span>. These tests include
            checking if the kernel flag{' '}
            <span className='monospace'>perf_event_paranoid</span> is set to a
            value that allows us to use{' '}
            <span className='monospace'>perf_event_open</span>, checking for the
            presence of certain libraires on the machine, and checking if
            running some provided programs correctly produce performance
            statistics on the machine. My goal for{' '}
            <span className='monospace'>test</span> was to make adding tests in
            the future easy and straightforward, so I structured the tests in a
            way that would be easy to understand.
          </p>
        </div>
      </div>
    </Content>
  )
}

export default Ruperf
