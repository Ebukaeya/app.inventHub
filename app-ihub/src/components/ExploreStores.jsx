import Narbar from "./reUsable/Navbar";
import SideMenu from "./reUsable/SideMenu";
import SearchBar from "./reUsable/SearchBar";
import Categories from "./reUsable/Categories";
import { useState } from "react";
import ProductCard from "./reUsable/ProductCard";
import StoreCard from "./reUsable/StoresCard";
import BottomNavigation from "./reUsable/BottomNavigation";

const ExploreStores = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  console.log(categories);

  const storeCategories = [
    "Grocery",
    "Accessories",
    "Automotive",
    "Baby wears",
    "Men wears",
  ];

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
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <BottomNavigation/>
        </div>
      </div>

      <SideMenu />
    
    </>
  );
};

export default ExploreStores;
