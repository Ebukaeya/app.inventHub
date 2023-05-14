/* import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "./reUsable/SearchBar";
import { useState } from "react";
import Categories from "./reUsable/Categories";
import { Link } from "react-router-dom";
import LocationFilter from "./reUsable/LocationFilter";
import FoodMenu from "./reUsable/FoodMenu";

const SeeAllFoodMenu = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");

  const storeCategories = ["Fast food", "Native food", "Spanish", "Pizzeria", "Burger place", "Italian", "Chinese", "small chops", "others"];
  return (
    <>
      <div className='mycontainer'>
        <div className='NavBarProdP'>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>Food Menu</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <SearchBar controlInput={setSearch} />
        <Categories categories={storeCategories} updateCategories={setCategories} />
        <div style={{ margin: "30px" }}></div>
        <div className='FoodRWrapper'>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/food/foodID"}>
            {" "}
            <FoodMenu />
          </Link>
        </div>
        <LocationFilter curentlocationFilter={locationFilter} updateLocationFliter={setLocationFilter} />
      </div>
    </>
  );
};

export default SeeAllFoodMenu;
 */