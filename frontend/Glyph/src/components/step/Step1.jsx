import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./Step.scss"
import StepConnector from '@mui/material/StepConnector';
import FirstStep from "../../images/firstStep.png";
import SecondStep from  "../../images/SecondStep.png";
import ThirdStep from "../../images/thirdStep.png"; 
import step12 from "../../images/step1.png";
import step13 from "../../images/step2.png"
import step14 from "../../images/step3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css/pagination';
import { Pagination, Autoplay} from 'swiper/modules';
import { colors } from '../../utils/config';
// Custom StepConnector component to render lines extending from circles
function CustomStepConnector(props) {
  return (
    <StepConnector
      {...props}
      sx={{
        '& .MuiStepConnector-line': {
          border: `2px solid ${colors.secondary}`, // Adjust line color and thickness
          borderRadius: '2px', // Make the lines rectangular
        },
      }}
    />
  );
}

const steps = [
  'Select the eGift Card',
  'Customize and Purchase',
  'Delivery to Recipient',
];
const imgs  = [
  FirstStep,SecondStep,ThirdStep
]
export default function Step1() {
  const isMobile = useMediaQuery({ query: '(max-width: 850px)' });

  if(isMobile) {
    return (
      <Swiper
      slidesPerView={1}
      spaceBetween={20}
      navigation
      enabled={true}
      onInit={(swiper) => swiper.slideToLoop(0, 0)}
      pagination={true} modules={[Pagination,Autoplay]}  
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className='steper_slider'
 
    >
      <Box sx={{ width: '100%' }} className="so_good">
        <Stepper activeStep={0} alternativeLabel connector={<CustomStepConnector />}>
       
       
    
          {steps.map((label, index) => (
             
                <div className="step">
  
  <SwiperSlide key={index} className='slide_steps'>
            <Step key={label}>
              <div className="circle-top">

          
            <div class="circle"></div>
    <div class="line"></div>  
    </div>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    color: '#C0C69C', // Text color
                    
                  },
                  
                  '& .MuiStepIcon-root': {
                    color: ` ${colors.primary}`, // Circle color
                  },
                  '& .MuiStepIcon-root.Mui-active': {
                    color: `  ${colors.primary}`, // Circle color
                  },
                }}
        
              >
              
                {label}
                
              </StepLabel>
  
                {index === 0 ? <><div className="allax"><img src={FirstStep} alt="Reload" /></div></> : ""}
                {index === 1 ? <><div className="allax"><img src={SecondStep} alt="Reload" /></div></> : ""}
                {index === 2 ? <><div className="allax"><img src={ThirdStep} alt="Reload" /></div></> : ""}
            
            </Step>
            </SwiperSlide>
            </div>
     
          ))}
        
        </Stepper>
      </Box>
      </Swiper>
    );
  }
  else {
    return (
 
      <Box sx={{ width: '100%' }} >
        <Stepper activeStep={0} alternativeLabel connector={<CustomStepConnector />}>
       
       
    
          {steps.map((label, index) => (
             
           

            <Step key={label}>
             
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    color: '#C0C69C', // Text color
                    
                  },
                  
                  '& .MuiStepIcon-root': {
                    color: `${colors.primary}`, // Circle color
                  },
                  '& .MuiStepIcon-root.Mui-active': {
                    color:`${colors.primary}`, // Circle color
                  },
                }}
        
              >
            
                {label}
                
              </StepLabel>
  
                {index === 0 ? <><div className="allax"><img src={FirstStep} alt="Reload" /></div></> : ""}
                {index === 1 ? <><div className="allax"><img src={SecondStep} alt="Reload" /></div></> : ""}
                {index === 2 ? <><div className="allax"><img src={ThirdStep} alt="Reload" /></div></> : ""}
            
            </Step>
         
      
     
          ))}
        
        </Stepper>
      </Box>
   
    );
  }
  
}
