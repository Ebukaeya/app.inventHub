import Template from "../Template";
import "../../styles/exploreProducts/productDetails.css";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlusLg, BsTruck } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import ProductCardCopy from "./ProductCardCopy";
import { FaAngleLeft } from "react-icons/fa";

const ProductDetailsMain = () => {
  return (
    <>
      <Template>
        <div className='verticalScrollingDiv'>
          <div onClick={() => window.history.back()} style={{ display: "flex", gap: "4px", alignItems: "center", margin: "8px 2px", cursor: "pointer" }}>
            {" "}
            <FaAngleLeft /> <span>Back</span>
          </div>
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

              <div className='button-toAddtoCartOrbiy'>
                <button className='buyNoe28u3'>Buy Now</button>
                <button className='buyNoe28u34'>Add to Cart</button>
              </div>
              <div className='deliveryDiv34'>
                <BsTruck color='#FFD700' size={24} />
                <div>
                  <p className='deliveryText534'>Delivery</p>
                  <p>Delivered in 4 days at £ 20</p>
                  <p>See policy</p>
                </div>
              </div>
              <div className='deliveryDiv34'>
                <BsTruck color='#FFD700' size={24} />
                <div>
                  <p className='deliveryText534'>Delivery</p>
                  <p>Delivered in 4 days at £ 20</p>
                  <p>See policy</p>
                </div>
              </div>
            </div>
          </div>
          <div className='productDescription'>
            <h3 className='headingsInproductCO'>Product Description</h3>
            <p>
              {" "}
              lorem kmkfd kdw kwrckmwmrefm wjrfrwn jwrnf cjwnrfjwrfjrnrr vjrvrnrjfew rjr dfejr rjf jruf nwrnf jnrf wfrfcwr fjcr fjcnrrf rfnjnrjffwijrf jn3wnrf
              jrnf jnrf jnrf jr jr fjn. <br></br> wkenkoiwef kf if3 kr
            </p>
          </div>
          <div className='soldByStoreDiv'>
            <h5>Sold by :</h5>
            <div className='bforeFlex43'>
              <div className='flexingSoldByStore74'>
                <div className='storeImageDiv12'>
                  <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1677526350/Ihub-product-images/qeateh2lkpfd95jhkscq.png' alt='storeImage' />
                </div>
                <div>
                  <p className='storeNameTile'>Apple Store Inc.</p>
                  <p>Nordre telkaj 12 st.tv 2450 sydhavn ej je j ej je , Denmark</p>
                  <ReactStars size={12} count={5} value={4} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />
                </div>
              </div>
              <div>
                <button className='visitSotreDiv884'>View</button>
              </div>
            </div>
          </div>
          {/* related products */}
          <h3 className='headingsInproductCO' style={{ marginBottom: "20px" }}>
            Related products
          </h3>
          <div className='recommendedProductDIv'>
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
          </div>
        </div>
      </Template>
    </>
  );
};

export default ProductDetailsMain;
