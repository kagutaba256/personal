import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../layout/Content'

function PortfolioSite() {
    return (
        <Content>
            <div className='container' id='portfolio-site'>
                <div className='back-button'>
                    <Link to='/projects'>
                        <i className='fas fa-arrow-left' /> <span>Back</span>
                    </Link>
                </div>
                <div className='project'>
                    <h1>My Portfolio Website</h1>
                    <h2>This Site! Built from scratch with React, custom CSS</h2>
                    <h3>December 2022 - Current</h3>
                    <div className='links'>
                        <ul>
                            <li>
                                <div className='github'>
                                    <a
                                        title='https://github.com/kagutaba256/personal'
                                        href='https://github.com/kagutaba256/personal'
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
                        <img
                            src='/assets/projects/portfolio-site/portfolio-site-screenshot1.png'
                            alt='Portfolio Site Screenshot'
                        />
                        <p className='caption'>
                            The front page of the site, showing a very basic 3D physics simulation
                            with some floating cubes, made with Three.js.
                        </p>
                    </div>

                    <h3 id='about'>About The Project</h3>
                    <p>
                        This portfolio website was made from scratch using React with custom CSS.
                        The first iteration of the site was made in late 2020, and I have completely
                        redone it a few times since then. I learned react and other things related to
                        web development from some online courses I started taking in 2020, and used
                        this site as a way to try out the new skills. I tried to make it simple and
                        as easy as possible to add new projects in the future, but time will tell if
                        that is true or not.
                    </p>
                    <br />

                    <h3 id='architecture'>Project Architecture</h3>
                    <p>
                        For this site, I started with the sidebar as I had a basic vision of what I wanted the site
                        to feel like when navigating. I laid out the basic links and then got to work on the CSS, picking
                        colors and stuff. I used SCSS files and sass to get them to work with React. I also decided from
                        the start to use TypeScript because I find it a bit easier to write-- the IDE seems to be able to provide
                        a lot better linting and hints that way.
                    </p>
                    <p>
                        I then started adding the about page, and then the projects listing page. I spent the most time with the CSS,
                        trying to make everything look nice. I then added a few sample projects. After that, I made the homepage, and
                        made a really simple 3D physics simulation with floating cubes for the homepage, using three.js to display
                        the 3D graphics and for the simple box meshes.
                    </p>
                    <br />

                </div>
            </div>
        </Content>
    )
}

export default PortfolioSite
