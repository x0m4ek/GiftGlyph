import React, { useEffect, useState } from 'react';
import GroupedButtons from '../quantifyIncreser/GroupedButtons';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/config';
function TableBody({image, name,  count, priceProduct,updateTotalPrice}) {

    const [value, setValue] = useState();
    const [quantify, setQuantify] = useState(count);
    const [price, setPrice] = useState(priceProduct * count);
    const [prevPrice, setPrevPrice] = useState(priceProduct * count);
    const isMobile = useMediaQuery({ query: '(max-width: 1300px)' });
    useEffect(() => {
      
      const newPrice = priceProduct * quantify;
      setPrice(newPrice);
      const priceChange = newPrice - prevPrice;
      updateTotalPrice(priceChange);
      setPrevPrice(newPrice);
    }, [quantify, priceProduct, prevPrice, updateTotalPrice]);
    useEffect(()=> {
     
      updateTotalPrice(price)
    },[])

    if(quantify >= 1) {
      return (
        <tr className='product-body'>
                <td colSpan={1.5} className='data_col'>
                  <div className="data">
                    <img src={image} alt="Reload" />
                    <p>{name}</p>
                  </div>
                </td>
                <td className='price_col'><div className="price">
                  <p>${priceProduct}</p>
                    <p className='credits'>{priceProduct / 10} Credits</p>
                  </div></td>
                <td className='quantify_col'><div className="quantify">
                    <GroupedButtons onCnahge={(value) => setQuantify(value)} quantify={quantify} />
                    <FormControl
                   className="instance-installer"
                      variant="standard"
                     
                      
                    >
                      <InputLabel  />
                      <Select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disableUnderline
                        displayEmpty
                        defaultValue={"hourly"}
                        sx={{
                            background: `${colors.primary}`,
                            padding:"8px 16px",
                            borderRadius:"8px",
                            color:"#fff",
                            fontSize:"16px",
                            fontWeight:"400"
                        }}
                      >
                        <MenuItem value={"hourly"}>Hourly</MenuItem>
                        <MenuItem value={"monthly"}>Monthly</MenuItem>
                      </Select>
                      
                    </FormControl>
                  </div></td>
                <td className='total_col'>{isMobile ? <>
                  <p>${price}</p>
                  <div className="quantify">
                    <GroupedButtons onCnahge={(value) => setQuantify(value)} quantify={quantify} />
                    <FormControl
                   className="instance-installer"
                      variant="standard"
                     
                      
                    >
                      <InputLabel  />
                      <Select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disableUnderline
                        displayEmpty
                        defaultValue={"hourly"}
                        sx={{
                            background: `${colors.primary}`,
                            padding:"8px 16px",
                            borderRadius:"8px",
                            color:"#fff",
                            fontSize:"16px",
                            fontWeight:"400"
                        }}
                      >
                        <MenuItem value={"hourly"}>Hourly</MenuItem>
                        <MenuItem value={"monthly"}>Monthly</MenuItem>
                      </Select>
                      
                    </FormControl>
                  </div>

                </> : <p>${price}</p>}</td>
              </tr>
      )
    }
    else 
    {
      return null
    }
 
}

export default TableBody