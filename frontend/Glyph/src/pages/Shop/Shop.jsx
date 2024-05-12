import React, { useState } from 'react';
import "./Shop.scss";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Filters from '../../components/filters/Filters';
import Products from '../../components/products/Products';

function Shop() {
    const [selectedFilter, setSelectedFilter] = useState();

    const handleSet = (selected) => {
        setSelectedFilter(selected)
    }

  return (
    <>
    <Navbar />
        <div className="shop_wrapper">
            <div className="conteiner">
                <div className="inner">
                    <div className="filters">
                         <Filters onChangeFilter={(value) => handleSet(value)}/>
                    </div>
             
                    <Products filter={selectedFilter} />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Shop