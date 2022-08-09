import React from 'react'
import './footer.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kishan</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100007618607929" target="_blank"> <BsFacebook/> </a>
        <a href="https://www.instagram.com/kisna_08_/" target="_blank"> <BsInstagram/> </a>
        <a href="https://twitter.com/Kishan__Chauhan" target="_blank"> <BsTwitter/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kishan Chauhan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer