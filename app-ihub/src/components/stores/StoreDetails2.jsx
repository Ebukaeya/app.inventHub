import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "../reUsable/SearchBar";
import { useState, useEffect } from "react";
import "../../styles/storeDetails2.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Product2 from "../reUsable/Product2";

const StoreDetails2 = () => {
  const [search, setSearch] = useState("");
  const [storeDetails, setStoreDetails] = useState({});

  useEffect(() => {
    setStoreDetails(JSON.parse(localStorage.getItem("storeDetails")));
  }, []);
  console.log(typeof storeDetails);

  return (
    <>
      <div className='mycontainer'>
        <div className='NavBarProdP'>
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className='xPStickyTap'>
          <div className='storeTitleAndSearchDiv'>
            <div>
              <img src={storeDetails.image_url} />
            </div>
            <div>
              <SearchBar controlInput={setSearch} placeholder={"Search Product "} />
            </div>
          </div>
        </div>
        <p className='xpProducts'>Explore products</p>
        <div className='Store2productWrapper'>
          {storeDetails.product?.map((product) => (
            <Product2 product={product} />
          ))}
          {/* should recieve as props brand, id, name rating size and price */}
        </div>
      </div>
    </>
  );
};

export default StoreDetails2;
