import "../../styles/sidemenu.css";
import { Link } from "react-router-dom";
import{BsBook, BsTruck, BsShop} from "react-icons/bs";
import {MdOutlineShoppingBasket} from "react-icons/md";
import {IoSettingsOutline, IoChatbubblesOutline, IoFastFoodOutline} from "react-icons/io5";
import {VscTools} from "react-icons/vsc";

const sideMenu = () => {
  const closeSideMenu = () => {
    let sideMenu = document.querySelector(".sideMenu");
    let cover = document.querySelector(".cover");
    console.log(cover);
    cover.style.display = "none";
    sideMenu.classList.remove("open");
  };

  return (
    <>
      <div onClick={closeSideMenu} className="cover">
        <div className="sideMenu">
          <div>
            <div className="imageWrapper">
              {" "}
              <img
                className="SidebarImage"
                src="https://res.cloudinary.com/ebuka1122/image/upload/v1655499719/samples/Ihub-Consumer-App/linkpic2_nqxxhx.png"
              />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>Ebuka Eya</p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "300",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              eyaebuka@gmail.com
            </p>
            <div className="pencil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
          </div>
          <div>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <MdOutlineShoppingBasket fontSize={"20px"} />
                <p>My Order</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <BsBook fontSize={"18px"} />
                <p>My Bookings</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <BsShop fontSize={"18px"} />
                <p>Explore Stores</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <IoFastFoodOutline fontSize={"18px"} />
                <p>Order food</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <BsTruck fontSize={"18px"} />
                <p>Find logistics</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <VscTools fontSize={"19px"} />
                <p>Book services</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <IoChatbubblesOutline fontSize={"19px"} />
                <p>Chat</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
              <div className="sideBarMenus">
           
                <IoSettingsOutline fontSize={"18px"} />
                <p>settings</p>
              </div>
            </Link>
          </div>
          <div className="Hrline"></div>
          {/*  <hr className="Hrline" /> */}
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "300",
                marginBottom: "4px",
              }}
            >
              Sign out
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default sideMenu;
