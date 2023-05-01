import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import BounceLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const Cardpayment = () => {
  const publicKey = "pk_test_39751b40e2072f8274982910488ee267c7aa92f5";

  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const profile = useSelector((state) => state.profile.profile);
  const [loading, setLoading] = useState(false);

  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const amount = cartTotal.total * 100; // Remember, set in kobo!
  const componentProps = {
    email: "profile.email@gm.com",
    amount: 22,
    metadata: {
      name: "Enid",
      phone: "07066914342",
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => navigate("/Secure_payment/confirmation"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const makePayment = () => {
    let payMentButtonNode = document.querySelector(".paystack-button");
    payMentButtonNode.click();
  };

  return (
    <>
      <div className='CarpaymentDiv'>
        <p className='labelTI12'>Name on card</p>
        <input placeholder=' Ifeanyi Eya' className='cardNumberInput' type="text" />

        <p className='labelTI12'>Phone Number</p>
        <input type="number" placeholder=' +234 7066914342' className='cardNumberInput' />
        <PaystackButton className='paystack-button' {...componentProps} />

        {/*      <div>
          <div>
            <p className="paymentTitleMute">Expiry Date</p>
            <input placeholder="MM/YY" />
          </div>
          <div>
            <p className="paymentTitleMute">CVV/CVC</p>
            <input placeholder="123" />
          </div>
        </div> */}
     
     <div className="paymeentInfoTab">
      Tab explain payStack how to use it
     </div>
       
      </div>
    </>
  );
};

export default Cardpayment;
