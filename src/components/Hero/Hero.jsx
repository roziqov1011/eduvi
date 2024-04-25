import React from 'react'
import './Hero.scss'
function Hero({path, title, banner }) {
  return (
    <div className='hero container'>
        <p className='hero__path'>Home | {path}</p>
        <div className="hero__inner">
            <h2 className='hero__title'>{title}</h2>
            <img className='hero__banner' src={banner} alt="" />
        </div>
    </div>
  )
}

export default Hero