import { RiMapPin2Fill } from "react-icons/ri";
import { BsCreditCard2BackFill, BsDash, BsArrowRight } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const [address, setAddress] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [resizeButton, setResizeButton] = useState(false);

  const navigate = useNavigate();

  let classname = resizeButton ? "decraseCartOverView" : "";
  window.addEventListener("resize", (e) => {
    if (window.innerHeight < 500) {
      setResizeButton(true);
    } else {
      setResizeButton(false);
    }
  });

  return (
    <>
      <div className="deliveryAddressPage2">
        <div className="mycontainer">
          <p className="ShippingTitle">Home Address</p>
          <div className="progressBarDefault">
            <RiMapPin2Fill />
            <BsDash color="rgb(129, 129, 129)" />
            <BsDash color="gray" />
            <BsDash color="gray" />
            <BsCreditCard2BackFill color="rgb(207, 207, 207)" />
            <BsDash color="gray" />
            <BsDash color="gray" />
            <BsDash color="gray" />
            <ImCheckboxChecked color="rgb(207, 207, 207)" />
          </div>

          <div className="addressFormDivWrapper">
            <p>Address</p>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="FilledInput"
              type={"text"}
            />
            <div className="cityAndZipCodeDIv">
              <div>
                <p>City</p>
                <input
                  className="FilledInput"
                  type={"text"}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <p>Postal code</p>
                <input
                  className="FilledInput"
                  type={"number"}
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </div>
            </div>
            <p>Country</p>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="FilledInput"
              type={"text"}
            />
            <p>Phone number</p>
            <input
              className="FilledInput"
              type={"tel"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {address && city && postCode && country && phoneNumber && (
            <div className="cartOverView1">
              <div
                className={`carOverViewMainButton ${classname}`}
                onClick={() => navigate("/Secure_payment")}
              >
                {resizeButton ? <BsArrowRight /> : `Check out Kr ${3000}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
