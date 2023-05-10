import "../../styles/wishlist/wishlis.css";
import SearchBar from "../reUsable/SearchBar";
import WishItem from "./WishItem.jsx";
import { useState } from "react";

const FilledList = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h4 className='titleMyorder873'>Wish list</h4>
      <div className='wishItemWrapper'>
        <div className='wishListContainer'>
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
          <WishItem />
        </div>
        <div className='wishlistAdd232'>p</div>
      </div>
    </>
  );
};

export default FilledList;
