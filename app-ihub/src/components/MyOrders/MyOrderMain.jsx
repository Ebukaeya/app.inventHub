import Template from "../Template";
import "../../styles/myorder.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import EachOrderMain from "./EachOrderMain";
import SingleOrder from "./SingleOrder";


export const MyOrderDetails = () => {
  return (
    <>
      <div className='myOrderList122'>
       
      </div>
    </>
  );
};

const MyOrderMain = () => {
  const [filter, setFilter] = useState("All");
  const showFilter = () => {
    let filter = document.querySelector(".Orderfilter");
    filter.classList.toggle("showFilter");
  };

  

  return (
    <>
      <Template>
        <h4>My Orders</h4>
        <div className='searchDivFilter12'>
          <div>
            <BiSearch color='gray' />
            <input className='searchInStore' type='text' placeholder='Search in store' />
          </div>
          <div>
            <p onClick={showFilter} style={{ color: "rgb(0, 128, 248)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>
              {filter}
            </p>
            <div className='Orderfilter'>
              <p
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  showFilter();
                }}
              >
                All
              </p>
              <p
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  showFilter();
                }}
              >
                Pending
              </p>
              <p
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  showFilter();
                }}
              >
                Transit
              </p>
              <p
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  showFilter();
                }}
              >
                Completed
              </p>
              <p
                onClick={(e) => {
                  setFilter(e.target.innerHTML);
                  showFilter();
                }}
              >
                On Dispute
              </p>
            </div>
          </div>
        </div>
        <div className='myOrderPageWrapper343'>
          <div className='myOrderEachOrderDiv122'>
          
              <EachOrderMain />
           
          
            <EachOrderMain />
          </div>
          <MyOrderDetails />
        </div>
      </Template>
    </>
  );
};

export default MyOrderMain;
