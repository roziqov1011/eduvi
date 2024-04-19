import React from 'react'
import Hero from '../../components/Hero/Hero'
import banner from '../../img/shopbanner.png'
import './Shop.scss'
function Shop() {
  return (
    <div className='shops'>
        <Hero  path={'Shop'} title={`Eduvi Online Book Shop`} banner={banner} />
        <h1 className=''>Shop</h1>

    </div>
  )
}

export default Shop