import "../../styles/profile/profile.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const profile = useSelector((state) => state.profile?.profile);

  const handleGenderSelect = (input) => {
    let inputs = document.querySelectorAll("div.Gender>div>input");
    let gender = input.value;
    setGender(gender);
    console.log(gender);
    inputs.forEach((input) =>
      input.value !== gender ? (input.checked = false) : ""
    );
  };

  return (
    <>
      <div className="mycontainer">
        <div className="NavBarProdP">
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoIosArrowBack size={30} onClick={() => window.history.back()} />
            <p>My Profile</p>
          </div>
          <div>
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
        <div className="profileImageDivPS">
          <div>
            <img src= {profile.imageUrl} />
            <div className="UploadImageDiv">
              <input type="file" name="file" id="file" />
              <BsCamera />
            </div>
          </div>
        </div>
        <div className="basicInfoDiv">
          <p>Basic Details </p>
          <div className="Infodiv">
            <p>Full name</p>
            <div>{profile.fullName}</div>
          </div>
          <div className="Infodiv">
            <p>Date of birth</p>
            <div className="inputDateEP">
              <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                name="date"
                id="date"
              />
            </div>
          </div>
          <div className="Infodiv">
            <p>Date of birth</p>
            <div className="Gender">
              <div>
                <input
                  onClick={(e) => handleGenderSelect(e.target)}
                  value={"Male"}
                  type="radio"
                />
                <p>Male</p>
              </div>
              <div>
                <input
                  onChange={(e) => handleGenderSelect(e.target)}
                  value={"Female"}
                  type="radio"
                />
                <p>Female</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: "10px 0 170px 0" }} className="basicInfoDiv">
          <p> Contact Details </p>
          <div className="Infodiv">
            <p>Phone Number</p>
            <div>Ebuka Eya</div>
          </div>
          <div className="Infodiv">
            <p>Email</p>
            <div className="inputDateEP">{profile.email}</div>
          </div>
          <div className="Infodiv">
            <p>Delivery Address</p>
            <div className="DeliveryAddress">
              <p>Norder tasdhne, 2450 denmark</p>
            </div>
          </div>
        </div>
      
        <div className="saveDivePE">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
