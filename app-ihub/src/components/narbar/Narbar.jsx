import "./Narbar.css";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { IoSettingsSharp, IoNotifications } from "react-icons/io5";
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Narbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //const { user } = useSelector((state) => state.webStoreUser);

  useEffect(() => {
    location.pathname === "/settings" ? setShowSetting(true) : setShowSetting(false);
  }, [location]);

  const toggleShowProfile = () => {
    showProfile ? setShowProfile(false) : setShowProfile(true);
  };
  const toggleShowNotification = () => {
    showNotification ? setShowNotification(false) : setShowNotification(true);
  };
  const toggleShowSetting = () => {
    navigate("/settings");
    /* showSetting ? setShowSetting(false) : setShowSetting(true); */
  };

  return (
    <>
      <div className='navBarMain'>
        <div>Logo</div>
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
            <IoNotifications color='gray' size={22} style={{ cursor: "pointer" }} />
            {!showSetting ? (
              <IoSettingsSharp onClick={toggleShowSetting} color='gray' size={22} style={{ cursor: "pointer" }} />
            ) : (
              <div onClick={toggleShowSetting} className='settingsIconNar'>
                {" "}
                <IoSettingsSharp size={22} style={{ cursor: "pointer" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Narbar;
