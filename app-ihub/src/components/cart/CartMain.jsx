import Template from "../Template";
import EachCartItem from "./EachCartItem";
import { BsTruck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import "../../styles/cart.css";

const CartMain = () => {
  const [cartItems, setCartItems] = useState();
  const [totalbreakDown, setTotalbreakDown] = useState();
  const { profile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (profile) {
      setCartItems(profile.cart);
      updateSubTotal(profile.cart);
    }
  }, []);

  useEffect(() => {
    setCartItems(profile.cart);
  }, [profile]);

  useEffect(() => {
    updateSubTotal(cartItems);
    console.log(cartItems);
  }, [cartItems]);

  const updateSubTotal = (products) => {
    const subTotal = products?.reduce(
      (acc, product) => {
        return {
          subtotal: acc.subtotal + (product.quantity * product.product.unitPrice),
          deliveryFee: acc.deliveryFee + product.product.deliveryFee,
        };
      },
      { subtotal: 0, deliveryFee: 0 }
    );
    setTotalbreakDown({ ...subTotal });
  };

  const proceedToCheckOut = () => {
    let modifiedCartItems = cartItems.map((item) => {
      return { ...item.product, purchasedQuantity: item.quantity, purchasedSize: item.size, purchasedColor: item.color };
    });
    navigate("check-out", { state: { products: modifiedCartItems } });
  };

  return (
    <>
      <Template>
        <div className='CartMainWrapper2'>
          {profile ? (
            profile.cart.length > 0 ? (
              <div className='CartContainer836'>
                <div>
                  <h4 style={{ marginBottom: "16px" }}>Cart</h4>
                  <div className='verticalScrollingDivRemix'>
                    {profile && cartItems?.map((item) => <EachCartItem key={item._id} item={item} setCartItems={setCartItems} profile={profile} />)}
                  </div>
                </div>

                <div>
                  <div className='deliveryDiv34'>
                    <BsTruck color='#FFD700' size={24} />
                    <div>
                      <p className='deliveryText534'>Delivery</p>
                      <p>Delivered in 4 days at £ 20</p>
                      <p>See policy</p>
                    </div>
                  </div>
                  <div className='ApplyPromoCodeDIv'>
                    <input type='text' placeholder='Apply promo code' />
                    <button>Apply</button>
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
                    <p>${totalbreakDown?.deliveryFee}</p>
                  </div>
                  <div className='priceBreakDowncart2'>
                    <p>Tax</p>
                    <p>excluded</p>
                  </div>
                  <div className='SubTotalDv84 total34'>
                    <p>Total</p>
                    <p>$4000.00</p>
                  </div>
                  <div className='checkOutButtonDiv'>
                    <button onClick={() => proceedToCheckOut()}>Proceed to checkout</button>
                    <button onClick={() => navigate("/products")}>Continue shopping</button>
                  </div>
                </div>
              </div>
            ) : (
              <div> empty cart </div>
            )
          ) : (
            <div>you need to sign up </div>
          )}
        </div>
      </Template>
    </>
  );
};

export default CartMain;

/* 
   <div>
              <div className='deliveryDiv34'>
                <BsTruck color='#FFD700' size={24} />
                <div>
                  <p className='deliveryText534'>Delivery</p>
                  <p>Delivered in 4 days at £ 20</p>
                  <p>See policy</p>
                </div>
              </div>
              <div className='ApplyPromoCodeDIv'>
                <input type='text' placeholder='Apply promo code' />
                <button>Apply</button>
              </div>
              <p className='discountApplied11'>20% discount applied</p>
              <div className='SubTotalDv84'>
                <p>Subtotal</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Discount</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Delivery Fee</p>
                <p>$4000.00</p>
              </div>
              <div className='priceBreakDowncart2'>
                <p>Tax</p>
                <p>excluded</p>
              </div>
              <div className='SubTotalDv84 total34'>
                <p>Total</p>
                <p>$4000.00</p>
              </div>
              <div className='checkOutButtonDiv'>
                <button>Proceed to checkout</button>
                <button>Continue shopping</button>
              </div>
            </div> */
