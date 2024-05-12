import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./GroupedButtons.scss";
import add from "../../images/add.png";

const GroupedButtons = ({onCnahge, quantify}) => {
  const [counter, setCounter] = useState(quantify);


  const handleIncrement = () => {
    setCounter(counter + 1);
    onCnahge(counter + 1)
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
    onCnahge(counter - 1)
  };

  const displayCounter = counter > 0;



  return (
    <ButtonGroup size="small" variant="text" aria-label="small outlined button group" sx={{
        border:"1px solid #000"
    }}>
      <Button onClick={handleIncrement} sx={{
        borderRight: "none !important",
        padding: `${displayCounter ? "12px 28px 12px 8px" : "12px"}`
      }}>
        <img src={add} alt="Reload"  style={{
            width:16
        }}/>
      </Button>
      {displayCounter && (
        <>
          <Button sx={{
            color: "#000",
            fontSize:14,
            fontWeight:400,
            padding: "12px 8px"
          }}>{counter}</Button>
          <Button onClick={handleDecrement} sx={{
      padding: "12px 8px 12px 28px"
      }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6665 8.66683H3.33317C3.15636 8.66683 2.98679 8.59659 2.86177 8.47157C2.73674 8.34654 2.6665 8.17697 2.6665 8.00016C2.6665 7.82335 2.73674 7.65378 2.86177 7.52876C2.98679 7.40373 3.15636 7.3335 3.33317 7.3335H12.6665C12.8433 7.3335 13.0129 7.40373 13.1379 7.52876C13.2629 7.65378 13.3332 7.82335 13.3332 8.00016C13.3332 8.17697 13.2629 8.34654 13.1379 8.47157C13.0129 8.59659 12.8433 8.66683 12.6665 8.66683Z" fill="#222930"/>
      </svg>
      </Button>
        </>
      )}
    </ButtonGroup>
  );
};

export default GroupedButtons;
