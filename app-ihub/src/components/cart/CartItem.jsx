import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
  updateCart,
} from "../../slices/cartSlice";

const CartItem = ({ item, index, updateTotal }) => {
  console.log(index);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(item?.quantity);
    setTotalPrice(item?.totalPrice);
  }, []);

  useEffect(() => {
    setTotalPrice(item?.unitPrice * quantity);
    updateTotal(Math.random() * 100);
  }, [quantity]);

  /*     dispatch(updateCart({index, unitTotal: totalPrice, quantity})) */
  return (
    <>
      <div className="cartItemDiv">
        <div>
          <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656114183/samples/Ihub-Consumer-App/images_ostgjp.jpg" />
        </div>
        <div>
          <p>Iphone 11 Pro max</p>
          <div>
            <p className="CartItemStore">Super grocery store</p>{" "}
            <p>kr. {totalPrice}</p>
          </div>
          <p className="deliveryfee">Delivery fee: 100</p>
          <div className="QualityButtonSP cartEdit">
            <div>
              <div
                onClick={() => {
                  if (quantity >= 2) {
                    setQuantity(quantity - 1);
                    let updatedProduct = {
                      product: item.product,
                      quantity: quantity - 1,
                      unitPrice: item.unitPrice,
                      totalPrice: item.unitPrice * (quantity - 1),
                    };

                    console.log(item);
                    dispatch(updateCart({ index, item: updatedProduct }));

                    console.log(totalPrice);
                  }
                }}
                className="minusPlus"
              >
                <BiMinus />
              </div>
              <div>{quantity}</div>
              <div
                onClick={() => {
                  if (quantity <= 99) {
                    setQuantity(quantity + 1);
                    let updatedProduct = {
                      product: item.product,
                      quantity: quantity + 1,
                      unitPrice: item.unitPrice,
                      totalPrice: item.unitPrice * (quantity + 1),
                    };

                    console.log(item);
                    dispatch(updateCart({ index, item: updatedProduct }));

                    console.log(totalPrice);
                  }
                }}
                className="minusPlus"
              >
                <BsPlus />
              </div>
            </div>
            <div className="DeleteItmFrmCart">
              <AiOutlineDelete
                onClick={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
