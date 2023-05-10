import "../../styles/bottomNavigation.css";
import { HiHome } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const BottomNavigation = () => {
  const [activePath, setActivePath] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePath("home");
      console.log(location.pathname === "/");
      console.log(location.pathname);
    } else if (
      location.pathname.includes("/explorestores")  ||
      location.pathname.includes("/products") ||
      location.pathname.includes("/food") ||
      location.pathname.includes("/restaurants") 
    ) {
      setActivePath("shoppingBag");
    } else if (location.pathname.includes("/cart")) {
      setActivePath("cart");
    } else if (location.pathname.includes("/wishlist")) {
      setActivePath("wishlist");
    }
  }, [location]);

  const navigate = useNavigate();

  return (
    <>
      <div className='bottomNavCover'>
        <div className='BottomNavWrapper'>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={activePath === "home" ? "navDiv navDivActive" : "navDiv"}
          >
            <HiHome />
          </div>
          <div
            onClick={() => {
              navigate("/products");
            }}
            className={activePath === "shoppingBag" ? "navDiv navDivActive" : "navDiv"}
          >
            <HiShoppingBag />
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className={activePath === "cart" ? "navDiv navDivActive" : "navDiv"}
          >
            <HiShoppingCart />
          </div>

          <div
            onClick={() => {
              navigate("/wishlist");
            }}
            className={activePath === "wishlist" ? "navDiv navDivActive" : "navDiv"}
          >
            <AiFillHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
