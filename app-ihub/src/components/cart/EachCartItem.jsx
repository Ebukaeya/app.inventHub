import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect, useLayoutEffect } from "react";
import { removeFromCartUrl } from "../../api/consumerApi";
import { useDispatch } from "react-redux";
import { setProfile } from "../../slices/profileSlice";

const EachCartItem = ({ item, setCartItems, profile }) => {
  console.log(item);
  const [quantity, setQuantity] = useState(null);

  useLayoutEffect(() => {
    setQuantity(item.quantity);
  }, []);

  const dispatch = useDispatch();

  const removeItemFromCart = async () => {
    try {
      let response = await fetch(removeFromCartUrl + profile._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "authorization": "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({
          productID: item.product._id,
        }),
      });

      if (response.ok) {
        let { _, user } = await response.json();
        dispatch(setProfile(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='eachCartItem8273'>
        <div className='ImageDiveCart53'>
          <img src={item.product.productImage[0]} alt='productImage' />
        </div>
        <div className='eachcCartDetailT8'>
          <div>
            <div>
              <p className='TitleEachCartI2'>{item.product.name} </p>
              <span>{item.product.brand} </span>
              {0 > item.product.quantity && item.product.quantity < 10 ? (
                <span>low stock</span>
              ) : item.product.quantity === 0 ? (
                <span style={{ color: "red" }}>out of stock</span>
              ) : (
                <span>In stock</span>
              )}
            </div>
            <div className='flexingOption47e'>
              <div className='AddQuantityButtonCa'>
                <span
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                      setCartItems((prev) =>
                        prev.map((itemm) => {
                          if (itemm.product._id === item.product._id) {
                            return { ...itemm, quantity: quantity - 1 };
                          }
                          return itemm;
                        })
                      );
                    }
                  }}
                >
                  {" "}
                  <BiMinus size={16} />
                </span>
                <p> {quantity}</p>
                <span
                  onClick={() => {
                    if (quantity < item.product.quantity) {
                      setQuantity(quantity + 1);
                      setCartItems((prev) =>
                        prev.map((itemm) => {
                          if (itemm.product._id === item.product._id) {
                            return { ...itemm, quantity: quantity + 1 };
                          }
                          return itemm;
                        })
                      );
                    }
                  }}
                >
                  <BsPlus size={18} />
                </span>
              </div>
              {item.size && (
                <div className='AddQuantityButtonCa'>
                  <select>
                    <option value='' disabled selected hidden>
                      {item?.size}
                    </option>

                    <option>M</option>
                    <option>S</option>
                    <option>M</option>
                    <option>M</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className='priceTagTT21'># {quantity * item.product.unitPrice} </p>
            <div onClick={removeItemFromCart}>
              <AiOutlineDelete size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachCartItem;
