import "./School.scss";

function School() {
 
  return (
    <div className="school">
      <div className="container">
        <h2>Other Courses For High School</h2>
        <ul className="school__list">
          <form className="form">
            <input type="text" placeholder="Serach Class, Course" />
            <button className="search">
              <i class="bi bi-search"></i>Search
            </button>
          </form>
          <div className="sort__div">
            <select className="school__select">
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
