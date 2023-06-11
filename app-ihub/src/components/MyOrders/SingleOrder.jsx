import { AiOutlineRight } from "react-icons/ai";
import EachOrder from "./EachOrder";
import { useState } from "react";

const SingleOrder = ({  item ,selectedOrder,socket,refetchOrder,setSelectedOrder}) => {
  const [showEachOrderDetails, setShowEachOrderDetails] = useState(false);
  return (
    <>
      <div onClick={() => setShowEachOrderDetails(true)} className='bulkOrderDiv newPos'>
        <div>
          <img src={item.productImage[0]} />
        </div>
        <div className='newPos'>
          <div className='orderItemTitle'>
            <p>{item.name}</p>
          </div>
          <div>
            <span className='orderItemShop'>bought from: {item.storeName}</span>
            <AiOutlineRight size={12} color='gray' />
          </div>
          <div>
            <span
              className={
                item.deliveryStatus === "pending"
                  ? "pending2-"
                  : item.deliveryStatus === "shipped"
                  ? "shipped2-"
                  : item.deliveryStatus === "delivered"
                  ? "delivered2-"
                  :item.deliveryStatus === "dispute" ?"dispute23-":"resolved2-"
              }
            >
              {" "}
              {item.deliveryStatus ? item.deliveryStatus : "Und"}{" "}
            </span>
            <span className='orderDetailPrice'>Kr. {item.purchasedQuantity * item.unitPrice + item.purchasedQuantity * item.deliveryFee}</span>
          </div>
        </div>
      </div>
      {showEachOrderDetails && (
          <div className='OrderItemDetails83Wrapper'>
            <div>
              <EachOrder closeItemDetails={setShowEachOrderDetails} item={item} selectedOrder={selectedOrder} socket={socket} refetchOrder={refetchOrder} setSelectedOrder={setSelectedOrder} />
            </div>
          </div>
        )}
    </>
  );
};

export default SingleOrder;
