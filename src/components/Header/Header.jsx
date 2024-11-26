import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const tooggleBurger = () => {
        setIsActive(!isActive)
    }

    const closeBurger = () => {
        setIsActive(false)
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav className='nav'>


                        <h1>SHOP.CO</h1>
                        <div className={`menu ${isActive ? 'active' : ''}`}>
                            <a href="/#selling">On Sale</a>
                            <a href="/#arrivals">New arrivals</a>
                            <Link to={'/contacts'}>Brands</Link>
                        </div>

                        <input placeholder='Search for products...' type="text" />
                        <div>
                            <img src="/korzinka.svg" alt="" />
                            <img src="/provil.svg" alt="" />
                        </div>

                        <div onClick={tooggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                            <div></div>
                            <div></div>
                        </div>
                        
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header