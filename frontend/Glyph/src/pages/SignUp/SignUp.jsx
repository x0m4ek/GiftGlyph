import React, { useState } from 'react';
import "./SignUp.scss"
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import ButtonProduct from '../../components/buttonProduct/ButtonProduct';

function SignUp() {
    const [name,setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [password, setPassword] = useState();
  return (
    <>
    <Warning />
    <Navbar />
        <div className="tom-big">
            <div className="conteiner">
                <div className="big-text">
                    <h3>Sign Up</h3>
                </div>
            </div>
        </div>

            <div className="wrapper_register py-[30px] max-w-[900px] ml-auto mr-auto">
                <div className="conteiner">
                    <div className="wrapper-reg flex justify-center flex-col gap-[15px]">
                    <div  className="text-center  flex justify-center flex-col gap-[15px]" >
                        <h3 className='text-3xl'>Sign Up</h3>
                        <p className='text-base text-grey1'>Create an Account</p>
                    </div>
                    <FormControl className='flex gap-[15px] justify-center items-center w-[100%]'>
                    <div className="inputs flex gap-[15px] w-[100%]">
                  
                        <TextField  
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder='Your Name'
                          required
                          label="Your Name"
                          sx={{
                      
                            color: "#000",
                            fontWeight:400,
                            width:"50%", 
                    
                            '& .MuiOutlinedInput-root': {
                          
                              borderRadius:"8px", 
                              '& fieldset': {
                                borderColor: '#CACACA',
                              },
                              //hover na input
                              '&:hover fieldset': {
                                borderColor: '#CACACA', // - Set the Input border when parent has :hover
                            },
                            
                            }
                          }}
                          />
                              <TextField  
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder='Your Email'
                          required
                          label="Your Emai"
                          sx={{
                      
                            color: "#000",
                            fontWeight:400,
                            width:"50%", 
                    
                            '& .MuiOutlinedInput-root': {
                          
                              borderRadius:"8px", 
                              '& fieldset': {
                                borderColor: '#CACACA',
                              },
                              //hover na input
                              '&:hover fieldset': {
                                borderColor: '#CACACA', // - Set the Input border when parent has :hover
                            },
                            
                            }
                          }}
                          />
                 
                 
                    </div>
                 
                          <div className="inputs flex w-[100%] gap-[15px]">
                            
                  
                    <TextField  
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          placeholder='Password'
                          required
                          label="Password"
                          sx={{
                      
                            color: "#000",
                            fontWeight:400,
                            width:"50%", 
                    
                            '& .MuiOutlinedInput-root': {
                          
                              borderRadius:"8px", 
                              '& fieldset': {
                                borderColor: '#CACACA',
                              },
                              //hover na input
                              '&:hover fieldset': {
                                borderColor: '#CACACA', // - Set the Input border when parent has :hover
                            },
                            
                            }
                          }}
                          />
                             <FormControl className=' w-[50%]' >
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select label="Country" sx={{
                        width:"100%"
                    }}>
               
                        <MenuItem value="ukr">Ukraine</MenuItem>
                        <MenuItem value="usa">USA</MenuItem>
                        <MenuItem value="uk">UK</MenuItem>
                 </Select>
                 </FormControl>
                 </div>
            
                 <div className="button flex justify-center">
                    <ButtonProduct  text={"Sign Up"}/>
                 </div>
                    </FormControl>
                    </div>
             

                
                </div>
            </div>
        <Footer />
    </>
  )
}

export default SignUp