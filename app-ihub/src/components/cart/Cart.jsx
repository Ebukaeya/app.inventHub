import "../../styles/cart.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { ImCheckboxChecked } from "react-icons/im";
import { useState, useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCartTotal } from "../../slices/cartSlice";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [locatiion, setLocation] = useState();
  const [checkOut, setCheckOut] = useState({
    unitTotal: 0,
    deliveryFee: 0,
  });
  const [updateTotal, setUpdateTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const profile = useSelector((state) => state.profile.profile);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(cartItems, profile, cartTotal);


  /* reduce the prrice on moubt and set the state */

  useEffect(() => {
    let subtotal = cartItems?.reduce(
      (acc, curr) => {
        return {
          unitTotal: acc.unitTotal + curr.totalPrice,
          deliveryFee: acc.deliveryFee + curr.product.stock.delivery_fee,
        };
      },
      {
        unitTotal: 0,
        deliveryFee: 0,
      }
    );
    console.log(subtotal);
    setCheckOut(subtotal);
  }, [cartItems, updateTotal]);

  useEffect(() => {
    /* update the total in the store */
    let cartTotal = {
      subtotal: checkOut.unitTotal,
      deliveryFee: checkOut.deliveryFee,
      total: checkOut.unitTotal + checkOut.deliveryFee,
    };
    dispatch(updateCartTotal(cartTotal));
  }, [checkOut]);

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
    body.style.overflow = "auto";
  };

  const placeOrder = () => {
    if (profile) {
      navigate("/Secure_payment");
    } else {
      navigate("/signup");
    }
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
          {cartItems.length > 0 &&
            cartItems.map((item, i) => (
              <CartItem
                key={i}
                item={item}
                index={i}
                updateTotal={setUpdateTotal}
              />
            ))}
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
            <p>Kr. {checkOut.unitTotal}</p>
          </div>
          <div>
            <p>Delivery fee :</p>
            <p>Kr. {checkOut.deliveryFee}</p>
          </div>
          <div>
            {" "}
            <p>Grand Total :</p>
            <p>Kr. {checkOut.unitTotal + checkOut.deliveryFee}</p>
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
        <div onClick={placeOrder} className="AddtocartButton">
          PLACE ORDER{" "}
        </div>
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
