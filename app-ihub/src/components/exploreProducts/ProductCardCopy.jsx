import "../../styles/productCard.css";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



const ProductCardCopy = ({ product, payload }) => {
   /* let {store} = payload; */
  const navigate = useNavigate();
  return (
    <>
      <div className='productCopy12'>
        <div onClick={()=>navigate(`/product/${product._id}`, {state:{store:payload.store, product}} )} className='productCopyImage'>
          <img src={product?.productImage[0]} className='productCopyImage' />
        </div>
        <div className='Productinfo122'>
          <div className='productCopyNamePr'>
            <span>{product?.name}</span>
            <span>
              {" "}
              <p className='currencyTop12'>$</p> {product?.unitPrice}{" "}
            </span>
          </div>
          <p className='soldByStoreName'>Sold by: {payload?.store.storeName}</p>
          <ReactStars size={12} count={5} value={product?.rating?product?.rating:4} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />
          <button className='addToCartProduct12Btn'>
            <BsPlus /> Add to cart
          </button>
        </div>
        <div className='addToFavouriteWish'>
          <AiOutlineHeart color='black' />
        </div>
      </div>
    </>
  );
};

export default ProductCardCopy;
