/* import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import SearchBar from "../reUsable/SearchBar";
import { useState, useEffect } from "react";
import Categories from "../reUsable/Categories";
import Product2 from "../reUsable/Product2";
import LocationFilter from "../reUsable/LocationFilter";
import { fetchStoresAndProductsUrl, token } from "../../api/StoreAPI.js";

const SeeAllProducts = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("All");
  const [locationFilter, setLocationFilter] = useState("nearby");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const storeCategories = ["Grocery", "Accessories", "Automotive", "Baby wears", "Men wears"];

  useEffect(() => {
    if (localStorage.getItem("data")) {
      let data = JSON.parse(localStorage.getItem("data"));
      setProducts(data.data.top_products);
      setLoading(false);
    } else {
      fetchAllProducts();
    }
  }, []);

  const fetchAllProducts = async () => {
    try {
      const endpiont = fetchStoresAndProductsUrl;
      const response = await fetch(endpiont, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data));
        setProducts(data.data.top_products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='mycontainer'>
        <div className='NavBarProdP'>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>Products</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <SearchBar controlInput={setSearch} />
        <Categories categories={storeCategories} updateCategories={setCategories} />
        <div style={{ margin: "30px" }}></div>
        <div className='Store2productWrapper'>
          {products.map((product) => (
            <Product2 key={product.id} product={product} />
          ))}
          <LocationFilter curentlocationFilter={locationFilter} updateLocationFliter={setLocationFilter} />
        </div>
      </div>
    </>
  );
};

export default SeeAllProducts;
 */