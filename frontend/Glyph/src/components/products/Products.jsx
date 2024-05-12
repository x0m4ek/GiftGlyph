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
function Products({filter}) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const cards = [
    {
      image: Card1,
      name: "PlayStation",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card2,
      name: "Spotify",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card3,
      name: "UberEats",
      priceMin: 50,
      priceMax: 200,
    },
    {
      image: Card4,
      name: "Starbucks",
      priceMin: 50,
      priceMax: 200,
    },
    {
        image: Card1,
        name: "PlayStation",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Nature,
        name: "Nature",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Monobank,
        name: "Mono",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card4,
        name: "Starbucks",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Card3,
        name: "UberEats",
        priceMin: 50,
        priceMax: 200,
      },
      {
        image: Moon,
        name: "Moon" ,
        priceMin: 50,
        priceMax: 200,
      },
      {
          image: Card1,
          name: "PlayStation",
          priceMin: 50,
          priceMax: 200,
        },
        {
          image: Card2,
          name: "Spotify",
          priceMin: 50,
          priceMax: 200,
        },
      
  ];
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
          url={"1213"}
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