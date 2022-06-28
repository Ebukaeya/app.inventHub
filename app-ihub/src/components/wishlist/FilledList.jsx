import "../../styles/wishlist/wishlis.css";
import SearchBar from "../reUsable/SearchBar";
import WishItem from "./WishItem.jsx";
import { useState } from "react";

const FilledList = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mycontainer">
        <SearchBar
          controlInput={setSearch}
          placeholder={"Search your wishlist"}
        />
        <div className="wishItemWrapper">

        <WishItem/>
        <WishItem/>
        
        </div>
      </div>
    </>
  );
};

export default FilledList;
