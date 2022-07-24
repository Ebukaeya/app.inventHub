import "../../styles/paymentPage.css";
import { RiMapPin2Fill } from "react-icons/ri";
import {
  BsCreditCard2BackFill,
  BsDash,
  BsPaypal,
  BsCurrencyBitcoin,
} from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { useState, useEffect,  } from "react";
import Cardpayment from "./CardPayment";
import { useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import BounceLoader from "react-spinners/ClipLoader";

const PaymentPage = () => {
  const navigate = useNavigate();

  const navigation = (e) => {
    let paymentNode = Array.from(
      document.querySelector(".paymentMethodDiv").children
    );
    paymentNode.forEach((element) => {
      element.classList.remove("activepayment");
    });
    e.target.classList.add("activepayment");
  };


  const makePayment = ()=>{
    navigate("/Secure_payment/confirmation");
  }

  return (
    <>
      <div className="mycontainer">
        <p className="ShippingTitle">Payment</p>
        <div className="progressBarDefault">
          <RiMapPin2Fill />
          <BsDash />
          <BsDash />
          <BsDash />
          <BsCreditCard2BackFill />
          <BsDash color="gray" />
          <BsDash color="gray" />
          <BsDash color="gray" />
          <ImCheckboxChecked color="rgb(207, 207, 207)" />
        </div>

        <p className="paymentTitleMute">Payment Method</p>
        <div className="paymentMethodDiv">
          <div style={{ FontStyle: "italic" }} onClick={(e) => navigation(e)}>
            <BsPaypal /> PayPal
          </div>
          <div className="activepayment" onClick={(e) => navigation(e)}>
            {" "}
            <BsCreditCard2BackFill /> Card
          </div>
          <div onClick={(e) => navigation(e)}>
            <BsCurrencyBitcoin /> Bitcoin
          </div>
        </div>
        <Cardpayment />
        <div className="tokenAV">
          {" "}
          <p> Use your accumulated voucher</p>
          <SwitchButton />
        </div>
    
        <div
          onClick={() =>makePayment()}
          className="cartOverView"
        >
          Pay now {`Kr ${3000}`} <BounceLoader  color="#1CCCE9"  size={18}  loading={true}/>
        </div>
      <div className="cancelPayment">
        Cancel
      </div>
      </div>
    </>
  );
};

export default PaymentPage;
