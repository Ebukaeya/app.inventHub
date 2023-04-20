import Narbar from "../reUsable/Navbar";
import SideMenu from "../reUsable/SideMenu";
import SearchBar from "../reUsable/SearchBar";
import Categories from "../reUsable/Categories";
import { useState, useEffect } from "react";
import ProductCard from "../reUsable/ProductCard";
import StoreCard from "../reUsable/StoresCard";
import BottomNavigation from "../reUsable/BottomNavigation";
import LocationFilter from "../reUsable/LocationFilter";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { fetchStores } from "../../api/index.js";

const ExploreStore2 = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const storeCategories = ["Grocery", "Accessories", "Automotive", "Baby wears", "Men wears"];

  useEffect(() => {
    if (localStorage.getItem("data")) {
      console.log("from storage");
      let data = JSON.parse(localStorage.getItem("data"));
      setStores(data.data.stores);
      setLoading(false);
    } else {
      console.log("fetching data");
      fetchStoress();
    }
  }, []);

  const fetchStoress = async () => {
    let { stores } = await fetchStores();
    if (stores.length > 1) {
      setStores(stores);
      setLoading(false);
    } else {
      alert("cant load stores");
    }
  };

  useEffect(() => {
    console.log(locationFilter);
  }, [locationFilter]);

  return (
    <>
      <div className='NavBarProdP'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoIosArrowBack size={30} onClick={() => window.history.back()} />
          <p>Explore Stores</p>
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
          {stores?.map((store) => (
            <Link key={store.id} className='linkreset' to={`/store/${store.id}`}>
              {" "}
              <StoreCard store={store} />
            </Link>
          ))}
        </div>
      </div>

      <LocationFilter curentlocationFilter={locationFilter} updateLocationFliter={setLocationFilter} />
    </>
  );
};

export default ExploreStore2;
