import "../../styles/cart.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import CartItem from "./CartItem";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [locatiion, setLocation] = useState();

  let body = document.querySelector("body");

  const closeField = (e) => {
    if (e.target.className === "filterField") {
      setIsFieldOpen(false);
      body.style.overflow = "auto";
      console.log(body.style.overflow);
    }
  };
  const openField = () => {
    setIsFieldOpen(true);
    body.style.overflow = "hidden";
  };

  const handleSubmit = () => {
    setIsFieldOpen(false);
  };
  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>My Cart</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className="cartItemWrapper">
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
        <div className="ItemdeliveryAddress">
          <div>
            <p>
              Deliver to: <span>Ebuka Eya</span>
            </p>
            <p>Nordre Telgkaj kobenhaven denmark</p>
          </div>
          <div onClick={openField}>Change</div>
        </div>
        <div className="subTotal">
          <div>
            <p>Subtotal :</p>
            <p>Kr. 4000</p>
          </div>
          <div>
            <p>Delivery fee :</p>
            <p>Kr. 40</p>
          </div>
          <div>
            {" "}
            <p>Grand Total :</p>
            <p>Kr. 4000</p>
          </div>
        </div>
        <div className="termsAndArgment">
          <ImCheckboxChecked />{" "}
          <p>
            {" "}
            You agree with the <b className="TermsandSe">
              Terms of Service
            </b>{" "}
            and <b className="TermsandSe">Privacy Policy</b>
          </p>
        </div>
        <div className="AddtocartButton">PLACE ORDER </div>
      </div>
      {isFieldOpen && (
        <div className="filterField" onClick={(e) => closeField(e)}>
          <div>
            <div className="useLocation">
              <ImLocation size={25} />
              <p className="locationtextp">Use my current location</p>
            </div>
            <div
              onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
              className="clocationWrapper"
            >
              <div style={{ paddingLeft: "-20px" }} className="customLocation">
                <BiCurrentLocation size={25} />
                <p className="locationtextp">Enter a custom location</p>
              </div>
              {isOpen && (
                <div className="searchLoFieldWrapper">
                  <input
                    value={locatiion}
                    onChange={(e) => setLocation(e.target.value)}
                    className="searchInputLo"
                    autoFocus
                    placeholder="Enter location"
                  />
                  <button onClick={handleSubmit}>Enter</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
