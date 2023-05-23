import { RiMapPin2Fill } from "react-icons/ri";
import { BsCreditCard2BackFill, BsDash, BsArrowRight } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../slices/profileSlice";
/* import { updateProfileAddress } from "../../api/StoreAPI"; */
import { updateProfileAddressUrl } from "../../api/consumerApi";

const DeliveryAddress = ({ proceed,redirectPath }) => {
  const [address, setAddress] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [resizeButton, setResizeButton] = useState(false);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const profile = useSelector((state) => state.profile.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(redirectPath);

  /* let classname = resizeButton ? "decraseCartOverView" : "";
  window.addEventListener("resize", (e) => {
    if (window.innerHeight < 500) {
      setResizeButton(true);
    } else {
      setResizeButton(false);
    }
  }); */

  const handleSubmit = () => {
     let address_ = {
      streetAddress: address,
      postCode,
      city,
      country,
    }
    dispatch(updateProfile(address_)); 
     updateProfileAddress(profile._id, address_); 
    /*   navigate("/Secure_payment"); */

    
  };

  const updateProfileAddress = async (id, address) => {

    try {
      let response = await fetch(updateProfileAddressUrl + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({address, phoneNumber}),
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch(updateProfile({...data.deliveryAddress, phoneNumber: data.phoneNumber}));
        navigate(-2 ) 
       
      }
    } catch (error) {
      console.log(error);
   
    }
  };

 

  return (
    <>
      <div className='deliveryAddressPage2'>
        <h4 className='ShippingTitle'>Home Address</h4>
        {/*  <div className='progressBarDefault'>
            <RiMapPin2Fill />
            <BsDash color='rgb(129, 129, 129)' />
            <BsDash color='gray' />
            <BsDash color='gray' />
            <BsCreditCard2BackFill color='rgb(207, 207, 207)' />
            <BsDash color='gray' />
            <BsDash color='gray' />
            <BsDash color='gray' />
            <ImCheckboxChecked color='rgb(207, 207, 207)' />
          </div> */}

        <div className='addressFormDivWrapper'>
          <p className={"labelAdress11"}>Address</p>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onInput={(e) => setAddress(e.target.value)}
            className='FilledInput'
            type={"text"}
          />
          <div className='cityAndZipCodeDIv'>
            <div>
              <p className={"labelAdress11"}>City</p>
              <input className='FilledInput' type={"text"} value={city} onChange={(e) => setCity(e.target.value)} onInput={(e) => setCity(e.target.value)} />
            </div>
            <div>
              <p className={"labelAdress11"}>Postal code</p>
              <input
                className='FilledInput'
                type={"number"}
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                onInput={(e) => setPostCode(e.target.value)}
              />
            </div>
          </div>
          <p className={"labelAdress11"}>Country</p>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onInput={(e) => setCountry(e.target.value)}
            className='FilledInput'
            type={"text"}
          />
          <p className={"labelAdress11"}>Phone number</p>
          <input
            className='FilledInput'
            type={"tel"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onInput={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

    <div className="signupBtnMainDiv33">
   <button onClick={()=>handleSubmit()}>
    Sign up
   </button>
 
    </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
