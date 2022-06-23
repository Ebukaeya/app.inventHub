import Narbar from "./reUsable/Navbar";
import SideMenu from "./reUsable/SideMenu";
import SearchBar from "./reUsable/SearchBar";
import Categories from "./reUsable/Categories";
import { useState, useEffect } from "react";
import ProductCard from "./reUsable/ProductCard";
import StoreCard from "./reUsable/StoresCard";
import BottomNavigation from "./reUsable/BottomNavigation";
import LocationFilter from "./reUsable/LocationFilter";
import { Link } from "react-router-dom";

const ExploreStores = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");

  const storeCategories = [
    "Grocery",
    "Accessories",
    "Automotive",
    "Baby wears",
    "Men wears",
  ];

  useEffect(() => {
    console.log(locationFilter);
  }, [locationFilter]);

  return (
    <>
      <Narbar />
      <SearchBar controlInput={setSearch} />
      <Categories
        categories={storeCategories}
        updateCategories={setCategories}
      />
      <ProductCard />

      <div className="mycontainer">
        <div className="storeCardWrapper">
          <Link className="linkreset" to={"/store/storeId"}>
            {" "}
            <StoreCard />
          </Link>
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <BottomNavigation />
        </div>
      </div>

      <SideMenu />
      <LocationFilter
        curentlocationFilter={locationFilter}
        updateLocationFliter={setLocationFilter}
      />
    </>
  );
};

export default ExploreStores;
