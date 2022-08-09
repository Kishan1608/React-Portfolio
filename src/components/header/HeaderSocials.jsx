import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kishan-chauhan-a7420a212/" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/Kishan1608" target="_blank"> <FaGithub /> </a>
        <a href="https://dribbble.com/kisna1608" target="_blank"> <FiDribbble/> </a>
    </div>
  )
}

export default HeaderSocials