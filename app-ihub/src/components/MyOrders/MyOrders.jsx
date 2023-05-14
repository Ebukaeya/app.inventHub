/* import "../../styles/myorder.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "../reUsable/SearchBar";
import { useState } from "react";
import BulkOrder from "./BulkOrder";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const showFilter = () => {
    let filter = document.querySelector(".Orderfilter");
    filter.classList.toggle("showFilter");
  };
  return (
    <>
      <div className='mycontainer'>
        <div className='NavBarProdP'>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>My Orders</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <SearchBar controlInput={setSearch} placeholder={"Search an order"} />
        <div className='RorderTitle'>
          <p>Recent Orders</p>
          <div className='nothinks74h3'>
            {" "}
            <p onClick={showFilter} style={{ color: "rgb(0, 128, 248)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>
              {filter}
            </p>
            <div className='Orderfilter'>
              <p onClick={(e) => setFilter(e.target.innerHTML)}>All</p>
              <p onClick={(e) => setFilter(e.target.innerHTML)}>Pending</p>
              <p onClick={(e) => setFilter(e.target.innerHTML)}>Transit</p>
              <p onClick={(e) => setFilter(e.target.innerHTML)}>Completed</p>
              <p onClick={(e) => setFilter(e.target.innerHTML)}>On Dispute</p>
            </div>
          </div>
        </div>
        <Link className='link' to={"/order-details/orderID"}>
          {" "}
          <BulkOrder />
        </Link>
        <BulkOrder />
        <BulkOrder />
        <BulkOrder />
        <BulkOrder />
        <BulkOrder />
        <BulkOrder />
        <BulkOrder />
        <BulkOrder />
      </div>
    </>
  );
};

export default MyOrders;
 */