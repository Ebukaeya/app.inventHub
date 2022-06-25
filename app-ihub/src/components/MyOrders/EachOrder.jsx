import "../../styles/myorder.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";

const EachOrder = () => {
  return (
    <div className="mycontainer">
      <div className="NavBarProdP">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
        </div>
        <div>
          <BiDotsVerticalRounded size={30} />
        </div>
      </div>
      <div className="eachProductProductDiv">
        <div>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>Iphone 11 pro in da djn djt</p>
          <div className="producTPageSTore">
            <p>Fresh Mart stores</p>
            <p>No.22 Nordre talkaj Denmark</p>
          </div>
        </div>
      </div>
      <div className="DisputeDiv">
        <div>Dispute</div>
        <div>Dispute window will close in 7 days</div>
      </div>
      <div className="rateDivWrapper">
        <p>Rate Item</p>
        <ReactStars classNames={"ratingStar"} size={40} />
        <p>Rate Store</p>
        <ReactStars classNames={"ratingStar"} size={40} />
      </div>
      <div className="OrderDetailsDiv">
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
      <div className="buttonDivDR">
        {" "}
        <button>Download Receipt</button>
      </div>
    </div>
  );
};

export default EachOrder;
