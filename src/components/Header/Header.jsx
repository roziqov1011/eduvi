import React from 'react'
import './Header.scss'
import BagIcon from '../../assets/img/bagIcon.svg'
import AccIcon from '../../assets/img/accountIcon.svg'
import LogoIcon from '../../assets/img/LogoIcon.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
        <header className='header'>
          <div className="container">
            <div className="nav">
              <Link to={'/'}>
              <img className='nav__icon' src={LogoIcon} alt="" /> <h1>Eduvi</h1>
              </Link>
              <Link to={'/shop'}>Shop</Link>
              <select className='nav__select' name="" id="">
                <option value="forKindergarten" selected>For Kindergarten</option>
              </select>
              <select className='nav__select' name="" id="">
                <option value="forSchool" selected>For High School</option>
              </select>
              <select className='nav__select' name="" id="">
                <option value="forCollage" selected>For College</option>
              </select>
              <select className='nav__select' name="" id="">
                <option value="courses" selected>Courses</option>
              </select>
              <Link to={'/cart'}>Cart (0) <img className='nav__icon' src={BagIcon} alt="" />  </Link>
              <Link to={'/accaunt'}>My Account <img  className='nav__icon' src={AccIcon} alt="" /> </Link>
            </div>
          </div>
        </header>
  )
}

export default Header