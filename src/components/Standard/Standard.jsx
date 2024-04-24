import "./Standar.scss";
import React, { useState } from "react";
import courses__data from "../Data1/Courses.js";

function Standard() {
  const [active, setActive] = useState("Tillar");

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
              <button className="button" onClick={()=>setActive(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
        <h2 className="h2">Standard Classes</h2>
        <ul className="class">
          {
            courses__data?.filter((k)=>k.category == active)
            .map((item,index)=>(
              <li key={index} className="class__item">
            <div className="class__div">
            <button className="course__number">{item.id}</button>
            <h3>{item.title}</h3>
            <p>{item.des}</p>
            <span className="class__details">Class Details</span>
            </div>
          </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Standard;
