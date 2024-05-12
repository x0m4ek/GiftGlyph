import React from 'react';
import "./ButtonProduct.scss"

function ButtonProduct({text, active,onClick}) {

  return (
    <>
        <div className={`wrapper_btn_product ${active ? "active" : ""}`} onClick={onClick}>
            <span>{text}</span>
        </div>
    </>
  )
}

export default ButtonProduct