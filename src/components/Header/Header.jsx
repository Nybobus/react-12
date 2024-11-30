import React, {useState} from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isActive, setIsActive]  = useState(false)


  const toggleBurger = () => {
    setIsActive(!isActive)
  }
  return (
    <>
    <header className="header">
        <div className="container">
            <div className='header__wrapper'>
              <div className="header__wrap">
              <div className="header__header">
              <Link to={'/'}><img className='logo__img' src="/SHOP-CO.png" alt="" /></Link>
                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <Link to={'/sale'} className='dropdown' >
                    Shop
                    <img  src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" />

                    <div>
                      <Link to={'/'}>Men</Link>
                      <Link to={'/'}>Women</Link>
                      <Link to={'/'}>Kids</Link>

                    </div>
                    </Link>

                    <a href="/#selling">On Sale</a>
                    <a href="/#arrivals">New Arrivals</a>
                    <Link to={'/brands'}>Brands</Link>
            </div>                
              </div>

            <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                <div className='div'></div>
                <div className='div'></div>
                <div className='div'></div>
            </div>                
              </div>

                <div className="header__search">
                  <div className='header__input'>
                    <img src="/search-icon.svg" alt="" />
                   <p>Search for products...</p>
                   </div>
                  <img src="/icon-1.svg" alt="" />
                  <img src="/icon-2.svg" alt="" />
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header