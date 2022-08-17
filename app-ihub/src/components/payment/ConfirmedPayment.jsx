import { RiMapPin2Fill } from "react-icons/ri";
import {
  BsCreditCard2BackFill,
  BsDash,
  BsFillBagCheckFill,
} from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { Link } from "react-router-dom";
import { clearCart } from "../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signUpUrl, updateCartUrl } from "../../api/consumerApi";


const ConfirmedPayment = () => {
   const dispatch = useDispatch();
   const userID = useSelector((state)=> state.profile.profile._id)
   useEffect(()=>{
    console.log(userID);
      dispatch(clearCart());
      updateUserCart(userID)
   },[])

   const updateUserCart = async (id) => {
    try {
      let response = await fetch(updateCartUrl + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      if (response.ok) {
        console.log("cart updated");
        const data = await response.json();
        console.log("data :", data);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="mycontainer">
        <p className="ShippingTitle">Confirmation</p>
        <div className="progressBarDefault">
          <RiMapPin2Fill />
          <BsDash />
          <BsDash />
          <BsDash />
          <BsCreditCard2BackFill />
          <BsDash />
          <BsDash />
          <BsDash />
          <ImCheckboxChecked />
        </div>

        <div className="confirmationSchemDIv">
          <BsFillBagCheckFill size={60} color={"#69ad60"} />
          <p>Hey Eya,</p>
          <p>Thank you for your order</p>
        </div>
        <div className="hrLineSignUP"></div>
        <div className="subTotal">
          <div style={{ margin: "10px" }}>
            <p>Subtotal :</p>
            <p>Kr. 400</p>
          </div>
          <div style={{ margin: "10px" }}>
            <p>Delivery fee :</p>
            <p>Kr. 222</p>
          </div>
          <div style={{ margin: "10px" }}>
            <p>exc. VAT:</p>
          </div>
          <div style={{ margin: "10px" }}>
            {" "}
            <p>Grand Total :</p>
            <p>Kr. 676</p>
          </div>
        </div>

        <Link className="linkreset" to={"/myorder"}>
          <div className="OrderdetailsDiv">
            <button>View Order Details</button>
          </div>
        </Link>
        <Link className="linkreset" to={"/"}>
          <div style={{ marginTop: "-1px" }} className="OrderdetailsDiv ">
            <button className="contshopn">Continue Shopping</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ConfirmedPayment;
