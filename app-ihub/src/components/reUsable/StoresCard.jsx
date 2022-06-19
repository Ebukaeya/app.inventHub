import { AiFillStar } from "react-icons/ai";

const StoreCard = () => {
  return (
    <>
      <div className="storeCard">
        <div>
          <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655643691/samples/Ihub-Consumer-App/download_pthu7h.png" />
        </div>
        <div>
          <div>
            <p className="storeName">Store Name</p>
            <p>
              Store Address kene jkesnd jked jjed ed ededkek rrrjnjd j edfj j
              ejd je djedj jed jernj j jdefj jedj fdj jenje jkne ekk e kerj ke
              rkeij irnei jernfier jrer ej re r ker der die
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar color="#d7b907" size={12} />
            <span style={{ fontSize: "12px", marginLeft: "2px" }}>
              {" "}
              <b>4.0 </b> rating
            </span>
            <div className="dividerLine"></div>
            <span style={{ fontSize: "12px" }}>
              <b>20k</b> followers
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreCard;
