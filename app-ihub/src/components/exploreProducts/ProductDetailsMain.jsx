import Template from "../Template";
import "../../styles/exploreProducts/productDetails.css";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlusLg, BsTruck } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import ProductCardCopy from "./ProductCardCopy";
import { FaAngleLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from "react";
import { addToCartUrl } from "../../api/consumerApi";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../slices/profileSlice";

const ProductDetailsMain = () => {
  const [imageShowing, setImageShowing] = useState();
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const [itemAddedToCart, setItemAddedToCart] = useState(false);

  const { state } = useLocation();
  const { product, store } = state;
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  /* check if state is passed, otherwise fetch the product and store it belogns to and also products in the same category */

  useLayoutEffect(() => {
    if (!state) {
      /* fetch product and store(will be part of product object) it belongs*/
    } else {
      setImageShowing(product?.productImage[0]);
    }
    /* fetch related products */

    /* check if product is in cart */
    let productInCart = profile?.cart?.find((item) => item.product._id === product._id);
    console.log(productInCart);
    if (productInCart) {
      setItemAddedToCart(true);
    }
  }, []);

  useEffect(() => {
    /* check if product is in cart */
    let productInCart = profile?.cart?.find((item) => item.product._id === product._id);
    console.log(productInCart);
    if (productInCart) {
      setItemAddedToCart(true);
    }
  }, [profile]);

  const fetchProduct = async () => {};

  const addToCart = async () => {
    let payload = {
      product,
      quantity,
      size: sizeSelected,
      color: colorSelected,
    };

    try {
      let response = await fetch(addToCartUrl + "646c700bb367e1b674bc434c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        let { _, user } = await response.json();
        console.log(user);
        dispatch(setProfile(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <img className='pddetailImage684' src={imageShowing} />
              </div>
              <div className='pDDetails1232AllImage '>
                <div className='selectedPicture384'>
                  <img onClick={() => setImageShowing(product?.productImage[0])} className='pddetailImage684' src={product.productImage[0]} />
                </div>
                <div>
                  <img
                    onClick={() => setImageShowing(product?.productImage[1])}
                    className='pddetailImage684'
                    src={
                      product?.productImage[1] ? product?.productImage[1] : "https://www.apple.com/v/airpods-max/d/images/overview/hero__dvsxv8smkkgi_large.jpg"
                    }
                  />
                </div>
                <div>
                  <img
                    onClick={() => setImageShowing(product?.productImage[2])}
                    className='pddetailImage684'
                    src={
                      product?.productImage[2] ? product?.productImage[2] : "https://www.apple.com/v/airpods-max/d/images/overview/hero__dvsxv8smkkgi_large.jpg"
                    }
                  />
                </div>
                <div>
                  <img
                    onClick={() => setImageShowing(product?.productImage[3])}
                    className='pddetailImage684'
                    src={
                      product?.productImage[3] ? product?.productImage[3] : "https://www.apple.com/v/airpods-max/d/images/overview/hero__dvsxv8smkkgi_large.jpg"
                    }
                  />
                </div>
              </div>
            </div>
            <div className='productDetailD27'>
              <div className='ToFlexInMobileJC'>
                <div>
                  <h2 className='productTitle737D'> {product.name} </h2>
                  <p>{product.brand}</p>
                  <ReactStars
                    size={12}
                    count={5}
                    value={product?.rating ? product?.rating : 4}
                    isHalf={true}
                    halfIcon={<BsStarHalf />}
                    filledIcon={<BsStarFill />}
                  />
                </div>
                <div>
                  <h3 className='priceTagPrdtDetail374'>$ {product?.unitPrice}</h3>
                  {/*  <span style={{ color: "gray", fontWeight: "500" }}> (exc. VAT)</span>
                  <p className='deliveryFeeDivud'>
                    delivery fee: <b>£ 60</b>{" "}
                  </p> */}
                  <div className='billButton'>
                    <span
                      onClick={() => {
                        quantity > 1 && setQuantity((prev) => prev - 1);
                      }}
                    >
                      {" "}
                      <BiMinus size={26} />
                    </span>
                    <p>{quantity}</p>
                    <span
                      onClick={() => {
                        quantity < parseInt(product.quantity) - parseInt(product.damagedAmount ? product.damagedAmount : 0) && setQuantity((prev) => prev + 1);
                      }}
                    >
                      {" "}
                      <BsPlusLg />
                    </span>
                  </div>
                  <span>{product.damagedAmount ? parseInt(product.quantity) - parseInt(product.damagedAmount) : product.quantity} in stock</span>
                </div>
              </div>
              {product.size && (
                <div className='chooseSizeDIvRcondi'>
                  <h4>Choose size</h4>
                  <select className='sizeToChosseDrop23'>
                    {/* map available sizes */}
                    <option value='' disabled selected hidden>
                      Select size
                    </option>
                  </select>
                </div>
              )}

              <div className='button-toAddtoCartOrbiy'>
                <button
                  onClick={() => {
                    navigate("/cart/check-out", { state: { products: [{ ...product, purchasedQuantity: quantity, purchasedSize: "large" }] } });
                  }}
                  className='buyNoe28u3'
                >
                  Buy Now
                </button>
                {itemAddedToCart ? (
                  <button  style={{ opacity: "0.7", color: "gray", cursor: "default" }} className='buyNoe28u34'>
                    Item in cart
                  </button>
                ) : (
                  <button onClick={addToCart} className='buyNoe28u34'>
                    Add to Cart
                  </button>
                )}
              </div>
              <div className='deliveryDiv34'>
                <BsTruck color='#FFD700' size={24} />
                <div>
                  <p className='deliveryText534'>Delivery</p>
                  <p>
                    Delivered in {product.deliveryTime} days at £ {product.deliveryFee}
                  </p>
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
            <p> {product.productDescription}</p>
          </div>
          <div className='soldByStoreDiv'>
            <h5>Sold by :</h5>
            <div className='bforeFlex43'>
              <div className='flexingSoldByStore74'>
                <div className='storeImageDiv12'>
                  <img src={store.storeImage} alt='storeImage' />
                </div>
                <div>
                  <p className='storeNameTile'>{store.storeName}</p>
                  <p>{store.storeAddress}</p>
                  <ReactStars size={12} count={5} value={store.averageRating} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />
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
