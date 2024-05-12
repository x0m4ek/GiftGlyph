import React from 'react';
import "./Button.scss"

function Button({buttonText}) {
  return (
    <>
        <div className="button_wrapper">
            <span>
                {buttonText}
            </span>
        </div>
    </>
  )
}

export default Button