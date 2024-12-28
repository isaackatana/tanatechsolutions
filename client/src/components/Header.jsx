import React from 'react'
import Logo from '../assets/Tana-Tech-Logo-(png).png'

function Header() {
  return (
    <>
    <div className='header1'>
        <div className="search-product">
            <input type="text" inputMode='numeric' placeholder='Search Product'/>
            <button>Search</button>
        </div>
        <nav>
            <div className="user-login">
                <button className='login-btn'>Login</button>
                <button>Logout</button>
                <div className="profile">
                </div>
            </div>
            <div className="shopping-cart">
            </div>
        </nav>
    </div>
    <header>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <nav>
            <ul>
                <a href='#'>Home</a>
                <div className="has-submenu">
                    <a href='#'>Spares & Repairs</a>
                    <ul>
                        <li>Phone Screens</li>
                        <li>Laptop Screens</li>
                        <li>Laptop Buttons</li>
                        <li>Phone Buttons</li>
                        <li>Charging systems</li>
                        <li>Batteries</li>
                    </ul>
                </div>
                <div className="has-submenu">
                    <a href='#'>Computers</a>
                    <ul>
                        <li>Desktops</li>
                        <li>Laptops</li>
                        <li>Monitors</li>
                        <li>Storages</li>
                    </ul>
                </div>
                <div className="has-submenu">
                    <a href='#'>Phones</a>
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