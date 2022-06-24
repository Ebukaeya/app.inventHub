import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "./reUsable/SearchBar";
import { useState } from "react";
import "../styles/storeDetails2.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Product2 from "./reUsable/Product2";

const StoreDetails2 = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className="xPStickyTap">
          <div className="storeTitleAndSearchDiv">
            <div>
              <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655643691/samples/Ihub-Consumer-App/download_pthu7h.png" />
            </div>
            <div>
              <SearchBar
                controlInput={setSearch}
                placeholder={"Search Product "}
              />
            </div>
          </div>
        </div>
        <p className="xpProducts">Explore products</p>
        <div className="Store2productWrapper">
        <Product2 /> {/* should recieve as props brand, id, name rating size and price */}
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        
    
        </div>
      </div>
    </>
  );
};

export default StoreDetails2;
