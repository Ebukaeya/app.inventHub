import "../../styles/wishlist/wishlis.css";
import Narbar from "../../components/reUsable/Navbar";
import BottomNavigation from "../reUsable/BottomNavigation";
import EmptyList from "./EmptyList";
import { useState } from "react";
import FilledList from "./FilledList";
import SideMenu from "../reUsable/SideMenu";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <>
      <Narbar />
     { !wishlist && <EmptyList />}
     { wishlist && <FilledList/>}
      <BottomNavigation />
        <SideMenu />
    </>
  );
};

export default Wishlist;
