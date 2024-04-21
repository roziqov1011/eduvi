
import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero'
import banner from '../../img/shopbanner.png'
import './Shop.scss'
import ShopCard from '../../components/ShopCard/ShopCard'
import { Pagination } from 'antd';
import {bookData} from '../../components/Data/books'
function Shop() {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index of the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, bookData.length); // Ensure endIndex doesn't exceed bookData.length

  // Slice the bookData array to get the items for the current page
  const currentPageData = bookData.slice(startIndex, endIndex);

  // Handler function to change the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='shops'>
        <Hero  path={'Shop'} title={`Eduvi Online Book Shop`} banner={banner} />
        <div className='fatherShop'>
        <div className="container ">
          <section className='shopDivider'>
          <div className='leftShop'></div>
<div className='rightShop'>

<div className='Shop__list'>

{
                  currentPageData.map((item, index) => (
                    <ShopCard key={index} item={item} />
                  ))
                }
                <Pagination className='pagiShop'
                current={currentPage}
                pageSize={itemsPerPage}
                total={bookData.length}
                onChange={handlePageChange}
              />
</div>

</div>
          </section>
        </div>
        </div>

    </div>
  )
}



export default Shop