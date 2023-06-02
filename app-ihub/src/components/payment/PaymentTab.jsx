import { BsCreditCard2BackFill, BsDash, BsPaypal, BsCurrencyBitcoin } from "react-icons/bs";
import { useState, useLayoutEffect } from "react";
import "../../styles/paymentPage.css"

const PaymentTab = ({updatePaymentMethod}) => {
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  useLayoutEffect(() => {
    updatePaymentMethod(paymentMethod);
  }, [paymentMethod]);


  const navigation = (e,choosenPaymentMethod) => {
    setPaymentMethod(choosenPaymentMethod);
    updatePaymentMethod(choosenPaymentMethod);
  };

  return (
    <>
      <div className='paymentMethodDiv'>
        <div className={paymentMethod==="paypal"?'activepayment':""} style={{ FontStyle: "italic" }} onClick={(e) => navigation(e,"paypal")}>
          <BsPaypal /> PayPal
        </div>
        <div className={paymentMethod==="paystack"?'activepayment':""} onClick={(e) => navigation(e,"paystack")}>
          {" "}
          <BsCreditCard2BackFill /> Paystack
        </div>
        <div className={paymentMethod==="hubCoin"?'activepayment':""} onClick={(e) => navigation(e,"hubCoin")}>
          <BsCurrencyBitcoin /> Bitcoin
        </div>
      </div>
    </>
  );
};

export default PaymentTab;
