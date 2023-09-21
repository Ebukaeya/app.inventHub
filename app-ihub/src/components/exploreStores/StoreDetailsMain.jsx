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
import StoreLocationOnMobile from "./storeLocationOnMobile";
import { useState, useEffect } from "react";
import MessageSeller from "./MessageSeller";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchStoreProductsEnpoint } from "../../api/StoreAPI";
import { useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";

const StoreDetailsMain = ({ socket }) => {
  const { state } = useLocation();

  const [showMapMobile, setShowMapMobile] = useState(false);
  const [storeDetails, setStoreDetails] = useState({});
  const [storeProducts, setStoreProducts] = useState([]);
  const [message, setMessage] = useState("");

  const { profile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  console.log(profile);

  useEffect(() => {
    setStoreDetails(state.store);
    getStoreProducts();
  }, []);

  /* fetch store products using the store ID */
  const getStoreProducts = async () => {
    try {
      const response = await fetch(fetchStoreProductsEnpoint + state.store._id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setStoreProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showMessageDiv = () => {
    if (profile) {
      const messageDiv = document.querySelector(".dropDownMessageDiv");
      messageDiv.classList.toggle("showDropDownMessageDiv");
    } else {
      alert("Please login to send message");
      navigate("/signin", { state: { currentPath: window.location.href } });
    }
  };

  const sendMessageToSeller = () => {
    socket.emit("message", {
      message,
      room: storeDetails._id,
      senderInfo: { consumerID: profile._id, fullName: profile.fullName, profileImage: profile.imageUrl, lastMessage: message },
      storeOwnerID: storeDetails.webstoreUser,
      businessName: storeDetails.storeName,
      businessImage: storeDetails.storeImage,
      date: new Date(),
    });
  };
  return (
    <>
      <Template>
        <div onClick={() => window.history.back()} style={{ display: "flex", gap: "4px", alignItems: "center", margin: "8px 2px", cursor: "pointer" }}>
          {" "}
          <FaAngleLeft /> <span>Back</span>
        </div>
        <div className='StoreDetailsWrappperMain23'>
          <div className='verticalScrollingDiv12'>
            <div className='storeDetailsContain22'>
              <div className='storeIntroHeaderCont12'>
                <div>
                  <div className='storeAvatarDiv123'>
                    <img
                      src={
                        storeDetails.storeImage
                          ? storeDetails.storeImage
                          : "https://res.cloudinary.com/ebuka1122/image/upload/v1656021029/samples/Ihub-Consumer-App/images_zpwci4.jpg"
                      }
                    />
                  </div>
                  <div>
                    <div>
                      <p className='storeTitlt839'>{storeDetails.storeName}</p>
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
                  <button onClick={() => showMessageDiv()}>
                    {" "}
                    <AiFillMessage /> Message
                  </button>
                  <button onClick={() => setShowMapMobile(true)} id='hideInWeb73'>
                    {" "}
                    <FaLocationArrow /> Location
                  </button>
                  <MessageSeller message={message} setMessage={setMessage} sendMessage={sendMessageToSeller} />
                </div>
                <div>
                  <BiSearch color='gray' />
                  <input className='searchInStore' type='text' placeholder='Search in store' />
                </div>
              </div>

              <div className='recommendedProductDIv mobilpadding'>
                {storeProducts.map((product) => (
                  <ProductCardCopy key={product._id} product={product} payload={state} />
                ))}
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
        {showMapMobile && <StoreLocationOnMobile closeMap={setShowMapMobile} />}
      </Template>
    </>
  );
};

export default StoreDetailsMain;
