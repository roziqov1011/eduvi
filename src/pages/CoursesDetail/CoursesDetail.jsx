import React from 'react'
import './CoursesDetail.scss'
import youtube from '../../assets/img/Image.png'

function CoursesDetail() {
  return (
    <div>
       <div className="container">
       <div className="Hero">
        <div className="Hero__rihgt">
          <h1>Home | Courses | Course Details</h1>
          <img src={youtube} alt="" />
          <h2>Maths - for Standard 3 Students | Episode 2</h2>
        </div>
        <div className="Hero__left">
          <h1>Course Playlists</h1>
          <div className="Hero__left__card">
            <img src={youtube} alt="" />
            <div className="Hero__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Hero__left__card">
            <img src={youtube} alt="" />
            <div className="Hero__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Hero__left__cardd">
            <img src={youtube} alt="" />
            <div className="Hero__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Hero__left__cardd">
            <img src={youtube} alt="" />
            <div className="Hero__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Hero__left__cardd">
            <img src={youtube} alt="" />
            <div className="Hero__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
          <div className="Hero__left__cardd">
            <img src={youtube} alt="" />
            <div className="Hero__left__card__left">
              <h2>Maths - Introduction</h2>
              <span>1:57</span>
            </div>
          </div>
        </div>
      </div>

      {/* COURSES DETAIL */}



      {/* RIGHT */}
      <div className="CoursesDetail__rigt">
        <div className="CoursesDetail__right__top">
          <span>
            <h1>Course Details</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
          </span>

          <span>
            <h1>Certification</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
          </span>

          <span>
            <h1>Who this course is for</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
          </span>
        </div>
        <div className="CoursesDetail__right__bottom">
          <h2>What you'll learn in this course:</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>

      </div>


{/* LEFT */}

<div className="CoursesDetail__left">

        <div class="CoursesDetail__left__box">
            <div class=" quti">
                <div class="left">Price</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">instructor</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Ratings</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Durations</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Lessons</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Quzzies</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Certificate</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Language</div>
                <div class="right"><b>$49.00</b></div>
            </div>
            <div class="CoursesDetail__left__quti">
                <div class="left">Access</div>
                <div class="right"><b>$49.00</b></div>
            </div>
        </div>
    
</div>
       </div>
        
    </div>
  )
}

export default CoursesDetail