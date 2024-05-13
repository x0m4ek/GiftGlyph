import React, { useState } from 'react';
import "./Products.scss";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '../card/Card';
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";
import Card4 from "../../images/card4.png";
import Monobank from "../../images/monobank.png";
import Moon from "../../images/moon.jpg";
import Nature from "../../images/nature.png";
import { Pagination } from '@mui/material';
import { cards } from '../../products/Products';
function Products({filter}) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  
  return (
    <>
    <div className="wrapper-prod">

  
    <div className="top-items">
      <div className="title"><h1>{filter} | 245 eGift Cards</h1></div>
      <div className="sort">
      <FormControl fullWidth>
        <InputLabel style={{color:"#000", fontSize:18,
          fontWeight:400
        }}>Sorted by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Sorted by"
          onChange={handleChange}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"Price"}>Price</MenuItem>
       
        </Select>
    </FormControl>

      </div>
    </div>
    
    <div className="products">
    {cards.map((card, index) => (
  
        <Card
          key={index}
          image={card.image}
          name={card.name}
          priceMin={card.priceMin}
          priceMax={card.priceMax}
          url={card.id}
        />
 
      ))}
     
    </div>
    <div className="pagination">
         <Pagination count={3} variant="outlined" shape="rounded" size="large" />
      </div>
   
    </div>
    </>
  )
}

export default Products