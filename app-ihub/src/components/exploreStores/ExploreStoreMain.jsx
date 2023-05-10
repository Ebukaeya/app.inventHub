import Template from "../Template";
import { BsChevronDown } from "react-icons/bs";
import LocationFilter from "../reUsable/LocationFilter";
import EachStoreCard from "./EachStoreCard";
import Footer from "../reUsable/Footer";
import BottomNavigation from "../reUsable/BottomNavigation";

const ExploreStoreMain = () => {
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
              <p>Rating</p>
              <BsChevronDown />
            </div>
            <div>
              <p>On sales</p>
              <BsChevronDown />
            </div>
          </div>
          <h3 className='headingsInproductCO addMarginBot'>Near by stores</h3>
          <div className='recommendedProductDIv'>
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
          </div>
          <h3 className='headingsInproductCO addMarginBot'>Top categories</h3>
          <div className='TopCategoryWrapper12'>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
            <div className='eachTopCategory12'></div>
          </div>
          <h3 className='headingsInproductCO addMarginBot'>Best rated stores</h3>
          <div className='recommendedProductDIv'>
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
          </div>
          <h3 className='headingsInproductCO addMarginBot'>All stores</h3>
          <div className='recommendedProductDIv'>
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
            <EachStoreCard />
          </div>
          <div className='BackToTopBtn-1'>
            <p>back to top</p>
          </div>
          <Footer/>
        </div>
        <div>
          <BottomNavigation/>
        </div>
        <LocationFilter />
      </Template>
    </>
  );
};

export default ExploreStoreMain;
