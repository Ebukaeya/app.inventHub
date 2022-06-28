import "../../styles/wishlist/wishlis.css";
import { Link } from "react-router-dom";

const EmptyList = () => {
  return (
    <>
      <div className="mycontainer">
        <div className="EmptyWishPage">
          <div>
            <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656409286/samples/Ihub-Consumer-App/empty-carton-box-500x500-removebg-preview_vty0rp.png" />
            <p>Your Wishlist is Empty</p>
            <p>Click on the heart shape to add an item to your wishlist </p>
            <Link to={"/"}>
              {" "}
              <button className="AddWishlistButton">Add Item</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyList;
