import "../../styles/sidemenu.css";
import { useNavigate,Link } from "react-router-dom";
import { BsBook, BsTruck, BsShop } from "react-icons/bs";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoSettingsOutline, IoChatbubblesOutline, IoFastFoodOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { BsBagCheckFill } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";

const SideMenu = ({ closeSideMenu }) => {
  const profileImage = useSelector((state) => state.profile.profile?.imageUrl);

  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={(e) => {
          closeSideMenu(false);
        }}
        className='cover'
      >
        <div onClick={(e) => e.stopPropagation()} className='sideMenu'>
          <div>
            <div className='imageWrapper'>
              {" "}
              <img className='SidebarImage' src={profileImage} />
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
            <div className='pencil'>
              <Link to={"/profile"} className='linkreset'>
                <HiOutlinePencil />
              </Link>
            </div>
          </div>
          <div>
            <div onClick={()=> {navigate("/")  ;closeSideMenu(false)}} className='sideBarMenus'>
              <HiOutlineHome fontSize={"20px"} />
              <p>Home</p>
            </div>

            <div onClick={()=> {navigate("/my-orders")  ;closeSideMenu(false)}} className='sideBarMenus'>
              <MdOutlineShoppingBasket fontSize={"20px"} />
              <p>My Order</p>
            </div>

            <div onClick={()=> {navigate("/bookings")  ;closeSideMenu(false)}} className='sideBarMenus'>
              <BsBook fontSize={"18px"} />
              <p>My Bookings</p>
            </div>

            <div onClick={()=> {navigate("/explorestores")  ;closeSideMenu(false)}}  className='sideBarMenus'>
              <BsShop fontSize={"18px"} />
              <p>Explore Stores</p>
            </div>

            <div onClick={()=> {navigate("/restaurant")  ;closeSideMenu(false)}} className='sideBarMenus'>
              <IoFastFoodOutline fontSize={"18px"} />
              <p>Order food</p>
            </div>

            <div onClick={()=> {navigate("/logistics")  ;closeSideMenu(false)}}  className='sideBarMenus'>
              <BsTruck fontSize={"18px"} />
              <p>Find logistics</p>
            </div>

            <div onClick={()=> {navigate("/services")  ;closeSideMenu(false)}} className='sideBarMenus'>
              <VscTools fontSize={"19px"} />
              <p>Book services</p>
            </div>

            <div onClick={()=> {navigate("/chat")  ;closeSideMenu(false)}} className='sideBarMenus'>
              <IoChatbubblesOutline fontSize={"19px"} />
              <p>Chat</p>
            </div>
          </div>
          <div className='Hrline'></div>
          {/*  <hr className="Hrline" /> */}
          <div>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='currentColor' className='bi bi-box-arrow-right' viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
                />
                <path
                  fillRule='evenodd'
                  d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
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

export default SideMenu;
