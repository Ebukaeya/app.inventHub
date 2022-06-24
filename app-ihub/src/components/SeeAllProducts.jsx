import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "./reUsable/SearchBar";
import { useState } from "react";
import Categories from "./reUsable/Categories";
import Product2 from "./reUsable/Product2";
import LocationFilter from "./reUsable/LocationFilter";


const SeeAllProducts = () => {
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
  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <div style={{display:"flex", alignItems:"center"}}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>Products</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <SearchBar controlInput={setSearch} />
        <Categories
          categories={storeCategories}
          updateCategories={setCategories}
        />
        <div style={{margin:"30px"}}></div>
        <div className="Store2productWrapper">
        <Product2 /> {/* should recieve as props brand, id, name rating size and price */}
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />

        <LocationFilter
        curentlocationFilter={locationFilter}
        updateLocationFliter={setLocationFilter}
      />
        
    
        </div>
      </div>
    </>
  );
};

export default SeeAllProducts;
