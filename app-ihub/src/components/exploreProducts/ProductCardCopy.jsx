import "../../styles/productCard.css";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCardCopy = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='productCopy12'>
        <div onClick={()=>navigate(`/product/${"Watch"}`)} className='productCopyImage'>
          <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1677526350/Ihub-product-images/qeateh2lkpfd95jhkscq.png' className='productCopyImage' />
        </div>
        <div className='Productinfo122'>
          <div className='productCopyNamePr'>
            <span>Product Name, IPXB</span>
            <span>
              {" "}
              <p className='currencyTop12'>$</p> 4600{" "}
            </span>
          </div>
          <p className='soldByStoreName'>Sold by: Eya stores</p>
          <ReactStars size={12} count={5} value={4} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />
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
