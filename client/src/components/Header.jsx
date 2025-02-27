import React, { useState } from 'react'
import Logo from '../assets/tana-tech-logo (svg).svg'
import { FaBars, FaCaretDown, FaShoppingCart, FaTimes, FaUser} from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
import UserLogin from './auth/UserLogin'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  return ( 
    <>
    <div className='header1'>
        
    </div>
    <header>
        <div className="logo">
            <Link to='/'><img src={Logo} alt="" /></Link>
        </div>
        <nav>
            <ul className={`nav-links ${isMenuOpen ? 'active' : 'inactive'}`}>
                <div className="has-submenu">
                   <NavLink to='/'>Home</NavLink>
                </div>
                <div className="has-submenu">
                    <NavLink to='/video'>Video</NavLink><FaCaretDown/>
                    <ul>
                        <li>Shooting & Editing</li>
                        <li>Color Correcting & Grading </li>
                    </ul>
                </div>
                <div className="has-submenu">
                    <NavLink to='/audio'>Audio</NavLink><FaCaretDown/>
                    <ul>
                        <li>Instrumentals</li>
                        <li>Mixing & Mastering</li>
                    </ul>
                </div>
                <div className="has-submenu">
                   <NavLink to='/contact'>Contact</NavLink>
                </div>

            </ul>
            <div className='userAccount'>
                <div className="shopping-cart">
                    <FaShoppingCart/>
                    <span>0</span>
                </div>
                <div className="user-login">
                    <button className='login-btn' onClick={() => setIsOpen(true)}>Login</button>
                    <div className="profile">
                        <FaUser/>
                    </div>
                </div>
                {isOpen && (
                 <UserLogin/>
                )}
            </div>
            <div className="burger">
                {isMenuOpen ? <FaTimes onClick={toggleMenu}/> : <FaBars onClick={toggleMenu}/>}
            </div>
        </nav>
        
    </header>
    </>
  )
}

export default Header