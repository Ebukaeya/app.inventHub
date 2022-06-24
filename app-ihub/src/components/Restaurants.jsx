import Narbar from "./reUsable/Navbar";
import SideMenu from "./reUsable/SideMenu";
import SearchBar from "./reUsable/SearchBar";
import Categories from "./reUsable/Categories";
import { useState } from "react";
import BottomNavigation from "./reUsable/BottomNavigation";
import Foods from "./reUsable/Foods";
import StoreCard from "./reUsable/StoresCard";
import LocationFilter from "./reUsable/LocationFilter";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");
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
          <p><Link className="linkreset" to={"/explore-foodmenu"}>see all</Link></p>
        </div>
        <div className="foodWrapper">
          <Link className="linkreset" to={"/food/jbjwbu"}>
            {" "}
            <Foods />
          </Link>
          <Link className="linkreset" to={"/food/jbjwbu"}>
            {" "}
            <Foods />
          </Link>
          <Link className="linkreset" to={"/food/jbjwbu"}>
            {" "}
            <Foods />
          </Link>
          <Link className="linkreset" to={"/food/jbjwbu"}>
            {" "}
            <Foods />
          </Link>
          <Link className="linkreset" to={"/food/jbjwbu"}>
            {" "}
            <Foods />
          </Link>
        </div>
        <div style={{ marginTop: "20px" }} className="titleFlex">
          <p>Best rated restaurants</p>
          <p><Link className="linkreset" to={"/explore-restaurants"}>see all</Link></p>
        </div>
        <div style={{ marginBottom: "130px" }}>
          <Link className="linkreset" to={"/restaurants/restuarantID"}>
            {" "}
            <StoreCard />
          </Link>
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </div>
      <BottomNavigation />
      <SideMenu />
      <LocationFilter
        curentlocationFilter={locationFilter}
        updateLocationFliter={setLocationFilter}
      />
    </>
  );
};

export default Restaurants;
