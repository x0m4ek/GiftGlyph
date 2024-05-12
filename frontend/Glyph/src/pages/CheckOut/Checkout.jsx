import FrameComponent2 from "../../generatedComponents/FrameComponent";
import FrameComponent1 from "../../generatedComponents/FrameComponent1";
import FrameComponent from "../../generatedComponents/FrameComponent";
import "./Checkout.scss";
import Details from "../../components/checkoutdetails/Details";
import Navbar from "../../components/navbar/Navbar";
import Warning from "../../components/warning/Warning";
import Footer from "../../components/footer/Footer";

const Checkout = () => {
  return (
    <>
    <Warning />
    <Navbar />

   
    <div className="tom">
      <div className="conteiner">
        <div className="title">
          <h3>
          Checkout
          </h3>
        </div>
        <div className="text-">
          <span>View or edit your cart before checkout</span>
        </div>
      </div>
  </div>
    <div className="conteiner">
    <div className="checkout-cart">

      <section className="logo-company-for-business-wrapper">
        <form className="logo-company-for-business">
          <FrameComponent1 />
          <FrameComponent />
          {/* <Details /> */}
        </form>
      </section>

    </div>
    </div>
    <Footer />
    </>
  );
};

export default Checkout;
