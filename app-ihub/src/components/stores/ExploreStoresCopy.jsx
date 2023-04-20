import Narbar from "../narbar/Narbar";
import Template from "../Template";
import { BsChevronDown } from "react-icons/bs";
import LocationFilter from "../reUsable/LocationFilter";
import ProductCardCopy from "./ProductCardCopy";

const ExploreStoresCopy = () => {
  return (
    <>
      <Narbar />
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
          <h3 className="headingsInproductCO">Recomended Products</h3>
          <div className='recommendedProductDIv'>
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
            <ProductCardCopy />
          </div>
          <h3 style={{marginTop:"30px"}} className="headingsInproductCO">Top Categories</h3>
          <h3 style={{marginTop:"30px"}} className="headingsInproductCO">Top Rated products</h3>
          <h3 style={{marginTop:"30px"}} className="headingsInproductCO">Explore All products</h3>
        </div>
        <LocationFilter />
      </Template>
    </>
  );
};

export default ExploreStoresCopy;
