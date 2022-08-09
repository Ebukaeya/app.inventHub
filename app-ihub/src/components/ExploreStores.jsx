//import "dotenv/config";
import Narbar from "./reUsable/Navbar";
import SideMenu from "./reUsable/SideMenu";
import SearchBar from "./reUsable/SearchBar";
import Categories from "./reUsable/Categories";

import { useState, useEffect } from "react";
import Product from "./reUsable/Product";
import StoreCard from "./reUsable/StoresCard";
import BottomNavigation from "./reUsable/BottomNavigation";
import LocationFilter from "./reUsable/LocationFilter";
import { Link } from "react-router-dom";
import { fetchStoresAndProductsUrl, token } from "../api/index.js";
import SkeletonLoad from "./loaders/SkeletonLoad";
import { useSelector } from "react-redux";

const ExploreStores = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const profile = useSelector((state) => state.profile.profile);
  console.log(profile);

  const storeCategories = [
    "Grocery",
    "Accessories",
    "Automotive",
    "Baby wears",
    "Men wears",
  ];

  useEffect(() => {
    if (localStorage.getItem("data")) {
      console.log("from storage");
      let data =    JSON.parse(localStorage.getItem("data"))
      setStores(data.data.stores);
      setProducts(data.data.top_products);
      setLoading(false);
    } else {
      console.log("fetching data");
      fetchStoresAndProducts();
    }
  }, []);

  useEffect(() => {}, [locationFilter]);

  const fetchStoresAndProducts = async () => {
    const endpiont = fetchStoresAndProductsUrl;
    try {
      console.log(loading);
      const response = await fetch(endpiont, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data));
        setStores(data.data.stores);
        setProducts(data.data.top_products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      {profile && <Narbar />}
      {!profile && <div style={{ marginTop: "20px" }}></div>}
      <SearchBar controlInput={setSearch} />
      <Categories
        categories={storeCategories.sort((a, b) => a - b)}
        updateCategories={setCategories}
      />
      <div className="mycontainer">
        <div className="Product">
          <div className="titleFlex">
            <p>Favourite products</p>
            <p>
              {" "}
              <Link className="linkreset" to={"/products"}>
                {" "}
                see all
              </Link>
            </p>
          </div>
          <div className="productCardWrapper">
            {products.slice(0, 12).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="linkreset"
              >
                {" "}
                <Product productDetail={product} />
              </Link>
            ))}
          </div>

          <div className="titleFlex">
            <p>Best rated stores</p>
            <p>
              <Link className="linkreset" to={"/explorestores"}>
                see all
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mycontainer">
        <div className="storeCardWrapper">
          {stores.slice(0, 6).map((store) => (
            <Link
              key={store.id}
              className="linkreset"
              to={`/store/${store.id}`}
            >
              {" "}
              <StoreCard store={store} />
            </Link>
          ))}

          <BottomNavigation />
        </div>
      </div>

      <SideMenu />
      <LocationFilter
        curentlocationFilter={locationFilter}
        updateLocationFliter={setLocationFilter}
      />
      {loading && <SkeletonLoad />}
    </>
  );
};

export default ExploreStores;
