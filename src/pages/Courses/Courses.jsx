import React from 'react'
import './Courses.scss'
import Hero from '../../components/Hero/Hero'
import banner from '../../img/shopbanner.png'
import Standard from '../../components/Standard/Standard'
import { Header } from 'antd/es/layout/layout'
import School from '../../components/School/School'
function Courses() {
  return (
    <div>
      <Hero path={'Courses'} title={`Eduvi Courses For All Standards`} banner={banner}/>
      <Standard/>
      <School/>
    </div>
  )
}

export default Courses