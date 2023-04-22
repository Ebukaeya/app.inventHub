import { useParams } from "react-router-dom";
import "../../styles/productDetail.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ProductSlider from "../reUsable/ProductSlider";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { fetchProductsFunc } from "../../api/index.js";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../slices/cartSlice";

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    setTotalPrice(product.stock?.unit_price * quantity);
  }, [quantity, product]);

  const fetchProduct = async () => {
    let { productDetails } = await fetchProductsFunc(productID);
    if (productDetails) {
      console.log(productDetails);
      setProduct(productDetails);
    } else {
      alert("product details not found");
    }
  };

  const addToCartFn = () => {
    let selectedProduct = {
      product,
      quantity,
      unitPrice: product.stock.unit_price,
      totalPrice,
    };

    dispatch(addToCart(selectedProduct));
    /* send to database */
    console.log(totalPrice, quantity);
  };

  return (
    <>
      <div className='mycontainer'>
        <div className='NavBarProdP'>
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <IoIosHeart size={30} />
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <ProductSlider productImages={product.stock?.product_image} />
        <div className='productNameWrapper'>
          <div>
            <p className='productTitle'>{product.product_name}</p>
            <div
              style={{
                display: "flex",
                gap: "3px",
                fontSize: "14px",
                alignItems: "center",
                fontWeight: "700",
              }}
            >
              <ReactStars size={16} count={5} value={product.rating} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />{" "}
            </div>
            <p className='storeNameD'> {product.store?.name} </p>
            <div className='storeDetailwrapper'>
              <p className='storeAdressDetail'>{product.store?.address}</p>
              <span>open</span>
            </div>
          </div>
          <div>
            <p>£ {product.stock?.unit_price}</p>

            {product.stock?.offer_price !== 0 && product.stock?.offer_price < product.stock?.unit_price && <p> £ {product.stock?.offer_price}</p>}
            <div
              style={{
                display: "flex",
                gap: "20px",
                color: "gray",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              <p>Size</p> <p style={{ color: "black", fontWeight: "bold" }}> {product.stock?.size ? product.stock?.size : "NA"}</p>
            </div>
          </div>
        </div>
        <div className='quantityWrapper'>
          <div className='quantityDiv'>
            <div>
              <p className='textMute'>Brand</p>
              <p className='textBolder'>{product.stock?.brand}</p>
            </div>
            <div>
              <p className='textMute'>Available</p>
              <p className='textBolder'>{product?.quantity - quantity}</p>
            </div>
            <div>
              <p className='textMute'>Expiry</p>
              {product.stock?.expiry_date ? <p className='textBolder'> {product.stock?.expiry_date.slice(0, 7)}</p> : <p className='textBolder'> NA</p>}
            </div>
          </div>
        </div>
        <div className='ProductDetail'>
          <p>Product detail</p>
          <p>
            lorekkmwedkmdkmwd kwed enrd ekff kerf j3rf 3qjf3r fjrf r4fjq3qf 3rjfr gfrj jruf r4fjq3qfbwrf 3wjrfr frj3rfrkjefirebrk trjgbqerjg jer jj3rw jq4e
            ujq4r q3rj ejj3qr 3qhir jknwd jw jkw djwq wrd w3end e3k
          </p>
        </div>
        <div className='centeredDiv'>
          <div>
            <p className='centeredDivp'>
              Typically arrives in {product.stock?.delivery_time} - {parseInt(product.stock?.delivery_time) + 1} days
            </p>
            <div className='billButton'>
              <BiMinus onClick={() => quantity >= 2 && setQuantity(quantity - 1)} size={26} />
              <p>{quantity <= product?.quantity ? quantity : product?.quantity}</p>
              <BsPlus onClick={() => setQuantity(quantity + 1)} size={26} />
            </div>
          </div>
        </div>

        <div className='totalPriceDiv'>
          <p>Total</p>
          <p>£ {totalPrice && totalPrice}</p>
        </div>
        <div className='AddtocartButton' onClick={addToCartFn}>
          ADD TO CART
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
