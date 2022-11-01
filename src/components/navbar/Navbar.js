import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseFill />Bienes</span>Raíces</h1>           
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Anuncios</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contacto</a></li>
                <button className='btn'>Sign In</button>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon' />) : (<GiHamburgerMenu className='icon'/>)}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar