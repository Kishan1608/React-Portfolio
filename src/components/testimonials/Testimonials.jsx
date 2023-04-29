import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR2,
    name: 'Mayank Sharma',
    review: 'Always available, extremely knowledgeable, and a tremendous "can-do" attitude. Without any hesitation... highly recommended.'
  },
  {
    avatar: AVTR1,
    name: 'Abhay Adhikari',
    review: 'Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!'
  },
  {
    avatar: AVTR3,
    name: 'Vikrant Dubey',
    review: "You have been absolutely wonderful for Kinship Center, and I can't thank you enough for all your tremendous skills and support. You will always be Kinship Center's vendor of choice!"
  },
  {
    avatar: AVTR4,
    name: 'Rishab Singh',
    review: "Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today's market."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        spaceBetween={40}
        slidesPerView = {1}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='clinet__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials