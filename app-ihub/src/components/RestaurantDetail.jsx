/* import "../styles/storeDetails.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsPlus } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import FoodMenu from "./reUsable/FoodMenu";

const RestaurantDetail = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className='mycontainer'>
        <div className='NavBarProdP'>
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className='storeProfile'>
          <div>
            <div className='storeImage'>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656021029/samples/Ihub-Consumer-App/images_zpwci4.jpg' />
            </div>
            <div>
              <div>
                <p className='storeNameClamp'>Super Grocery jrn</p>
                <div style={{ width: "100%", display: "flex" }}>
                  <span className='storePaddress'>yudi street in hhdsu jbfdj kwern</span>
                  <span>open</span>
                </div>
              </div>
              <div style={{ fontWeight: "750" }}>
                <ReactStars size={16} count={5} value={4} isHalf={true} halfIcon={<BsStarHalf />} filledIcon={<BsStarFill />} />{" "}
              </div>
            </div>
          </div>
          <div>
            <p>20k</p>
            <p>followers</p>
            <p>Follow</p>
          </div>
        </div>
        <div className='contactStore'>
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
        <div className='StickySearchbar'> </div>
        <div className='FoodMenu'>
          <div className='activeFoodmenu'>All</div>
          <div>Main Menu</div>
          <div>Extra</div>
          <div>Top ups</div>
          <div>Drinks</div>
          <div>Custom</div>
        </div>

        <div className='FoodRWrapper'>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;
 */