import Narbar from "./reUsable/Navbar";
import SideMenu from "./reUsable/SideMenu";
import SearchBar from "./reUsable/SearchBar";
import Categories from "./reUsable/Categories";
import { useState } from "react";
import BottomNavigation from "./reUsable/BottomNavigation";
import Foods from "./reUsable/Foods";
import StoreCard from "./reUsable/StoresCard";

const Restaurants = (props) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  console.log(categories);

  const storeCategories = [
    "Fast food",
    "Native food",
    "Spanish",
    "Pizzeria",
    "Burger place",
    "Italian",
    "Chinese",
    "small chops",
    "others",
  ];

  return (
    <>
      <Narbar />
      <SearchBar controlInput={setSearch} />
      <Categories
        categories={storeCategories}
        updateCategories={setCategories}
      />
      <div className="mycontainer">
        <div style={{ marginTop: "20px" }} className="titleFlex">
          <p>Favourite products</p>
          <p>see all</p>
        </div>
        <div className="foodWrapper">
          <Foods />
          <Foods />
          <Foods />
          <Foods />
          <Foods />
        </div>
        <div className="titleFlex">
          <p>Best rated stores</p>
          <p>see all</p>
        </div>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
      <BottomNavigation />
      <SideMenu />
    </>
  );
};

export default Restaurants;
