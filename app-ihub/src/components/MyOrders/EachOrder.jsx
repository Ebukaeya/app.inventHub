import "../../styles/myorder.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import DisputeWindow from "./disputeWindow/DisputeWindow";
import { useState } from "react";
import { Link } from "react-router-dom";

const EachOrder = ({closeItemDetails}) => {
  const [openModal, setOpenModal] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(true);
  const [dispute, setDispute] = useState(null);
  const [disputeStatus, setDisputeStatus] = useState(null);
  const [isDisputeWindowClosed, setIsDisputeWindowClosed] = useState(null); // must turn off all the state when window is closed

  const openDisputeWindow = () => {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
    setOpenModal(true);
  };
  const updateDisputeReason = (dispute) => {
    setPendingOrder(false);
    setDispute(dispute);
    setOpenModal(false);
  };

  const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
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

  return (
    <>
      <div className='EachOrderContainer11'>
        <div className='NavBarProdP122'>
          <div style={{ display: "flex", alignItems: "center", cursor:"pointer" }}>
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
                src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
            </div>
            <p>Iphone 11 pro in da djn djt</p>
            <div className='producTPageSTore'>
              <p>Fresh Mart stores</p>
              <p>No.22 Nordre talkaj Denmark bfje fjv fvewrf vwjrfv erwjver vjerv</p>
            </div>
          </div>
        </div>

        {/* state 1 pending order */}
        {pendingOrder && (
          <div className='DisputeDiv'>
            <div onClick={openDisputeWindow}>Dispute</div>
            {openModal && <DisputeWindow closeModel={setOpenModal} updateDispute={updateDisputeReason} />}
            <div>Dispute window will close in 7 days</div>
          </div>
        )}

        {/* state 2 dispute raised */}
        {dispute && (
          <div className='DisputeRaisedDiv'>
            <div>
              {" "}
              <div>Dispute</div>
              <p>Dispute raised on {getCurrentDate()}</p>
            </div>
            <div onClick={resolveDispute}>Resolve</div>
          </div>
        )}

        {/* state 3 dispute resolved */}
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
              <div id='orderIsSupplied' onClick={() => disputeWindowClosedSim()}>
                Dispute
              </div>
              <p>Dispute window will close in 7 days</p>
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
              <p>Dispute window close after 7 days</p>
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
            <p>15, August 2021</p>
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
            <p>1</p>
          </div>
          <div>
            <p>Unit Price</p>
            <p>Kr. 200</p>
          </div>
          <div>
            <p>Total Price</p>
            <p>Kr. 200</p>
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
