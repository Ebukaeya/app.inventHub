import { useParams } from "react-router-dom";
import "../styles/productDetail.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ProductSlider from "./reUsable/ProductSlider";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  //console.log(params);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <IoIosHeart size={30} />
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <ProductSlider />
        <div className="productNameWrapper">
          <div>
            <p className="productTitle">Coca Cola (33 ml)</p>
            <div
              style={{
                display: "flex",
                gap: "3px",
                fontSize: "14px",
                alignItems: "center",
                fontWeight: "700",
              }}
            >
              <ReactStars
                size={16}
                count={5}
                value={4}
                isHalf={true}
                halfIcon={<BsStarHalf />}
                filledIcon={<BsStarFill />}
              />{" "}
              (4)
            </div>
            <p className="storeNameD">Super grocery store</p>
            <div className="storeDetailwrapper">
              <p className="storeAdressDetail">
                store address in the beg inf je ejwed wr qwrv 2w werf 2q efbdqjw   false23w
              </p>
              <span>open</span>
            </div>
          </div>
          <div>
            <p>£ 5000</p>

            <p> £ 300</p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                color: "gray",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              <p>Size</p>{" "}
              <p style={{ color: "black", fontWeight: "bold" }}>NA</p>
            </div>
          </div>
        </div>
        <div className="quantityWrapper">
          <div className="quantityDiv">
            <div>
              <p className="textMute">Brand</p>
              <p className="textBolder">Cola</p>
            </div>
            <div>
              <p className="textMute">Available</p>
              <p className="textBolder">300</p>
            </div>
            <div>
              <p className="textMute">Expiry</p>
              <p className="textBolder">2023</p>
            </div>
          </div>
        </div>
        <div className="ProductDetail">
          <p>Product detail</p>
          <p>
            lorekkmwedkmdkmwd kwed enrd ekff kerf j3rf 3qjf3r fjrf r4fjq3qf
            3rjfr gfrj jruf r4fjq3qfbwrf 3wjrfr frj3rfrkjefirebrk trjgbqerjg jer
            jj3rw jq4e ujq4r q3rj ejj3qr 3qhir jknwd jw jkw djwq wrd w3end e3k
          </p>
        </div>
        <div className="centeredDiv">
          <div>
            <p className="centeredDivp">Typically arrives in 1-2 days</p>
            <div className="billButton">
              <BiMinus
                onClick={() => quantity >= 2 && setQuantity(quantity - 1)}
                size={26}
              />
              <p>{quantity}</p>
              <BsPlus onClick={() => setQuantity(quantity + 1)} size={26} />
            </div>
          </div>
        </div>

        <div className="totalPriceDiv">
          <p>Total</p>
          <p>£ 200</p>
        </div>
        <div className="AddtocartButton">ADD TO CART</div>
      </div>
    </>
  );
};

export default ProductDetails;