import React from 'react'
import './ShopSearch.scss'
function ShopSearch({setSearch}) {
  function setValue(e){
    e.preventDefault()
    setSearch(e.target.search.value);
  }
  return (
    <div>
           <form action="#" className='shop__form' onSubmit={setValue}>
                 <input className='shop__input' type="text" placeholder='Serach Class, Course, Book Name' name='search'/>
                 <button className='shop__search__btn' type='submit'>
                 <i className='bx bx-search'></i>
                 </button>
               </form>
    </div>
  )
}

export default ShopSearch
