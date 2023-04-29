import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/TR.png'
import portfolio2 from '../../assets/DA.png'
import portfolio3 from '../../assets/FF.png'
import portfolio4 from '../../assets/TMS.png'
import portfolio5 from '../../assets/college.png'

const data = [
  {
    id: 1,
    image: portfolio1,
    title: 'VESIT Logistics-Truck Loader',
    github: 'https://github.com/Kishan1608/TruckLoader.git'
  },
  {
    id: 2,
    image: portfolio2,
    title: 'DALLE 2.0',
    github: 'https://inquisitive-dango-6fd38d.netlify.app/'
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Aris Form',
    github: 'https://github.com/ronakkaria01/aris-forms.git'
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Theater Management System',
    github: 'https://github.com/Kishan1608/TruckLoader.git'
  },
  {
    id: 5,
    image: portfolio5,
    title: 'College Management',
    github: 'https://github.com/Kishan1608/college-website.git'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Creative Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github}) => {
          return(
          <article key={id} className='portfolio__item' >
            <div className="portfolio__item-image">
              <a href={github}>
                <img src={image} alt={title} />
              </a>
            </div>
            <h3>{title}</h3>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio