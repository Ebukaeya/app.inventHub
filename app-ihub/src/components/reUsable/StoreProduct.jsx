import "../../styles/storeProducts.css";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { BsStarHalf, BsFillCartFill, BsPlus } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const StoreProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <div className="storeProductWrapper">
        
            <div className="simaheLinked">
           <Link to={`/product/${product.id}`}>
                <img className="simaheLinkedImage"
                  src={
                    "http://ihub.toxsl.in" + product.stock.product_image[0].upload
                  }
                />
           </Link>
            </div>
    
          <div>
            <div className="nameAndPrice">
              <div>
                <p>{product.product_name}</p>
                <p>
                  Size{" "}
                  <b style={{ fontWeight: "800", marginLeft: "10px" }}>
                    {product.stock.size ? product.stock.size : "NA"}
                  </b>
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px" }}>Kr. 400</p>
                {product.stock.offer_price !== 0 &&
                  product.stock.offer_price < product.stock.unit_price && (
                    <p>Kr. 330</p>
                  )}
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
        {product.stock.offer_price !== 0 &&
          product.stock.offer_price < product.stock.unit_price && (
            <div className="discoutIcon">
              <FaPercent />
            </div>
          )}
      </div>
    </>
  );
};

export default StoreProduct;
