import "../../styles/myorder.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "../reUsable/SearchBar";
import { useState } from "react";
import BulkOrder from "./BulkOrder";
import { Link } from "react-router-dom";
import SingleOrder from "./SingleOrder";
const OrderDetails = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>Order Details</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <SearchBar controlInput={setSearch} placeholder={"Search for a product"} />
        <div className="RorderTitle">
          <p>15 items</p>
          <div>
            {" "}
            <p style={{color:"rgb(0, 128, 248)", fontWeight:"600", fontSize:"14px"}}> 07, Mar, 2023</p>
        
          </div>
        </div>
  <div style={{marginBottom:"120px"}}>
            <Link className="link" to={"/order-details/orderID/productID"}><SingleOrder/></Link>
            <SingleOrder/>
            <SingleOrder/>
            <SingleOrder/>
            <SingleOrder/>
  </div>
      </div>
    </>
  );
};

export default OrderDetails;
