import Template from "../Template";
import EachCartItem from "./EachCartItem";
import { BsTruck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CartMain = () => {

      const navigate = useNavigate();     
  return (
    <>
      <Template>
        <div className='CartMainWrapper2'>
          <div className='CartContainer836'>
            <div>
              <h4 style={{ marginBottom: "16px" }}>Cart</h4>
              <div className='verticalScrollingDivRemix'>
                <EachCartItem />
                <EachCartItem />
                <EachCartItem />
                <EachCartItem />
                <EachCartItem />
                <EachCartItem />
              
                
               
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
                <button onClick={()=>navigate("check-out")}>Proceed to checkout</button>
                <button>Continue shopping</button>
              </div>
            </div>
         
          </div>
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