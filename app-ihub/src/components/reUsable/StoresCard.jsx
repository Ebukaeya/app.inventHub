import { AiFillStar } from "react-icons/ai";

const StoreCard = ({store}) => {
  return (
    <>
      <div className="storeCard">
        <div>
          <img src={store? store.image_url: "https://res.cloudinary.com/ebuka1122/image/upload/v1663400221/Ihub/images_fes7pu.jpg"} />
        </div>
        <div>
          <div>
            <p className="storeName">{store?store.name: "Restaurant Name"}</p>
            <p>
             {store?store.address:"restaurant address"}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar color="#d7b907" size={12} />
            <span style={{ fontSize: "12px", marginLeft: "2px" }}>
              {" "}
              <b>{store?.ratings}</b> rating
            </span>
            <div className="dividerLine"></div>
            <span style={{ fontSize: "12px" }}>
              <b>{store?.follower}</b> followers
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreCard;
