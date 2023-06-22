import Template from "../Template";
import "../../styles/myorder.css";
import { BiSearch } from "react-icons/bi";
import { useState, useLayoutEffect } from "react";
import EachOrderMain from "./EachOrderMain";
import SingleOrder from "./SingleOrder";
import BottomNavigation from "../reUsable/BottomNavigation";
import { fetchMyOrdersUrl } from "../../api/consumerApi";

export const MyOrderDetails = ({  selectedOrder,socket,refetchOrder,setSelectedOrder }) => {
  return (
    <>
      <div className='myOrderList122'>
        <div className='RorderTitle'>
          <p>{selectedOrder.purchasedItems.length>1?`${selectedOrder.purchasedItems.length}  items`:`${selectedOrder.purchasedItems.length} item`}  </p>
          <div>
            {" "}
            <p style={{ color: "rgb(0, 128, 248)", fontWeight: "600" }}> {selectedOrder.orderDate.split("T")[0]}</p>
          </div>
        </div>
        <div className='anchorMargiv844'>{selectedOrder && selectedOrder.purchasedItems.map((item) => <SingleOrder key={item._id}  item={item} selectedOrder={selectedOrder} socket={socket} refetchOrder={refetchOrder}  setSelectedOrder={setSelectedOrder}/>)}</div>

        <div className='OrderDetailsTotal'>
          <div>
            <p>Total Order</p>
            <p>£ {selectedOrder.totalBreakDown.totalPaid}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const MyOrderMain = ({ profile,socket }) => {
  const [filter, setFilter] = useState("All");
  const [showEachOrderDetails, setShowEachOrderDetails] = useState(false);
  const [myOrderList, setMyOrderList] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useLayoutEffect(() => {
    fetchMyOrders();

    socket.on("updateOrderStatus", ({message,room,updatedOrder})=>{
      if(profile._id === room){
        console.log(updatedOrder);
        alert(message)
        fetchMyOrders();
      }
    })
    
  }, []);

  const showFilter = () => {
    let filter = document.querySelector(".Orderfilter");
    filter.classList.toggle("showFilter");
  };

  const fetchMyOrders = async () => {
    try {
      let response = await fetch(fetchMyOrdersUrl + profile._id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          /* Authorization: `Bearer ${profile.token}`, */
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data, "my order list");
        setMyOrderList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Template>
        <h4 className='titleMyorder873'>My Orders</h4>
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
            {myOrderList &&
              myOrderList
                .slice()
                .reverse()
                .map((order) => {
                  return <EachOrderMain key={order._id} order={order} setSelectedOrder={setSelectedOrder} selectedOrder={selectedOrder} />;
                })}
          </div>
          {selectedOrder ? <MyOrderDetails openModal={setShowEachOrderDetails} selectedOrder={selectedOrder} socket={socket} refetchOrder={fetchMyOrders} setSelectedOrder={setSelectedOrder} />  : <div className='myOrderList122'>empty</div>}
        </div>
       
        <div>
          <BottomNavigation />
        </div>
      </Template>
    </>
  );
};

export default MyOrderMain;
