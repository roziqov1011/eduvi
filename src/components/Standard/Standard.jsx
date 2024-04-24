import "./Standar.scss";
import React, { useState } from "react";
import courses__data from "../Data1/Courses.js";

function Standard() {
  const [active, setActive] = useState("Dasturlash");

  let arr = [];
  courses__data.forEach((item) => {
    if (!arr.includes(item.category)) {
      arr.push(item.category);
    }
  });
  return (
    <div className="standard">
      <div className="container">
        <ul className="standard__list">
          {arr?.map((item, index) => (
            <li key={index}
              className={active == item ? 'standard__item active':'standard__item'}
            >
              <button className='button' onClick={() => setActive(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
        <ul className="calss">
          <li className="calss__item">
            <span className="class__number">1</span>
            <h3>Standard One</h3>
            <p>Standard 1 is a foundation Standard that reflects 7 important concepts...</p>
            <span>Class Details</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Standard;
