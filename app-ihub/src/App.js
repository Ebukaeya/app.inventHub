import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import ExploreStores from "./components/exploreProducts/ExploreStores";
import Restaurants from "./components/Restaurants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/exploreProducts/ProductDetails";
import FoodDetails from "./components/FoodDetails";
import StoreDetails from "./components/exploreProducts/StoreDetails";
import StoreDetails2 from "./components/exploreProducts/StoreDetails2";
import RestaurantDetail from "./components/RestaurantDetail";
import SeeAllProducts from "./components/exploreProducts/SeeAllProducts";
import ExploreStores2 from "./components/exploreProducts/ExploreStore2";
import SeeAllFoodMenu from "./components/SellAllFoodMenu";
import ExploreRestaurant from "./components/ExploreRestaurants";
import Cart from "./components/cart/Cart";
import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import EachOrder from "./components/MyOrders/EachOrder";
import Profile from "./components/profile/ProfileSection";
import WishList from "./components/wishlist/WishList";
import SignUp from "./components/signUp/signUp";
/* import PaymentPage from "./components/payment/PaymentPage"; */
/* import ConfirmedPayment from "./components/payment/ConfirmedPayment"; */
import ExploreProducts from "./components/exploreProducts/ExploreProducts";
import ExploreProductCategory from "./components/exploreProducts/ExploreProductCategory";
import ProductDetailsMain from "./components/exploreProducts/ProductDetailsMain";
import ExploreStoreMain from "./components/exploreStores/ExploreStoreMain";
import StoreDetailsMain from "./components/exploreStores/StoreDetailsMain";
import CartMain from "./components/cart/CartMain";
import PaymentPage from "./components/payment/PaymentPage";
import CheckOutPage from "./components/checkOut/CheckOut.jsx";
import MyOrderMain from "./components/MyOrders/MyOrderMain";
import MyOrderListDetail from "./components/MyOrders/MyOrderLisrDetail";
import { useState, useEffect } from "react";
import MessagesPage from "./components/messages/MessagesPage";
import MessageDetailPage from "./components/messages/MessageDetailPage";

function App() {
  const [tabletScreen, setTabletScreen] = useState(false);

  useEffect(() => {
    updateViewPort();
  /*   zoomOutOnFocusOut(); */
    if (window.innerWidth <= 768) {
      setTabletScreen(true);
    } else {
      setTabletScreen(false);
    }
  }, []);

  window.onresize = () => {
    updateViewPort();
    if (window.innerWidth <= 768) {
      /* zoomOutOnFocusOut(); */
      setTabletScreen(true);
    } else {
      setTabletScreen(false);
    }
  };
  const updateViewPort = () => {
    let viewport = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${viewport}px`);
    console.log(viewport);
  };

/*   const zoomOutOnFocusOut = () => {
    let inputTags = document.querySelectorAll("input, textarea, select");
    inputTags.forEach((inputTag) => {
      inputTag.addEventListener("focusout", () => {
        document.meta["viewport"].content = "width=device-width, initial-scale=1.0, ";
      });
    });
  }; */

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/*  <Route path='/stores' element={<ExploreStores />} /> */}
        <Route path='/products' element={<ExploreProducts />} />
        <Route path='/products/category/:productCategory' element={<ExploreProductCategory />} />
        <Route path='/product/:productID' element={<ProductDetailsMain />} />
        <Route path='/explorestores/store/:storeID' element={<StoreDetailsMain />} />
        <Route path='/explorestores' element={<ExploreStoreMain />} />
        <Route path='/cart' element={<CartMain />} />
        <Route path='/cart/check-out' element={<CheckOutPage />} />
        <Route path='/my-orders' element={<MyOrderMain />} />
        {tabletScreen && <Route path='/my-orders/:orderID' element={<MyOrderListDetail />} />}
        <Route path='/messages' element={<MessagesPage screenType={tabletScreen} />} />
        {tabletScreen && <Route path='/messages/:chatID' element={<MessageDetailPage />} />}

        {/* old */}
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/explore-restaurants' element={<ExploreRestaurant />} />
        <Route path='/explore-foodmenu' element={<SeeAllFoodMenu />} />
        <Route path='/restaurants/:restuarantID' element={<RestaurantDetail />} />
        <Route path='/food/:foodID' element={<FoodDetails />} />
        {/* <Route path='/product/:productID' element={<ProductDetails />} /> */}
        {/*    <Route path='/store/:storeID' element={<StoreDetails />} />
        <Route path='/store/:storeID/2' element={<StoreDetails2 />} /> */}
        <Route path='/products' element={<SeeAllProducts />} />

        <Route path='/myorder' element={<MyOrders />} />

        <Route path='/order-details/:orderID/:productID' element={<EachOrder />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/signup' element={<SignUp />} />
        {<Route path='/Secure_payment' element={<PaymentPage />} />}
        {/* <Route path='/Secure_payment/confirmation' element={<ConfirmedPayment />} /> */}
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
    /*   <>
      <HomePage />
    </> */
  );
}

export default App;
