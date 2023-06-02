import "../../styles/checkOut/checkOut.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Template from "../Template";
import { BsTruck } from "react-icons/bs";
import { ImRadioChecked2 } from "react-icons/im";
import { BsFillPenFill } from "react-icons/bs";
import { BsCreditCard2BackFill, BsDash, BsPaypal, BsCurrencyBitcoin } from "react-icons/bs";
import PaymentTab from "../payment/PaymentTab";
import Cardpayment from "../payment/CardPayment";
import { AiFillDelete } from "react-icons/ai";
import SwitchButton from "../payment/SwitchButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/cart.css";
import { makePurchaseFromCheckOutUrl } from "../../api/StoreAPI";

const EachItemToPurchase = ({ product }) => {
  return (
    <>
      <div className='eachOrderItem83'>
        <div>
          <span> x {product.purchasedQuantity}</span>
          <span>{product.name}</span>
        </div>
        <div>
          <span>$ {product.purchasedQuantity * product.unitPrice}</span>
          <span>
            <AiFillDelete />
          </span>
        </div>
      </div>
    </>
  );
};

const CheckOutPage = ({socket}) => {
  /* on page mount, the location object must contain state.products which is an array */

  const [purchasedItems, setPurchasedItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [pickUpInStore, setPickUpInStore] = useState(false);
  const [totalbreakDown, setTotalbreakDown] = useState();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const location = useLocation();
  const {profile} = useSelector(state => state.profile)

  useLayoutEffect(() => {
    const { state } = location;
    if (state) {
      setPurchasedItems(state.products);

      const subTotal = state.products.reduce(
        (acc, product) => {
          return { subtotal: acc.subtotal + (product.purchasedQuantity * product.unitPrice), deliveryFee: acc.deliveryFee + product.deliveryFee };
        },
        { subtotal: 0, deliveryFee: 0 }
      );
      setTotalbreakDown({ ...subTotal });
    }
   
  }, []);


  const registerPayment = async () => {
    let payload = {
      paymentID: "123456789", /* from third party payment*/
      purchasedItems,
      shippingAddress,
      paymentMethod,
      pickUpInStore,
      totalbreakDown,
      profile,
      totalPaid: totalbreakDown.subtotal + totalbreakDown.deliveryFee,
    };

    try {
      let response = await fetch(makePurchaseFromCheckOutUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
     
      if(response.ok){
        let {_,payload}= await response.json()
        
       let {purchasedItems,...rest} = payload
        setShowConfirmation(true) /* to display success page with details */
        console.log(purchasedItems);
        let notifyedStores=[]
        purchasedItems.forEach(item=>{
          if(!notifyedStores.includes(item.storeID)){
            console.log(socket);
             socket.emit('newOrderReceived',{room:item.storeID}) 
            notifyedStores.push(item.storeID)
          }
        })

      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <Template>
        <div className='CartMainWrapper2'>
          <div className='CartContainer836'>
            <div>
              <div onClick={() => window.history.back()} className='backToCart33'>
                {" "}
                <AiOutlineArrowLeft /> <h4> Back</h4>
              </div>
              <div className='verticalScrollingDivRemix'>
                <div className='DeliveryType33 selectDeliveryType33  '>
                  <ImRadioChecked2 />
                  <BsTruck />
                  <p>Item is delivered in 4 buisnes days</p>
                </div>
                <div className='DeliveryType33 '>
                  <ImRadioChecked2 />
                  <BsTruck />
                  <p>Pick item up from store</p>
                </div>
                <div className='shippingaddressEnter1'>
                  <p className='labelTI12'>Shipping address</p>
                  <div>
                    <input value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} type='text' placeholder='Enter your address' />
                    <BsFillPenFill color='gray' />
                  </div>
                </div>
                <h4> Payment information</h4>
                <PaymentTab updatePaymentMethod={setPaymentMethod} />
                {paymentMethod === "paystack" ? (
                  <Cardpayment />
                ) : paymentMethod === "paypal" ? (
                  <div className='paypalPayment'>paypal </div>
                ) : (
                  <div className='bitcoinPayment'>bitcoin</div>
                )}
              </div>
            </div>

            <div>
              <h5 style={{ marginBottom: "16px" }}>Order summary</h5>
              <div>
                {purchasedItems.map((product) => (
                  <EachItemToPurchase key={product._id} product={product} />
                ))}
              </div>
              <hr />
              <div className='tokenAV'>
                {" "}
                <p> Use your accumulated voucher</p>
                <SwitchButton />
              </div>
              <p className='discountApplied11'>20% discount applied</p>
              <div className='SubTotalDv84'>
                <p>Subtotal</p>
                <p>$ {totalbreakDown?.subtotal}</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Discount</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Delivery Fee</p>
                <p>$ {totalbreakDown?.deliveryFee}</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Tax</p>
                <p>excluded</p>
              </div>
              <div className='SubTotalDv84 total34'>
                <p>Total</p>
                <p>$ {totalbreakDown?.deliveryFee+totalbreakDown?.subtotal}</p>
              </div>
              <div className='checkOutButtonDiv'>
                <button onClick={registerPayment}>Confirm payment</button>
                <button onClick={() => navigate("/products")}>Continue shopping</button>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default CheckOutPage;
