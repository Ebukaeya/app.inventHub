import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../../slices/cartSlice";

const CartItem = ({ item, index, updateTotal }) => {
  console.log(item);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  useEffect(() => {
    setQuantity(item?.quantity);
    setTotalPrice(item?.totalPrice);
  }, []);

  useEffect(() => {
    setTotalPrice(item?.unitPrice * quantity);
    updateTotal(Math.random() * 100);
  }, [quantity, cartTotal]);

  /*     dispatch(updateCart({index, unitTotal: totalPrice, quantity})) */
  return (
    <>
      <div className="cartItemDiv">
        <div>
          <img src={item.product.stock.product_image[0]?.upload}/>
        </div>
        <div>
          <p>{item.product.product_name}</p>
          <div>
            <p className="CartItemStore">{item.product.store.name}</p>{" "}
            <p>kr. {totalPrice}</p>
          </div>
          <p className="deliveryfee">Delivery fee: <b>kr {item.product.stock.delivery_fee}</b> </p>
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
                  updateTotal(Math.random() * 100);
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
