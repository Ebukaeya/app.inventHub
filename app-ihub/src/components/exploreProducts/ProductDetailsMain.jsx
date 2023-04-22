import Template from "../Template";
import "../../styles/exploreProducts/productDetails.css";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const ProductDetailsMain = () => {
  return (
    <>
      <Template>
        <div className='verticalScrollingDiv'>
          <div>Back button</div>
          <div className='productDetailsWrapper123'>
            <div className='productImageShow5'>
              <div className='pDDetails1232'>
                <img
                  className='pddetailImage684'
                  src='https://res.cloudinary.com/ebuka1122/image/upload/v1677526350/Ihub-product-images/qeateh2lkpfd95jhkscq.png'
                />
              </div>
              <div className='pDDetails1232AllImage '>
                <div className='selectedPicture384'>
                  <img
                    className='pddetailImage684'
                    src='https://res.cloudinary.com/ebuka1122/image/upload/v1677526350/Ihub-product-images/qeateh2lkpfd95jhkscq.png'
                  />
                </div>
                <div>
                  <img
                    className='pddetailImage684'
                    src='https://res.cloudinary.com/ebuka1122/image/upload/v1680784342/Ihub-product-images/x9ibi5oztcgqwm7p0yty.png'
                  />
                </div>
                <div>1</div>
                <div>1</div>
              </div>
            </div>
            <div className='productDetailD27'>
              <div className='ToFlexInMobileJC'>
                <div>
                  <h2 className='productTitle737D'>AirPods-Max</h2>
                  <p>Apple</p>
                  <ReactStars size={12} count={5} value={4} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />
                </div>
                <div>
                  <h3 className='priceTagPrdtDetail374'>$ 4000.00 </h3>
                  {/*  <span style={{ color: "gray", fontWeight: "500" }}> (exc. VAT)</span>
                  <p className='deliveryFeeDivud'>
                    delivery fee: <b>£ 60</b>{" "}
                  </p> */}
                  <div className='billButton'>
                    <span>
                      {" "}
                      <BiMinus size={26} />
                    </span>
                    <p>12</p>
                    <span>
                      {" "}
                      <BsPlusLg />
                    </span>
                  </div>
                  <span>100 in stock</span>
                </div>
              </div>
              <div className='chooseSizeDIvRcondi'>
                <h4>Choose size</h4>
                <select className='sizeToChosseDrop23'>
                  <option value='' disabled selected hidden>
                    Select bank
                  </option>
                </select>
              </div>
           {/*    <div className='billButton'>
                <span>
                  {" "}
                  <BiMinus size={26} />
                </span>
                <p>12</p>
                <span>
                  {" "}
                  <BsPlusLg />
                </span>
              </div> */}
              <div className='button-toAddtoCartOrbiy'>
                <button className='buyNoe28u3'>Buy Now</button>
                <button className='buyNoe28u34'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default ProductDetailsMain;
