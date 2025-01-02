import React, { useState } from 'react'
import Logo from '../assets/Tana-Tech-Logo-(white-PNG).png'
import { FaArrowDown, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'

function Header() {

  return (
    <>
    <div className='header1'>
        <div className="search-product">
            <input type="text" inputMode='numeric' placeholder='Search Product'/>
            <button><FaSearch/></button>
        </div>
        <nav>
            <div className="shopping-cart">
                <FaShoppingCart/>
                <span>1</span>
            </div>
            <div className="user-login">
                <button className='login-btn'>Login</button>
                <div className="profile">
                    <FaUser/>
                </div>
            </div>
        </nav>
    </div>
    <header>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <div className="has-submenu">
                    <NavLink to='/spares'>Spares & Repairs</NavLink><FaArrowDown/>
                    <ul>
                        <li>Screens</li>
                        <li>Buttons</li>
                        <li>Ports</li>
                        <li>Batteries</li>
                    </ul>
                </div>
                <div className="has-submenu">
                    <NavLink to='/computers'>Computers</NavLink><FaArrowDown/>
                    <ul>
                        <li>Desktops</li>
                        <li>Laptops</li>
                        <li>Monitors</li>
                        <li>Storages</li>
                    </ul>
                </div>
                <div className="has-submenu">
                    <NavLink to='/phones'>Phones</NavLink><FaArrowDown/>
                    <ul>
                        <li>Mini Phones</li>
                        <li>Smart Phones</li>
                        <li>Lipa Polepole</li>
                    </ul>
                </div>
            </ul>
            <div className="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header