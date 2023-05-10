import Template from "../Template";
import "../../styles/exploreStore/storeDetailsMain.css";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { MdPersonAddAlt1, MdCall } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import ProductCardCopy from "../exploreProducts/ProductCardCopy";
import GoogleMap from "../map/GoogleMap";
import BottomNavigation from "../reUsable/BottomNavigation";
const StoreDetailsMain = () => {
  return (
    <>
      <Template>
        <div className='StoreDetailsWrappperMain23'>
          <div className='verticalScrollingDiv12'>
            <div className='storeDetailsContain22'>
              <div className='storeIntroHeaderCont12'>
                <div>
                  <div className='storeAvatarDiv123'>
                    <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656021029/samples/Ihub-Consumer-App/images_zpwci4.jpg' />
                  </div>
                  <div>
                    <div>
                      <p className='storeTitlt839'>FreshMart store in.</p>
                      <div>
                        <span className='StoreAddressHeader54'>No 19 chukwu Street abakaliki Denmark</span>
                        <span>Open</span>
                      </div>
                    </div>
                    <div>
                      <ReactStars size={12} count={5} value={4} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='followersCont12'>20K </p>
                    <p>Followers</p>
                  </div>
                  <button className='followStoreBtn11'>
                    <MdPersonAddAlt1 /> Follow
                  </button>
                </div>
              </div>
              <div className='MessageAndSearch231'>
                <div>
                  <button>
                    <MdCall /> Call
                  </button>
                  <button>
                    {" "}
                    <AiFillMessage /> Message
                  </button>
                  <button id='hideInWeb73'>
                    {" "}
                    <FaLocationArrow /> Location
                  </button>
                </div>
                <div>
                  <BiSearch color='gray' />
                  <input className='searchInStore' type='text' placeholder='Search in store' />
                </div>
              </div>

              <div className='recommendedProductDIv mobilpadding'>
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
                <ProductCardCopy />
              </div>
            </div>
          </div>

          <div className='storeDetailsContainMap22'>
            <div className='googleMapRenderDIv'>
              <GoogleMap />
            </div>
            <div className='StoreOpeningHours21'>
              <h4>Opening hours</h4>
              <div className='openingHoursDiv12'>
                <div>
                  <span className='daysTitleOpen'>Monday</span> <span>8:00am to 5:00pm</span>
                </div>
                <div>
                  <span className='daysTitleOpen'>Tuesday</span> <span>8:00am to 5:00pm</span>
                </div>
                <div>
                  <span className='daysTitleOpen'>Wednesday</span> <span>8:00am to 5:00pm</span>
                </div>
                <div>
                  <span className='daysTitleOpen'>Thursday</span> <span>8:00am to 5:00pm</span>
                </div>
                <div>
                  <span className='daysTitleOpen'>Friday</span> <span>8:00am to 5:00pm</span>
                </div>
                <div>
                  <span className='daysTitleOpen'>Saturday</span> <span>8:00am to 5:00pm</span>
                </div>
                <div>
                  <span className='daysTitleOpen'>Sunday</span> <span>8:00am to 5:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <BottomNavigation />
        </div>
      </Template>
    </>
  );
};

export default StoreDetailsMain;
