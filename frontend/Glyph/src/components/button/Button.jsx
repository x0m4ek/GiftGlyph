import React from 'react';
import "./Button.scss"

function Button({buttonText, onClick}) {
  return (
    <>
        <div className="button_wrapper" onClick={() => onClick()}>
            <span>
                {buttonText}
            </span>
        </div>
    </>
  )
}

export default Button