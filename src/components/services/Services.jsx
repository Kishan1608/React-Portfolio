import React from 'react'
import './services.css';
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creative Design with Latest Technologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Aesthectic Experience of the Product</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Effectiveness</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend and Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating, Building, Maintaining and Deploying the website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating a Secure Server</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS Styling and Responsive UI</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Image Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SVG Vector Art</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing Blog Post</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services