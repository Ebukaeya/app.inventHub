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

const ExploreStores = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const storeCategories = [
    "Grocery",
    "Accessories",
    "Automotive",
    "Baby wears",
    "Men wears",
  ];

  useEffect(() => {
    fetchStoresAndProducts();
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
        console.log(data.data.stores);
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
      <Narbar />
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
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="linkreset">
                {" "}
                <Product productDetail= {product}  />
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
