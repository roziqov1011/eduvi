import React from 'react'
import './Courses.scss'
import Hero from '../../components/Hero/Hero'
import banner from '../../img/shopbanner.png'
import Standard from '../../components/Standard/Standard'
function Courses() {
  return (
    <div>
      <Hero path={'Courses'} title={`Eduvi Courses For All Standards`} banner={banner}/>
      <Standard/>
    </div>
  )
}

export default Courses