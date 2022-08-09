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
    email: profile.email,
    amount,
    metadata: {
      name: profile.name,
      phone,
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
      <div className="CarpaymentDiv">
        <p className="paymentTitleMute">Phone Number</p>
        <input
          placeholder=" +234 7066914342"
          className="cardNumberInput"
          value={phone}
          type={"number"}
          onChange={(e) => setPhone(e.target.value)}
        />

        <PaystackButton className="paystack-button" {...componentProps} />

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

        <button
          style={{
            backgroundColor: phone ? "" : "rgb(206, 205, 205)",
          }}
          disabled={phone ? false : true}
          onClick={() => makePayment()}
          className="cartOverView"
        >
          Pay now <b>{`Kr ${cartTotal.total}`}</b>{" "}
          <BounceLoader color="#1CCCE9" size={18} loading={loading} />
        </button>
        <div className="cancelPayment">Cancel</div>
      </div>
    </>
  );
};

export default Cardpayment;
