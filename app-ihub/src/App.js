import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import CheckOutPage from "./components/checkOut/CheckOut.jsx";
import MyOrderMain from "./components/MyOrders/MyOrderMain";
import MyOrderListDetail from "./components/MyOrders/MyOrderLisrDetail";
import { useState, useEffect, useMemo } from "react";
import MessagesPage from "./components/messages/MessagesPage";
import MessageDetailPage from "./components/messages/MessageDetailPage";
import { io } from "socket.io-client";
import SignIn from "./components/signin/SignIn";
import { useSelector } from "react-redux";

function App() {
  const [tabletScreen, setTabletScreen] = useState(false);
  const { profile } = useSelector((state) => state.profile);

  const socket = useMemo(
    () =>
      io(process.env.REACT_APP_SOCKET_ROOT, {
        transports: ["websocket"] /* auth can be provided in the future */,
      }),
    []
  );

  const consumerSocket = useMemo(
    () =>
      io(process.env.REACT_APP_CONSUMERSERVER_ROOT, {
        transports: ["websocket"] /* auth can be provided in the future */,
      }),
    []
  );

  useEffect(() => {
    updateViewPort();
    /*   zoomOutOnFocusOut(); */
    if (window.innerWidth <= 768) {
      setTabletScreen(true);
    } else {
      setTabletScreen(false);
    }
    profile && socketConnectionWebstoreServer();
   
    profile && socketConnectionConsumerServer();
  }, []);

  const socketConnectionWebstoreServer = () => {
    socket.on("connect", () => {
      console.log("connected to socket");
      socket.emit("createRoom", profile._id);
    });
  };

  const socketConnectionConsumerServer = () => {
    consumerSocket.on("connect", () => {
      console.log("connected to socket");
      consumerSocket.emit("createRoom", profile._id);
    });
  };

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
        <Route path='/explorestores/store/:storeID' element={<StoreDetailsMain socket={socket} />} />
        <Route path='/explorestores' element={<ExploreStoreMain />} />
        <Route path='/cart' element={<CartMain />} />
        <Route path='/cart/check-out' element={<CheckOutPage />} />
        <Route path='/my-orders' element={<MyOrderMain />} />
        {tabletScreen && <Route path='/my-orders/:orderID' element={<MyOrderListDetail />} />}
        <Route path='/messages' element={<MessagesPage screenType={tabletScreen} socket={socket} />} />
        {tabletScreen && <Route path='/messages/:chatID' element={<MessageDetailPage socket={socket}  />} />}
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        {/* old */}

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
