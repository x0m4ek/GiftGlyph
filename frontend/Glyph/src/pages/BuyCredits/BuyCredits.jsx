import React from 'react';
import "./BuyCredits.scss";
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Credit from '../../components/credit/Credit';

function BuyCredits() {
  return (
    <>
    <Warning />
    <Navbar />

    <div className="tom-big">
        <div className="conteiner">

            <div className="big-text">
                <h3>
                Browse Our Credit packages
                </h3>
            </div>
            
            
        </div>
    </div>
    <div className="wrapper_credits">
        <div className="conteiner">


        <div className="titles">
            <div className="block-title">
            <p>
            Our Featured Services
                </p>
            </div>
            <div className="text-main">
                <p>Lorem ipsum dolor sit amet consectetur. Tristique nunc laoreet cursus amet quisque gravida elementum pulvinar. Risus tristique maecenas lorem sapien faucibus ac pellentesque. Eu adipiscing arcu fames gravida nisi. </p>
            </div>
        </div>
        <div className="credits">
            <Credit amount={10} price={10} />
            <Credit amount={20} price={20}/>
            <Credit amount={30} price={20}/>
            <Credit amount={40} price={20}/>
            <Credit amount={50} price={20}/>
            <Credit amount={60} price={20}/>
            <Credit amount={70} price={20}/>
            <Credit amount={100} price={20}/>
        </div>
        </div>
   
    </div>
   
    <Footer />
    </>
  )
}

export default BuyCredits