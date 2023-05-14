/* import Narbar from "./reUsable/Navbar";
import SideMenu from "./reUsable/SideMenu";
import SearchBar from "./reUsable/SearchBar";
import Categories from "./reUsable/Categories";
import { useState, useEffect } from "react";
import ProductCard from "./reUsable/ProductCard";
import StoreCard from "./reUsable/StoresCard";
import BottomNavigation from "./reUsable/BottomNavigation";
import LocationFilter from "./reUsable/LocationFilter";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";

const ExploreRestaurant = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");

  const storeCategories = ["Grocery", "Accessories", "Automotive", "Baby wears", "Men wears"];

  useEffect(() => {
    console.log(locationFilter);
  }, [locationFilter]);

  return (
    <>
      <div className='NavBarProdP'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <p>Explore restaurants</p>
        </div>
        <div>
          <BiDotsVerticalRounded size={30} />
        </div>
      </div>
      <SearchBar controlInput={setSearch} />
      <Categories categories={storeCategories} updateCategories={setCategories} />
      <div style={{ margin: "30px" }}></div>
      <div className='mycontainer'>
        <div className='storeCardWrapper'>
          <Link className='linkreset' to={"/store/storeId"}>
            {" "}
            <StoreCard />
          </Link>
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </div>

      <LocationFilter curentlocationFilter={locationFilter} updateLocationFliter={setLocationFilter} />
    </>
  );
};

export default ExploreRestaurant;
 */