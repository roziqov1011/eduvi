import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import banner from "../../img/shopbanner.png";
import "./Shop.scss";
import ShopCard from "../../components/ShopCard/ShopCard";
import ShopSearch from "../../components/ShopSearch/ShopSearch";
import { Pagination } from "antd";
import { bookData } from "../../components/Data/books";
import emage from "./Image.png";
import { Rate } from "antd";
function Shop() {
  const [search, setSearch] = useState(null);
  console.log(search);
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("All"); // Default genre filter

  // Calculate the start and end index of the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, bookData.length); // Ensure endIndex doesn't exceed bookData.length

  // Filter book data based on current genre
  const filteredData =
    currentGenre === "All"
      ? bookData
      : bookData.filter((book) => book.genre === currentGenre);

  // Slice the filtered data array to get the items for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

  // Handler function to change the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handler function to change the current genre filter
  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1); // Reset current page when changing genre filter
  };

  return (
    <div className="shops">
      <Hero path={"Shop"} title={`Eduvi Online Book Shop`} banner={banner} />
      <div className="fatherShop">
        <div className="container ">
          <section className="shopDivider">
            <div className="leftShop">
              <div className="shopPopular">
                <h1 className="popular__title">Popular Books</h1>
                <div className="popular__box">
                  <div className="popular__card">
                    <img className="popular__card__img" alt="" src={emage} />
                    <div className="popular__card__item">
                      <Rate disabled defaultValue={5} />
                      {/* item.rating  */}
                      <h2 className="popular__card__title">
                        The Three Musketeers, by Alexandre Dumas
                      </h2>
                      <p className="popular__card__price">$39.00</p>
                    </div>
                  </div>
                  <div className="popular__card">
                    <img className="popular__card__img" alt="" src={emage} />
                    <div className="popular__card__item">
                      <Rate disabled defaultValue={5} />
                      {/* item.rating  */}
                      <h2 className="popular__card__title">
                        The Three Musketeers, by Alexandre Dumas
                      </h2>
                      <p className="popular__card__price">$39.00</p>
                    </div>
                  </div>

                  <div className="popular__card">
                    <img className="popular__card__img" alt="" src={emage} />
                    <div className="popular__card__item">
                      <Rate disabled defaultValue={5} />
                      {/* item.rating  */}
                      <h2 className="popular__card__title">
                        The Three Musketeers, by Alexandre Dumas
                      </h2>
                      <p className="popular__card__price">$39.00</p>
                    </div>
                  </div>
                </div>

                <a className="popular__card__info" href="#">See More</a>
              </div>
              <div className="shopPopular shopPopular2">
                <h1 className="popular__title">New Arrivals</h1>
                <div className="popular__box">
                  <div className="popular__card">
                    <img className="popular__card__img" alt="" src={emage} />
                    <div className="popular__card__item">
                      <Rate disabled defaultValue={5} />
                      {/* item.rating  */}
                      <h2 className="popular__card__title">
                        The Three Musketeers, by Alexandre Dumas
                      </h2>
                      <p className="popular__card__price">$39.00</p>
                    </div>
                  </div>
                  <div className="popular__card">
                    <img className="popular__card__img" alt="" src={emage} />
                    <div className="popular__card__item">
                      <Rate disabled defaultValue={5} />
                      {/* item.rating  */}
                      <h2 className="popular__card__title">
                        The Three Musketeers, by Alexandre Dumas
                      </h2>
                      <p className="popular__card__price">$39.00</p>
                    </div>
                  </div>

                  <div className="popular__card">
                    <img className="popular__card__img" alt="" src={emage} />
                    <div className="popular__card__item">
                      <Rate disabled defaultValue={5} />
                      {/* item.rating  */}
                      <h2 className="popular__card__title">
                        The Three Musketeers, by Alexandre Dumas
                      </h2>
                      <p className="popular__card__price">$39.00</p>
                    </div>
                  </div>
                </div>

                <a className="popular__card__info" href="#">See More</a>
              </div>
            </div>

            <div className="rightShop">
              <div className="Shop__filters">
                <button
                  onClick={() => handleGenreChange("All")}
                  className={currentGenre === "All" ? "active" : ""}
                >
                  All Books
                </button>
                <button
                  onClick={() => handleGenreChange("Dystopian")}
                  className={currentGenre === "Dystopian" ? "active" : ""}
                >
                  Dystopian
                </button>
                <button
                  onClick={() => handleGenreChange("Fiction")}
                  className={currentGenre === "Fiction" ? "active" : ""}
                >
                  Fiction
                </button>
                <button
                  onClick={() => handleGenreChange("Adventure")}
                  className={currentGenre === "Adventure" ? "active" : ""}
                >
                  Adventure
                </button>
              </div>

              <ShopSearch setSearch={setSearch} />

              <div className="Shop__list">
                {search == null
                  ? currentPageData?.map((item, index) => (
                      <ShopCard key={index} item={item} />
                    ))
                  : currentPageData
                      ?.filter((i) =>
                        i.title.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <ShopCard key={index} item={item} />
                      ))}
              </div>
              <Pagination
                className="pagiShop"
                current={currentPage}
                pageSize={itemsPerPage}
                total={filteredData.length}
                onChange={handlePageChange}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shop;
