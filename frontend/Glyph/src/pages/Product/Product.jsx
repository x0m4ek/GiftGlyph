import React, { useEffect, useState } from 'react';
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card1 from "../../images/card1.png";
import "./Product.scss"
import ButtonProduct from '../../components/buttonProduct/ButtonProduct';
import Minus from "../../images/minus.png";
import Plus from "../../images/plus.png";
import { TextField } from '@mui/material';
import PlayStationAbout from "../../images/playstationWow.png";
import Slider from '../../components/slider/Slider';
import { useParams } from 'react-router-dom';
import { cards } from '../../products/Products';

function Product() {
  const [activeButton, setActiveButton] = useState({giftFriend:true});
  const [activeButtons, setActiveButtons] = useState({Custom:true});
  const [quantify, setQuantify] = useState(1)
  const [cost, setCost] = useState(12);
  const {id} = useParams()
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Find the card whose id matches the id parameter from the URL
    const foundProduct = cards.find((card) => card.id === parseInt(id));
    setProductData(foundProduct);
  }, [id]);

  const handleButtonClick = (buttonId) => {
    setActiveButton({ [buttonId]: true });
  }

  const handleButtonClick1 = (buttonId) => {
    setActiveButtons({ [buttonId]: true });
  }
  console.log(productData)
  const addToCart = () => {
    // Create a new item object
    const newItem = {
        image: productData.image,
        name:productData.name,
        priceMin: productData.priceMin,
        priceMax:productData.priceMax,
        count: quantify,
        id:productData.id
    };

    // Retrieve the current cart items from local storage
    const existingItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = existingItems.findIndex(item => item.id === productData.id);

    if (existingItemIndex !== -1) {
        // If the item exists, increment its count
        existingItems[existingItemIndex].count++;
    } else {
        // If the item does not exist, add it to the cart
        existingItems.push(newItem);
    }

    // Store the updated items back in local storage
    localStorage.setItem('cart', JSON.stringify(existingItems));
    window.location.reload();
};

  return (
    <>
        <Warning />
        <Navbar />
        <div className="wrapper-product">
            <div className="conteiner">
            {productData && (
                <div className="inner-product">
                  <div className="image-product"><img src={productData.image} alt="Reload" /></div>
                  <div className="data-product">
                    <div className="name-product">
                      <span>{productData.name}</span>
                      <span className="price">$ 50 - $ 200</span>
                    </div>
                    <div className="buy-for">
                      <ButtonProduct
                        text="Gift a Friend"
                        active={activeButton["giftFriend"]}
                        onClick={() => handleButtonClick("giftFriend")}
                      />
                      <ButtonProduct
                        text="Buy for Self"
                        active={activeButton["buySelf"]}
                        onClick={() => handleButtonClick("buySelf")}
                      />
                    </div>
                    {activeButtons.Custom ? (
                      <div className="gift-cost">
                        <span>Gift Cost</span>
                        <div className="custom-cost">
                            <div className="increment button" onClick={() =>setCost(cost + 1) }>
                                <img src={Plus} alt="Reload" />
                            </div>
                            <div className="cost"><span>${cost}</span></div>
                            <div className="decrease button" onClick={()=> setCost(cost -1)}>
                                <img src={Minus} alt="Reload" />
                            </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="buttons-cost">
                      <ButtonProduct
                        text="Custom"
                        active={activeButtons["Custom"]}
                        onClick={() => handleButtonClick1("Custom")}
                      />
                      <ButtonProduct
                        text="$50"
                        active={activeButtons["$50"]}
                        onClick={() => handleButtonClick1("$50")}
                      />
                      <ButtonProduct
                        text="$100"
                        active={activeButtons["$100"]}
                        onClick={() => handleButtonClick1("$100")}
                      />
                      <ButtonProduct
                        text="$200"
                        active={activeButtons["$200"]}
                        onClick={() => handleButtonClick1("$200")}
                      />
                    </div>
                    <div className="quantify">
                        <span>Quantity</span>
                        <div className="buttons-quan">
                          <TextField
                            id="outlined-number"
                            value={quantify}
                            onChange={(e) => setQuantify(e.target.value)}
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <ButtonProduct
                            text="Continue"
                            active={true}
                            onClick={() => addToCart()}
                          />
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="about-product">
                <div className="conteiner">
                  <div className="inner-about">
                    <div className="image-about">
                        <img src={PlayStationAbout} alt="Reload" />
                    </div>
                    <div className="text-about">
                        <div className="big-text"><h3>
                        Gift Card</h3></div>
                        <div className="main-text">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima eius excepturi dicta? Suscipit eum assumenda perspiciatis quos distinctio? Totam ducimus quaerat nihil, doloremque animi laboriosam iure sit architecto deleniti.</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="conteiner">
              <Slider />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Product;
