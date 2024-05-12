import React, { useState } from 'react'

function InputFilter() {
    const [value, setValue] = useState();
  return (
    <>
     <div className="search_">
          <div className="input_wrapper">
          <input type="text" value={value} placeholder='Search' className='input_search' onChange={(e) => setValue(e.target.value)}/>
            <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_16_2026)">
              <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2"/>
              <path d="M20 20L17 17" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_16_2026">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
          </div>
         

        </div>
    </>
  )
}

export default InputFilter