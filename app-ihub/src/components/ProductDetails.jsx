import { useParams } from "react-router-dom";
import "../styles/productDetail.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ProductSlider from "./reUsable/ProductSlider";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

const ProductDetails = () => {
  const params = useParams();
  //console.log(params);

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
            <ReactStars
              size={16}
              count={5}
              value={4}
              isHalf={true}
              halfIcon={<BsStarHalf />}
              filledIcon={<BsStarFill />}
            />
          </div>
          <div>1</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
