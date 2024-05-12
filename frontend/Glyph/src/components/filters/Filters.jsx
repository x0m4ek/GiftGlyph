import React, { useEffect, useState } from 'react';
import "./Filters.scss"
import Search from '../search/Search';
import InputFilter from '../input/InputFilter';
import FilterCategory from '../filterCategory/FilterCategory';

function Filters({onChangeFilter}) {
    const [selectedFilter, setSelectedFilter] = useState();
    const handleSet = (selected) => {
        setSelectedFilter(selected)
    }
    useEffect(() => {
        onChangeFilter(selectedFilter)
    },[selectedFilter])
  return (
    <>
        <div className="filters-wrapper">
        
            <div className="search-product">
                  <InputFilter />
            </div>
            <div className="categories">
                <FilterCategory onChangeFilter={(value) => handleSet(value)}/>
            </div>
           
         

        </div>
    </>
  )
}

export default Filters