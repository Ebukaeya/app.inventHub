import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import ExploreStores  from "./components/ExploreStores";
import Restaurants from "./components/Restaurants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import FoodDetails from "./components/FoodDetails";
import StoreDetails from "./components/StoreDetails"
import StoreDetails2 from "./components/StoreDetails2"
import RestaurantDetails from "./components/RestaurantDetail";
import RestaurantDetail from "./components/RestaurantDetail";



function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<ExploreStores />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:restuarantID" element={<RestaurantDetail />} />
        <Route path="/food/:foodID" element={<FoodDetails/>} />
        <Route path="/product/:productID" element={<ProductDetails/>} />
        <Route path="/store/:storeID" element={<StoreDetails/>} />
        <Route path="/store/:storeID/2" element={<StoreDetails2/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter> 
  /*   <>
      <HomePage />
    </> */
  );
}

export default App;