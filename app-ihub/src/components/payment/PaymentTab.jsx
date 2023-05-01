import { BsCreditCard2BackFill, BsDash, BsPaypal, BsCurrencyBitcoin } from "react-icons/bs";

const PaymentTab = () => {
  const navigation = (e) => {
    let paymentNode = Array.from(document.querySelector(".paymentMethodDiv").children);
    paymentNode.forEach((element) => {
      element.classList.remove("activepayment");
    });
    e.target.classList.add("activepayment");
  };

  return (
    <>
      <div className='paymentMethodDiv'>
        <div style={{ FontStyle: "italic" }} onClick={(e) => navigation(e)}>
          <BsPaypal /> PayPal
        </div>
        <div className='activepayment' onClick={(e) => navigation(e)}>
          {" "}
          <BsCreditCard2BackFill /> Paystack
        </div>
        <div onClick={(e) => navigation(e)}>
          <BsCurrencyBitcoin /> Bitcoin
        </div>
      </div>
    </>
  );
};

export default PaymentTab;
