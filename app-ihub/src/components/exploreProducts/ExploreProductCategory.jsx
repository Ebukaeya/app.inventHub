
import Template from "../Template";
import { BsChevronDown } from "react-icons/bs";
import LocationFilter from "../reUsable/LocationFilter";
import ProductCardCopy from "./ProductCardCopy";
import Footer from "../reUsable/Footer";

const ExploreProductCategory = () => {
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

          <h3 className='headingsInproductCO'>Showing "Categories" products</h3>
          <div className='recommendedProductDIv'>
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
          </div>

          <div className='BackToTopBtn-1'>
            <p>Explore more categories</p>
          </div>
          <Footer />
        </div>
        <LocationFilter />
      </Template>
    </>
  );
};

export default ExploreProductCategory;
