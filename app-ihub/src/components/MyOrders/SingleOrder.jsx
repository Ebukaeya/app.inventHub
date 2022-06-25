import { AiOutlineRight } from "react-icons/ai";

const SingleOrder = (props) => {
  return (
    <>
      <div className="bulkOrderDiv newPos">
        <div>
          <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656114183/samples/Ihub-Consumer-App/images_ostgjp.jpg" />
        </div>
        <div className="newPos">
          <div className="orderItemTitle">
            <p>Iphone 11 bro max njihefu</p>
          </div>
          <div>
            <span className="orderItemShop">Tega Mobile sevice jion</span>
            <AiOutlineRight color="gray" />
          </div>
          <div>
            <span className="pending2-">pending</span>
            <span className="orderDetailPrice">Kr. 15000</span>
          </div>
        </div>
      </div>
      <div className="OrderDetailsTotal">
        <div>
          <p>Total Order</p>
          <p>£ 9999.9</p>
        </div>
      </div>
    </>
  );
};

export default SingleOrder;
