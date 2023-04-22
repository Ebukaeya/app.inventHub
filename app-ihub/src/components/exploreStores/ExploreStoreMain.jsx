import Template from "../Template";
import { BsChevronDown } from "react-icons/bs";
import LocationFilter from "../reUsable/LocationFilter";

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
          <h3 className='headingsInproductCO'>Near by stores</h3>
        </div>
        <LocationFilter/>
      </Template>
    </>
  );
};

export default ExploreStoreMain;
