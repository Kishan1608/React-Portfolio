import React from 'react'
import './header.css'
import CTA from './CTA';
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <section id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kishan Chauhan</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} className='myImage' alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header