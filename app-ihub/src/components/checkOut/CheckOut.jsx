import "../../styles/checkOut/checkOut.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Template from "../Template";
import { BsTruck } from "react-icons/bs";
import { ImRadioChecked2 } from "react-icons/im";
import { BsFillPenFill } from "react-icons/bs";
import { BsCreditCard2BackFill, BsDash, BsPaypal, BsCurrencyBitcoin } from "react-icons/bs";
import PaymentTab from "../payment/PaymentTab";
import Cardpayment from "../payment/CardPayment";
import { AiFillDelete } from "react-icons/ai";
import SwitchButton from "../payment/SwitchButton";

const EachItemToPurchase = () => {
  return (
    <>
      <div className='eachOrderItem83'>
        <div>
          <span>x3</span>
          <span>Apple watch nitendo</span>
        </div>
        <div>
          <span>$6473.99</span>
          <span>
            <AiFillDelete />
          </span>
        </div>
      </div>
    </>
  );
};

const CheckOutPage = () => {
  return (
    <>
      <Template>
        <div className='CartMainWrapper2'>
          <div className='CartContainer836'>
            <div>
              <div className='backToCart33'>
                {" "}
                <AiOutlineArrowLeft /> <h4> Back</h4>
              </div>
              <div className='verticalScrollingDivRemix'>
                <div className='DeliveryType33 selectDeliveryType33  '>
                  <ImRadioChecked2 />
                  <BsTruck />
                  <p>Item is delivered in 4 buisnes days</p>
                </div>
                <div className='DeliveryType33 '>
                  <ImRadioChecked2 />
                  <BsTruck />
                  <p>Pick item up from store</p>
                </div>
                <div className='shippingaddressEnter1'>
                  <p className='labelTI12'>Shipping address</p>
                  <div>
                    <input type='text' placeholder='Enter your address' />
                    <BsFillPenFill color='gray' />
                  </div>
                </div>
                <h4> Payment information</h4>
                <PaymentTab />
                <Cardpayment />
              </div>
            </div>

            <div>
              <h5 style={{ marginBottom: "16px" }}>Order summary</h5>
              <EachItemToPurchase />
              <EachItemToPurchase />
              <hr />
              <div className='tokenAV'>
                {" "}
                <p> Use your accumulated voucher</p>
                <SwitchButton />
              </div>
              <p className='discountApplied11'>20% discount applied</p>
              <div className='SubTotalDv84'>
                <p>Subtotal</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Discount</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Delivery Fee</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Tax</p>
                <p>excluded</p>
              </div>
              <div className='SubTotalDv84 total34'>
                <p>Total</p>
                <p>$4000.00</p>
              </div>
              <div className='checkOutButtonDiv'>
                <button>Confirm payment</button>
                <button>Continue shopping</button>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default CheckOutPage;
