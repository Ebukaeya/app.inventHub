import "../../styles/storeProducts.css";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { BsStarHalf, BsFillCartFill, BsPlus } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { useState } from "react";

const StoreProduct = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <div className="storeProductWrapper">
          <div>
            <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655939583/samples/Ihub-Consumer-App/images_o9oqbm.jpg" />
          </div>
          <div>
            <div className="nameAndPrice">
              <div>
                <p>Tata Salt in</p>
                <p>
                  Size{" "}
                  <b style={{ fontWeight: "800", marginLeft: "10px" }}>NA</b>
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px" }}>Kr. 400</p>
                <p>Kr. 330</p>
              </div>
            </div>
            <div className="QualityButtonSP">
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
              <div className="addToCartSp">
                <BsFillCartFill size={16} />
                <span>Add to cart</span>
              </div>
            </div>
          </div>
        </div>
        <div className="discoutIcon">
          <FaPercent />
        </div>
      </div>
    </>
  );
};

export default StoreProduct;
