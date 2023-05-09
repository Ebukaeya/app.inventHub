import { AiOutlineRight } from "react-icons/ai";


const SingleOrder = ({openModal}) => {
  return (
    <>
      <div onClick={()=>openModal(true)} className="bulkOrderDiv newPos">
        <div>
          <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656114183/samples/Ihub-Consumer-App/images_ostgjp.jpg" />
        </div>
        <div className="newPos">
          <div className="orderItemTitle">
            <p>Iphone 11 bro max njihefu</p>
          </div>
          <div>
            <span className="orderItemShop">Tega Mobile sevice jion</span>
            <AiOutlineRight size={12} color="gray" />
          </div>
          <div>
            <span className="pending2-">pending</span>
            <span className="orderDetailPrice">Kr. 15000</span>
          </div>
        </div>
      </div>

     
     
    </>
  );
};

export default SingleOrder;
