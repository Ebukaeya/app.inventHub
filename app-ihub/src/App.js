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
import RestaurantDetail from "./components/RestaurantDetail";
import SeeAllProducts from "./components/SeeAllProducts";
import ExploreStores2 from "./components/ExploreStore2";
import SeeAllFoodMenu from "./components/SellAllFoodMenu";
import ExploreRestaurant from "./components/ExploreRestaurants";
import Cart from "./components/cart/Cart";
import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import EachOrder from "./components/MyOrders/EachOrder";
import Profile from "./components/profile/ProfileSection";
import WishList from "./components/wishlist/WishList";
import SignUp from "./components/signUp/signUp";
import PaymentPage from "./components/payment/PaymentPage";
import ConfirmedPayment from "./components/payment/ConfirmedPayment";
import SignIn from "./components/signin/SignIn";


setInterval(()=>{
  console.log("interval");
 // fetchStoresAndProducts();
localStorage.removeItem("data");
},600000);



function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<ExploreStores />} />
        <Route path="/explorestores" element={<ExploreStores2/>} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/explore-restaurants" element={<ExploreRestaurant/>} />
        <Route path="/explore-foodmenu" element={<SeeAllFoodMenu/>} />
        <Route path="/restaurants/:restuarantID" element={<RestaurantDetail />} />
        <Route path="/food/:foodID" element={<FoodDetails/>} />
        <Route path="/product/:productID" element={<ProductDetails/>} />
        <Route path="/store/:storeID" element={<StoreDetails/>} />
        <Route path="/store/:storeID/2" element={<StoreDetails2/>} />
        <Route path="/products" element={<SeeAllProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/myorder" element={<MyOrders/>} />
        <Route path="/order-details/:orderID" element={<OrderDetails/>} />
        <Route path="/order-details/:orderID/:productID" element={<EachOrder/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/wishlist" element={ <WishList/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/Secure_payment" element={<PaymentPage/>} />
        <Route path="/Secure_payment/confirmation" element={<ConfirmedPayment/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter> 
  /*   <>
      <HomePage />
    </> */
  );
}

export default App;
