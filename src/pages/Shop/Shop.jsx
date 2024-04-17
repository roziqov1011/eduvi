import React from 'react'
import Hero from '../../components/Hero/Hero'
import banner from '../../img/shopbanner.png'

function Shop() {
  return (
    <div>
        <Hero path={'Shop'} title={`Eduvi Online Book Shop`} banner={banner}/>
        <h1>Shop</h1>
    </div>
  )
}

export default Shop