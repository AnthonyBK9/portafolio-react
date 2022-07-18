import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Siderbar from '../Sidebar/Sidebar'
import AboutMe from '../aboutMe/AboutMe'
import Skills from '../skills/Skills'
import Portafolio from '../portafolio/Portafolio'
import Contact from '../contact/Contact'
import Home from '../home/Home'

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {	
    setIsOpen(!isOpen);
    
  }
  return (
    <>
        <NavBar  toggle={toggle}/>
        <Siderbar toggle={toggle} isOpen={isOpen}/>
        <Home />
        <AboutMe />
        <Skills />
        {/* <Portafolio /> */}
        {/* <Contact /> */}
    </>
  )
}

export default Pages