import React from 'react'
import './Courses.scss'
import Hero from '../../components/Hero/Hero'
import banner from '../../img/shopbanner.png'
function Courses() {
  return (
    <div>
      <Hero path={'Courses'} title={`Eduvi Courses For All Standards`} banner={banner}/>
        <h1>Courses</h1>
    </div>
  )
}

export default Courses