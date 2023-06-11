import "../../styles/myorder.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import DisputeWindow from "./disputeWindow/DisputeWindow";
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { resolveDisputeUrl } from "../../api/StoreAPI";

const EachOrder = ({ closeItemDetails, item, selectedOrder,socket,refetchOrder,setSelectedOrder }) => {
  const [openModal, setOpenModal] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(true);
  const [dispute, setDispute] = useState(null);
  const [disputeStatus, setDisputeStatus] = useState(null); /* when dispute status is resolved */
  const [isDisputeWindowClosed, setIsDisputeWindowClosed] = useState(null); // must turn off all the state when window is closed
  const [disputeWindow, setDisputeWindow] = useState(null); // in days or hours

  useLayoutEffect(() => {
    computeDisputeWindow(selectedOrder.orderDate, item);
    /* check the delivery status of this item */
    if (item.deliveryStatus === "delivered") {
    }

    
    return () => {};
  }, []);

  const computeDisputeWindow = (orderDate, item) => {
    /* add 7 days to the order date */
    let dateDisuteWindowWillClose = new Date(orderDate).getTime() + 1 * 24 * 60 * 60 * 1000;
    let currentDate = new Date().getTime();
    let difference = dateDisuteWindowWillClose - currentDate;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.ceil(difference / (1000 * 60));
   
    console.log(days <= 0,minutes <= 0, item.deliveryStatus!=="dispute");
    if (days <= 0 && hours > 1) {
      setDisputeWindow(`${hours} hours`);
      item.deliveryStatus === "delivered" && orderIsSuppliedSim();
      item.deliveryStatus === "dispute" && itemOnDispute();
      item.deliveryStatus === "resolved" && resolveDispute();
    } else if (days <= 0 && hours <= 1  && minutes>0) {
      setDisputeWindow(`${minutes} minutes`);
      item.deliveryStatus === "delivered" && orderIsSuppliedSim();
      item.deliveryStatus === "dispute" && itemOnDispute();
      item.deliveryStatus === "resolved" && resolveDispute();
    } else if (days <= 0 && minutes <= 0) {
      
      item.deliveryStatus!=="dispute"  &&  disputeWindowClosedSim();
      
    } else {
      setDisputeWindow(`${days} days`);
      item.deliveryStatus === "delivered" && orderIsSuppliedSim();
      item.deliveryStatus === "dispute" && itemOnDispute();
      item.deliveryStatus === "resolved" && resolveDispute();
    }

  };

  const openDisputeWindow = () => {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
    setOpenModal(true);
  };
  const updateDisputeReason = (disputeReason) => {
    setPendingOrder(false);
    setDispute(disputeReason);
    setOpenModal(false);
  };

  const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
/* when item is on dispute */

const itemOnDispute = () => {
  setPendingOrder(false);
  setDispute(true);
  setDisputeStatus(null);
};


  const resolveDispute = () => {
    console.log("resolve dispute");
    setPendingOrder(false);
    setDispute(null);
    setDisputeStatus("resolved");
   
    console.log(disputeStatus);
  };

  /* to happen the order status is supplies and window not closed */
  const orderIsSuppliedSim = () => {
    console.log("order is supplied sim");
    setPendingOrder(false);
    setDispute(null);
    setDisputeStatus(null);
    setIsDisputeWindowClosed(false);
  };

  /* to happen the order window is closed */
  const disputeWindowClosedSim = () => {
    console.log("window is closed sim sim");
    setPendingOrder(false);
    setDispute(null);
    setDisputeStatus(null);
    setIsDisputeWindowClosed(true);
  };

  const resolveDisputeSimFun = async() => {

    try {
      let response = await fetch(resolveDisputeUrl, {
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          linkedPayoutID: item.linkedPayoutID,
          productID: item._id,
          consumerOrderID: selectedOrder.consumerOrderID,
          idToQueryStoreReceievedOrder: selectedOrder.consumerOrderID+"STORE"+item.storeID
        }),
      });

      if( response.ok){
        socket.emit('disputeResolved',{room:item.storeID,item:item.name})
        refetchOrder && refetchOrder();
        let {message, updatedOrder} = await response.json();
        setSelectedOrder(updatedOrder)
        resolveDispute();
      }
      
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <div className='EachOrderContainer11'>
        <div className='NavBarProdP122'>
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <IoIosArrowBack size={30} onClick={() => closeItemDetails(false)} />
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className='eachProductProductDiv'>
          <div>
            <div className='itemDetailImageDiv'>
              <img
                src={item.productImage[0]}
                alt=''
              />
            </div>
            <p>{item.name} </p>
            <div className='producTPageSTore'>
              <p>{item.storeName} </p>
              <p>{item.storeAddress}</p>
            </div>
          </div>
        </div>

        {/* state 1 pending order */}
        {pendingOrder && (
          <div className='DisputeDiv'>
            <div onClick={openDisputeWindow}>Dispute</div>
            {openModal && <DisputeWindow closeModel={setOpenModal} updateDispute={updateDisputeReason} item={item} consumerOrderID={selectedOrder.consumerOrderID} socket={socket} refetchOrder={refetchOrder} setSelectedOrder={setSelectedOrder} />}
            <div>Dispute window will close in {disputeWindow} </div>
          </div>
        )}

        {/* state 2 dispute is raised */}
        {dispute && (
          <div className='DisputeRaisedDiv'>
            <div>
              {" "}
              <div>Dispute</div>
              <p>Dispute raised on {getCurrentDate()}</p>
            </div>
            <div style={{cursor:"pointer"}} onClick={resolveDisputeSimFun}>Resolve</div>
          </div>
        )}

        {/* state 3 dispute is resolved */}
        {disputeStatus && (
          <div className='RoslvedDisputeDiv'>
            <div>
              {" "}
              <div onClick={() => orderIsSuppliedSim()}>Dispute</div>
              <p>Dispute resovled on {getCurrentDate()}</p>
            </div>
            <div>
              <Link className='linkreset' to={"/"}>
                Buy again
              </Link>
            </div>
          </div>
        )}

        {/* state 4 order not pending i.e supplied */}

        {!dispute && !disputeStatus && !pendingOrder && !isDisputeWindowClosed && (
          <div className='RoslvedDisputeDiv'>
            <div>
              {" "}
              
              <div id='orderIsSupplied' onClick={() => openDisputeWindow()}>
                Dispute 
              </div>
              {openModal && <DisputeWindow closeModel={setOpenModal} updateDispute={updateDisputeReason} item={item} consumerOrderID={selectedOrder.consumerOrderID} socket={socket} refetchOrder={refetchOrder} setSelectedOrder={setSelectedOrder}/>}
              <p>Dispute window will close in {disputeWindow}</p>
            </div>
            <div>
              <Link className='linkreset' to={"/"}>
                Buy again
              </Link>
            </div>
          </div>
        )}

        {/* state 5 dispute window closed automatically. */}
        {!dispute && !disputeStatus && !pendingOrder && isDisputeWindowClosed && (
          <div className='RoslvedDisputeDiv'>
            <div>
              {" "}
              <div>Dispute</div>
              <p>Dispute window closed after 7 days</p>
            </div>
            <div>
              <Link className='linkreset' to={"/"}>
                Buy again
              </Link>
            </div>
          </div>
        )}

        <div className='rateDivWrapper'>
          <p>Rate Item</p>
          <ReactStars classNames={"ratingStar"} size={40} />
          <p>Rate Store</p>
          <ReactStars classNames={"ratingStar"} size={40} />
        </div>
        <div className='OrderDetailsDiv'>
          <p>Order Details</p>
          <div>
            <p>Order date</p>
            <p>{selectedOrder.orderDate.split("T")[0]}</p>
          </div>
          <div>
            <p>Order ID</p>
            <p>171-4127</p>
          </div>
          <div>
            <p>Product ID</p>
            <p>Pra-4127</p>
          </div>
          <div>
            <p>Seller's No</p>
            <p>+4591447264</p>
          </div>
          <div>
            <p>Quantity</p>
            <p> {item.purchasedQuantity} </p>
          </div>
          <div>
            <p>Unit Price</p>
            <p>Kr. {item.unitPrice}</p>
          </div>
          <div>
            <p>Total Price</p>
            <p>Kr. {item.purchasedQuantity*item.unitPrice}</p>
          </div>
        </div>
        <div className='buttonDivDR'>
          {" "}
          <button>Download Receipt</button>
        </div>
      </div>
    </>
  );
};

export default EachOrder;
