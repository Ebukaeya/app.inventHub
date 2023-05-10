import "../../styles/wishlist/wishlis.css";
import Narbar from "../../components/reUsable/Navbar";
import BottomNavigation from "../reUsable/BottomNavigation";
import EmptyList from "./EmptyList";
import { useState } from "react";
import FilledList from "./FilledList";
import Template from "../Template";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <>
      <Template>
        {!wishlist && <EmptyList />}
        {wishlist && <FilledList />}
        <BottomNavigation />
      </Template>
    </>
  );
};

export default Wishlist;
