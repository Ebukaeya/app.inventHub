import "./Narbar.css";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { IoSettingsSharp, IoNotifications } from "react-icons/io5";
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
import { VscMenu } from "react-icons/vsc";
import { TbMenu2 } from "react-icons/tb";
import SideMenu from "../reUsable/SideMenu";

const Narbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //const { user } = useSelector((state) => state.webStoreUser);

  const toggleShowProfile = () => {
    showProfile ? setShowProfile(false) : setShowProfile(true);
  };

  return (
    <>
      <div className='navBarMain'>
        <div className='NavBarMenuAndLog'>
          <div onClick={() => setShowSideMenu(true)} className='meanuWrapper44'>
            <TbMenu2  size={18}  />
          </div>
          <span>Logo</span>
        </div>
        <div className='navbarChild'>
          <div onClick={toggleShowProfile}>
            <div>
              <img
                src={
                  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                }
                className='profileImageNar'
              />
            </div>
            <div>
              <p>
                {" "}
                {"Ebuka"}
                <span style={{ marginLeft: "4px" }}>{!showProfile ? <VscTriangleDown /> : <VscTriangleUp />}</span>
              </p>
              <p style={{ fontSize: "0.8rem", color: "gray" }}></p>
            </div>
            {showProfile && <ProfileCard />}
          </div>
          <div>
            <HiShoppingCart color='gray' size={22} style={{ cursor: "pointer" }} />
            <IoNotifications color='gray' size={22} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      {showSideMenu && <SideMenu closeSideMenu={setShowSideMenu} />}
    </>
  );
};

export default Narbar;
