import React from 'react'
import './Home.scss'
import '../../App.css'
import SearchIcon from '../../assets/img/home-search-btn.svg'
import Boy from '../../assets/img/boyImg.png'
import Brain from '../../assets/img/Idea.svg'
import Lamp from '../../assets/img/chiroq.svg'
import Desk from '../../assets/img/doskaIcon.svg'
import NumberIcon from '../../assets/img/numberIcon.svg'
function Home() {
  return (
    <>

      <div className='home'>

        <div className="container">
          <div className="home__inner">
            <div className="home__info">
              <p className='span'>Never Stop Learning</p>
              <h1 className='h1'>Grow up your skills
                by online courses
                with Eduvi</h1>
              <p className="home__text">
                Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.
              </p>
              <div className="home__search">
                <select className='home__select' name="" id="">
                  <option value="" selected>Kindergarten</option>
                  <option value="" >School</option>
                  <option value="" >Collage</option>
                </select>
                <input className='home__input' type="text" placeholder='Class/Course' />
                <button className='home__search__btn'> <img src={SearchIcon} alt="" /><span>Search</span></button>
              </div>
            </div>
            <div className="home__img__wrap">
              <span className='brain__icon'>
                <img src={Brain} alt="" />
              </span>
              <span className='lapm__icon'>
                <img src={Lamp} alt="" />
              </span>
              <span className="desk__icon">
                <img src={Desk} alt="" />
              </span>
              <span className='num__icon'>
                <img src={NumberIcon} alt="" />
              </span>
              <div className="wrapper">
                <div className="home__img">
                  <img src={Boy} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home