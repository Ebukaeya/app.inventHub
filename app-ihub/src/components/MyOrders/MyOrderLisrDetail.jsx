import Template from "../Template";
import EachOrder from "./EachOrder";
import { MyOrderDetails } from "./MyOrderMain";
import SingleOrder from "./SingleOrder";
import { useState, useLayoutEffect } from "react";
import {FaAngleLeft} from "react-icons/fa";
import { useLocation } from "react-router-dom";



const MyOrderListDetail = ({socket}) => {
  const [filter, setFilter] = useState("All");
  const [showEachOrderDetails, setShowEachOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const {state} = useLocation(); /* selectedOrde in view */
  console.log(state.order, "state in my order list detail");

  useLayoutEffect(() => {
    setSelectedOrder(state.order)
  }, []);

  const showFilter = () => {
    let filter = document.querySelector(".Orderfilter");
    filter.classList.toggle("showFilter");
  };

  return (
    <>
      <Template>
        <div className='divMyOrderList774'>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "8px" }}>
              <div onClick={()=>window.history.back() } style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}} >
                <FaAngleLeft />

                <h4 className='backHeader83'>My Orders</h4>
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
            <div className='RorderTitle'>
              <p>15 items</p>
              <div>
                {" "}
                <p style={{ color: "rgb(0, 128, 248)", fontWeight: "600" }}> 07, Mar, 2023</p>
              </div>
            </div>
            <div className='anchorMargiv844'>
              

              {selectedOrder && selectedOrder.purchasedItems.map((item, index) => <SingleOrder key={index} item={item} selectedOrder={selectedOrder} socket={socket} setSelectedOrder={setSelectedOrder} />)
              }
             
            
            </div>

            <div className='OrderDetailsTotal'>
              <div>
                <p>Total Order</p>
                <p>£ 9999.9</p>
              </div>
            </div>
          </div>
        </div>
        {showEachOrderDetails && (
          <div className='OrderItemDetails83Wrapper'>
            <div>
              <EachOrder closeItemDetails={setShowEachOrderDetails} />
            </div>
          </div>
        )}
      </Template>
    </>
  );
};

export default MyOrderListDetail;
