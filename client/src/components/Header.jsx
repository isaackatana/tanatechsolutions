import React, { useState } from 'react'
import Logo from '../assets/tana-tech-logo (svg).svg'
import { FaBars, FaCaretDown, FaShoppingCart, FaTimes, FaUser, FaXRay } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
import UserLogin from './auth/UserLogin'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className='header1'>
        
    </div>
    <header>
        <div className="logo">
            <Link to='/'><img src={Logo} alt="" /></Link>
        </div>
        <nav>
            <ul>
                <div className="has-submenu">
                 <NavLink to='/'>Home</NavLink>
                </div>
                <div className="has-submenu">
                    <NavLink to='/computers'>Computers</NavLink><FaCaretDown/>
                    <ul>
                        <li>Desktops</li>
                        <li>Laptops</li>
                        <li>Monitors</li>
                        <li>Storages</li>
                    </ul>
                </div>
                <div className="has-submenu">
                    <NavLink to='/phones'>Phones</NavLink><FaCaretDown/>
                    <ul>
                        <li>Mini Phones</li>
                        <li>Smart Phones</li>
                    </ul>
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
                <FaBars/> <FaTimes/>
            </div>
        </nav>
        
    </header>
    </>
  )
}

export default Header