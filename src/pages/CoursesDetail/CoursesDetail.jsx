import React from 'react'
import './CoursesDetail.scss'
import youtube from '../../assets/img/Image.png'

function CoursesDetail() {
  return (
    <div>
       <div className="container">
       <div className="Headerr">
        <div className="Headerr__rihgt">
          <h1>Home | Courses | Course Details</h1>
          <img src={youtube} alt="" />
          <h2>Maths - for Standard 3 Students | Episode 2</h2>
        </div>
        <div className="Headerr__left">
          <h1>Course Playlists</h1>
          <div className="Headerr__left__card">
            <img src={youtube} alt="" />
            <div className="Headerr__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Headerr__left__card">
            <img src={youtube} alt="" />
            <div className="Headerr__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Headerr__left__cardd">
            <img src={youtube} alt="" />
            <div className="Headerr__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Headerr__left__cardd">
            <img src={youtube} alt="" />
            <div className="Headerr__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Headerr__left__cardd">
            <img src={youtube} alt="" />
            <div className="Headerr__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Headerr__left__cardd">
            <img src={youtube} alt="" />
            <div className="Headerr__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
        </div>
      </div>
       </div>
        
    </div>
  )
}

export default CoursesDetail