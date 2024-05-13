import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Card4 from "../images/card4.png";
import Monobank from "../images/monobank.png"

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }
  

const cards = [
 
    {
      image: Card1,
      name: "PlayStation",
      priceMin: 50,
      priceMax: 200,
      id:1
    },
    {
      image: Card2,
      name: "Spotify",
      priceMin: 50,
      priceMax: 200,
      id:2
    },
    {
      image: Card3,
      name: "UberEats",
      priceMin: 50,
      priceMax: 200,
      id:3
    },
    {
      image: Card4,
      name: "Starbucks",
      priceMin: 50,
      priceMax: 200,
      id:4
    },
    {
        image: Card2,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
        id:6
      },
    {
        image: Card1,
        name: "PlayStation",
        priceMin: 50,
        priceMax: 200,
        id:5
      },
     
      
  ];
  const GamingCards = shuffle([...cards]);
  const BeutyCards = cards.slice(0, -1)
  const FashionCards = [
    {
        image: Card1,
        name: "PlayStation",
        priceMin: 50,
        priceMax: 200,
        id:1
      },
      {
        image: Card4,
        name: "Starbucks",
        priceMin: 50,
        priceMax: 200,
        id:4
      },
      {
        image: Card2,
        name: "Spotify",
        priceMin: 50,
        priceMax: 200,
        id:2
      },
    
      
      {
          image: Card1,
          name: "PlayStation",
          priceMin: 50,
          priceMax: 200,
          id:5
        },
        {
            image: Card3,
            name: "UberEats",
            priceMin: 50,
            priceMax: 200,
            id:3
          },
        {
          image: Card2,
          name: "Spotify",
          priceMin: 50,
          priceMax: 200,
          id:6
        },
  ]

  export  {cards, GamingCards, BeutyCards,FashionCards}