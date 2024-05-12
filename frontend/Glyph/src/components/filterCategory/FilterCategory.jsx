import React, { useEffect, useState } from 'react';
import "./FilterCategory.scss";

function FilterCategory({onChangeFilter}) {
    const [showFilters, setShopFilters] = useState(false)
    const [activeFilter, setActiveFilter] = useState("Most popular");

    useEffect(()=> {
        onChangeFilter(activeFilter)
    },[activeFilter])
    return (
        <div className="filter-category">
          <div className="category-title" onClick={()=> setShopFilters(!showFilters)}>
            <span>Select Category</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${showFilters ? "opened" : ""}`}>
                <path d="M12.2048 7.29258L18.1189 15.7412C18.49 16.2715 18.1107 17 17.4635 17L6.53652 17C5.88931 17 5.50998 16.2715 5.88114 15.7412L11.7952 7.29258C11.8947 7.1504 12.1053 7.1504 12.2048 7.29258Z" fill="#33363F"/>
                </svg>
          </div>

          <div className={`category-list ${showFilters ? "active" : ""}`}>
            <div className={`category-item ${activeFilter === "Most popular" ? "active" : ""}`} onClick={() => setActiveFilter("Most popular")}>
        
              <label htmlFor="most-popular"><span>Most Popular</span></label>
            </div>
            <div className={`category-item ${activeFilter === "Single Brands" ? "active" : ""}`} onClick={() => setActiveFilter("Single Brands")}>
      
              <label htmlFor="single-brands"><span>Single Brands</span></label>
            </div>
            <div className={`category-item ${activeFilter === "HyperMarkets" ? "active" : ""}`} onClick={() => setActiveFilter("HyperMarkets")}>
        
              <label htmlFor="hypermarkets"> <span>HyperMarkets</span></label>
            </div>
            <div  className={`category-item ${activeFilter === "Online Shopping" ? "active" : ""}`} onClick={() => setActiveFilter("Online Shopping")}>
      
              <label htmlFor="online-shopping"><span>Online Shopping</span></label>
            </div>
            <div className={`category-item ${activeFilter === "Fashion and Accessories" ? "active" : ""}`} onClick={() => setActiveFilter("Fashion and Accessories")}>
         
              <label htmlFor="fashion-accessories"> <span>Fashion and Accessories</span></label>
            </div>
            <div className={`category-item ${activeFilter === "Electronics" ? "active" : ""}`} onClick={() => setActiveFilter("Electronics")}>

              <label htmlFor="electronics"><span>Electronics</span></label>
            </div>
            <div className="see-more-btn">
                <span>See More</span>
            </div>
          </div>
        </div>
      );
}

export default FilterCategory