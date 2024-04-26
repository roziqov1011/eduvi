import React, { useState } from "react";
import "./School.scss";

function School() {
  const [sortBy, setSortBy] = useState("latest");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="school">
      <div className="container">
        <h2>Other Courses For High School</h2>
        <ul className="school__list">
          <div className="input__div">
            <input type="text" placeholder="Serach Class, Course" />
            <button className="search">
              <i class="bi bi-search"></i>Search
            </button>
          </div>
          <div className="sort__div">
            <select>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default School;
