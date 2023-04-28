import Narbar from "../narbar/Narbar";
import Template from "../Template";
import { BsChevronDown } from "react-icons/bs";
import LocationFilter from "../reUsable/LocationFilter";
import ProductCardCopy from "./ProductCardCopy";
import Footer from "../reUsable/Footer";
import { useNavigate } from "react-router-dom";
import "../../styles/exploreProducts/exploreProducts.css";

const ExploreProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      <Template>
        <div className='verticalScrollingDiv'>
          <div className='staticAdDiv12'>e</div>
          <div className='filterCompDIv123'>
            <div>
              <p>Categories</p>
              <BsChevronDown />
            </div>
            <div>
              <p>Price</p>
              <BsChevronDown />
            </div>
            <div>
              <p>Rating</p>
              <BsChevronDown />
            </div>
            <div>
              <p>On sales</p>
              <BsChevronDown />
            </div>
          </div>
          <h3 className='headingsInproductCO'>Recomended Products</h3>
          <div className='recommendedProductDIv'>
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
          </div>
          <h3  style={{ marginTop: "30px" }} className='headingsInproductCO'>
            Top Categories
          </h3>
          <div className='TopCategoryWrapper12'>
            <div onClick={() => navigate("category/Groceries")} className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
          </div>
          <h3 style={{ marginTop: "30px" }} className='headingsInproductCO'>
            Top Rated products
          </h3>
          <div className='recommendedProductDIv'>
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
          </div>
          <h3 style={{ marginTop: "30px" }} className='headingsInproductCO'>
            Explore All products
          </h3>
          <div className='recommendedProductDIv'>
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
          </div>
          <div className='BackToTopBtn-1'>
            <p>back to top</p>
          </div>
          <Footer />
        </div>
        <LocationFilter />
      </Template>
    </>
  );
};

export default ExploreProducts;
