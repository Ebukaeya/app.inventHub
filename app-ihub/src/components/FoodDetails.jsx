import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ProductSlider from "./reUsable/ProductSlider";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { useState } from "react";

const FoodDetails = () => {
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
            <p className="storeNameD">Instant food restaurant</p>
            <div className="storeDetailwrapper">
              <p className="storeAdressDetail">
                store address in the beg inf je ej
              </p>
              <span>open</span>
            </div>
            <p style={{ marginTop: "10px" }} className="centeredDivp">
              Typically arrives in 1-2 days
            </p>
          </div>
          <div>
            <p>£ 850</p>

            {/*    <p> £ 300</p>
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
            </div> */}
            <div style={{ marginTop: "35px" }} className="billButton">
              <BiMinus
                onClick={() => quantity >= 2 && setQuantity(quantity - 1)}
                size={26}
              />
              <p>{quantity}</p>
              <BsPlus onClick={() => setQuantity(quantity + 1)} size={26} />
            </div>
          </div>
        </div>
        <div>
          <div className="foodComment">
            <textarea
              maxLength={100}
              placeholder="Add comment (max 100 character)"
            ></textarea>
          </div>
        </div>
        <div className="ProductDetail">
          <p>Food detail</p>
          <p>
            lorekkmwedkmdkmwd kwed enrd ekff kerf j3rf 3qjf3r fjrf r4fjq3qf
            3rjfr gfrj jruf r4fjq3qfbwrf 3wjrfr frj3rfrkjefirebrk trjgbqerjg jer
            jj3rw jq4e ujq4r q3rj ejj3qr 3qhir jknwd jw jkw djwq wrd w3end e3k
          </p>
        </div>
        <div style={{margin:"20px 0px"}} className="foodComment">
          <div>
            <div>
              <p>Price</p>
              <p>£ 850</p>
            </div>
            <div>
              <p>Delivery</p>
              <p>£ 50</p>
            </div>
            <div style={{fontWeight:"750"}}>
              <p>Total</p>
              <p>£ 999</p>
            </div>
          </div>
        </div>
        <div className="AddtocartButton">ADD TO CART</div>
      </div>
    </>
  );
};

export default FoodDetails;
