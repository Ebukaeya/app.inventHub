import "../styles/template.css";
import { RiDashboardFill } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
//import Narbar from "../components/narbar/Narbar";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Narbar from "./narbar/Narbar";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { BsBook, BsTruck, BsShop } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { IoSettingsOutline, IoChatbubblesOutline, IoFastFoodOutline } from "react-icons/io5";

const Template = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClick = (e, path) => {
    navigate(path);
  };

  return (
    <>
      {/* <Narbar /> */}
      <Narbar />
      <div className='TemplateContain'>
        <div className='templateWrapper'>
          <div>
            <div className='StorePlaceholder'></div>
            <div className={"sideMenu12"}>
              <div className={location.pathname === "/" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/")}>
                <HiOutlineHome />
                <span>Home</span>
              </div>
              <div className={location.pathname.includes("/my-orders") ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/my-orders")}>
                <MdOutlineShoppingBasket />
                <span>My Orders</span>
              </div>

              <div
                className={location.pathname.includes("/bookings") ? "clickedOption" : ""}
                onClick={(e) => {
                  handleClick(e, "/bookings");
                }}
              >
                <BsBook />
                <span>My bookings</span>
              </div>
              <div
                className={location.pathname.includes("/explorestores") ? "clickedOption" : ""}
                onClick={(e) => {
                  handleClick(e, "/explorestores");
                }}
              >
                <BsShop />
                <span>Explore stores</span>
              </div>
              <div className={location.pathname === "/restaurant" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/restaurants")}>
                <IoFastFoodOutline />
                <span>Order food</span>
              </div>
              <div className={location.pathname === "/logistics" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/logistics")}>
                <BsTruck />
                <span>Find logistics</span>
              </div>
              <div className={location.pathname === "/book-service" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/services")}>
                <VscTools />
                <span>Book services</span>
              </div>
              <div className={location.pathname === "/messages" ? "clickedOption" : ""} onClick={(e) => handleClick(e, "/messages")}>
                <IoChatbubblesOutline />
                <span>Chats</span>
              </div>
            </div>
            <div className='signOutDiv'>
              <div>a</div>
              <div>Sign out</div>
            </div>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Template;
