import { Button } from "@mui/material";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="checkout-details-parent">
      <div className="checkout-details">
        <div className="header-wrapper">
          <div className="header1">
            <h3 className="checkout-details1">Checkout Details</h3>
          </div>
        </div>
        <div className="checkout-details-inner">
          <div className="cart-subtotal-parent">
            <div className="cart-subtotal">Cart Subtotal</div>
            <div className="div">$360.00</div>
          </div>
        </div>
        <div className="checkout-details-child">
          <div className="frame-parent1">
            <div className="shipping-handling-parent">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <div className="other-taxes">Other Taxes</div>
            </div>
            <div className="container">
              <div className="div1">$0.00</div>
              <div className="div2">$0.00</div>
            </div>
          </div>
        </div>
        <div className="checkout-details-inner1">
          <div className="frame-child1" />
        </div>
        <div className="checkout-details-inner2">
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div3">$360.00</div>
          </div>
        </div>
      </div>
      <div className="transfer-options">
        <div className="header2">
          <h3 className="transfer-options1">Transfer Options</h3>
        </div>
        <div className="checkout-details2">
          <div className="logos-block">
            <div className="block-13">
              <button className="logo-block">
                <img className="image-1-icon" alt="" src="/image-1@2x.png" />
              </button>
              <div className="bank-transfer">
                <p className="bank">Bank</p>
                <p className="transfer">Transfer</p>
              </div>
            </div>
            <div className="block-25">
              <button className="logo-block1">
                <img className="image-2-icon" alt="" src="/image-2@2x.png" />
              </button>
              <div className="google-pay">
                <p className="google">Google</p>
                <p className="pay">Pay</p>
              </div>
            </div>
            <div className="block-3">
              <button className="logo-block2">
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              </button>
              <div className="apple-pay">
                <p className="apple">Apple</p>
                <p className="pay1">Pay</p>
              </div>
            </div>
            <div className="block-4">
              <button className="logo-block3">
                <img className="image-4-icon" alt="" src="/image-4@2x.png" />
              </button>
              <div className="paypal">PayPal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout2">
        <div className="header3">
          <b className="checkout3">Checkout</b>
        </div>
        <div className="checkout-details3">
          <div className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </div>
          <Button
            className="button2"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              // background: "#c0c69c",
              borderRadius: "4px",
              // "&:hover": { background: "#c0c69c" },
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
