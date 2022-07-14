import "../styles/storeDetails.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import SearchBar from "./reUsable/SearchBar";
import { useState, useEffect } from "react";
import StoreProduct from "./reUsable/StoreProduct";
import { Link } from "react-router-dom";
import {
  fetchStoreDetailsUrl,
  token,
  fetchStoresDetailsFunc,
} from "../api/index.js";
import { useParams } from "react-router-dom";

const StoreDetails = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const [storeDetails, setStoreDetails] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { storeID } = useParams();

  useEffect(() => {
    fetchStoreDetails();
  }, []);

  const fetchStoreDetails = async () => {
    let { storeDetails } = await fetchStoresDetailsFunc(storeID);
    console.log(storeDetails);
    if (storeDetails) {
      setStoreDetails(storeDetails);
      setProducts(storeDetails.product);

      localStorage.removeItem("storeDetails");

      localStorage.setItem("storeDetails", JSON.stringify(storeDetails));

      setLoading(false);
    } else {
      alert("No Store Found");
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
              <img src={storeDetails.image_url} />
            </div>
            <div>
              <div>
                <p className="storeNameClamp">{storeDetails.name}</p>
                <div style={{ width: "100%", display: "flex" }}>
                  <span className="storePaddress">{storeDetails.address}</span>
                  <span>open</span>
                </div>
              </div>
              <div style={{ fontWeight: "750" }}>
                <ReactStars
                  size={16}
                  count={5}
                  value={storeDetails.rating}
                  isHalf={true}
                  halfIcon={<BsStarHalf />}
                  filledIcon={<BsStarFill />}
                />{" "}
              </div>
            </div>
          </div>
          <div>
            <p>{storeDetails.follower}</p>
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
          <p style={{ fontSize: "14px" }}>
            {" "}
            <Link
              color="inherit"
              className="linkreset"
              to={`/store/${storeID}/2`}
            >
              See all
            </Link>
          </p>
        </div>

        {products.map((product) => (
          <StoreProduct product={product} />
        ))}
      </div>
    </>
  );
};

export default StoreDetails;
