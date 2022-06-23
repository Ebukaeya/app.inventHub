import "../styles/storeDetails.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import SearchBar from "./reUsable/SearchBar";
import { useState } from "react";
import StoreProduct from "./reUsable/StoreProduct";

const StoreDetails = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  window.onscroll = () => {
    console.log("scroll");
    let node = document.querySelector(".StickySearchbar");

    if (node.style.top === "") {

      //node.style.height = "90px";
      node.style.borderBottom = "1px solid rgb(233, 233, 233);";
    }

    if (!node.style.top === "") {
      console.log("am here");
    }
  };


  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className="storeProfile">
          <div>
            <div className="storeImage">
              <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655643691/samples/Ihub-Consumer-App/download_pthu7h.png" />
            </div>
            <div>
              <div>
                <p className="storeNameClamp">Super Grocery jrn</p>
                <div style={{ width: "100%", display: "flex" }}>
                  <span className="storePaddress">
                    yudi street in hhdsu jbfdj kwern
                  </span>
                  <span>open</span>
                </div>
              </div>
              <div style={{ fontWeight: "750" }}>
                <ReactStars
                  size={16}
                  count={5}
                  value={4}
                  isHalf={true}
                  halfIcon={<BsStarHalf />}
                  filledIcon={<BsStarFill />}
                />{" "}
              </div>
            </div>
          </div>
          <div>
            <p>20k</p>
            <p>followers</p>
            <p>Follow</p>
          </div>
        </div>
        <div className="contactStore">
          <div>
            <MdWifiCalling3 size={20} />
            <p>Call</p>
          </div>
          <div>
            {" "}
            <RiMessage3Fill size={20} /> Message
          </div>
          <div>
            {" "}
            <FaLocationArrow /> Location
          </div>
        </div>
        <div className="StickySearchbar">
          {" "}
          <SearchBar controlInput={setSearch} />
        </div>
        <div style={{ marginTop: "18px" }} className="titleFlex">
          <p>Explore products</p>
          <p style={{ fontSize: "14px" }}>See all</p>
        </div>
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
        <StoreProduct />
      </div>
    </>
  );
};

export default StoreDetails;
