import { RiMapPin2Fill } from "react-icons/ri";
import { BsCreditCard2BackFill, BsDash } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { useState, useEffect } from "react";

const PaymentPage = () => {
  return (
    <>
      <div className="mycontainer">
        <p className="ShippingTitle">Payment</p>
        <div className="progressBarDefault">
          <RiMapPin2Fill  />
          <BsDash  />
          <BsDash  />
          <BsDash  />
          <BsCreditCard2BackFill  />
          <BsDash color="gray" />
          <BsDash color="gray" />
          <BsDash color="gray" />
          <ImCheckboxChecked color="rgb(207, 207, 207)" />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
