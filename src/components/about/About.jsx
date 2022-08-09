import React from 'react'
import './about.css';
import ME from '../../assets/profile2_bgremoved.png'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>
            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>40+ Projects Completed</small>
            </article>
          </div>

          <p>Self-Motivated and Hardworking fresher
            seeking for an opportunity to work in a
            challenging environment to prove skills and
            utilize my knowledge & intelligence in the
            growth of the Organization
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About