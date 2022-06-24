import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="cartItemDiv">
        <div>
          <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656114183/samples/Ihub-Consumer-App/images_ostgjp.jpg" />
        </div>
        <div>
          <p>Iphone 11 Pro max</p>
          <div>
            <p className="CartItemStore">Super grocery store</p> <p>kr. 200</p>
          </div>
          <p className="deliveryfee">Delivery fee: 100</p>
          <div className="QualityButtonSP cartEdit">
            <div>
              <div
                onClick={() => quantity >= 2 && setQuantity(quantity - 1)}
                className="minusPlus"
              >
                <BiMinus />
              </div>
              <div>{quantity}</div>
              <div
                onClick={() => quantity <= 100 && setQuantity(quantity + 1)}
                className="minusPlus"
              >
                <BsPlus />
              </div>
            </div>
            <div className="DeleteItmFrmCart">
              <AiOutlineDelete />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
