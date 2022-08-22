import "../../styles/profile/profile.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../slices/profileSlice";
import {uploadImageUrl} from "../../api/consumerApi";

const Profile = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(false);

  const profile = useSelector((state) => state.profile?.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(profile);
    if (profile) {
      setDateOfBirth(profile.dateOfBirth);
      setGender(profile);
    }
  });

  useEffect(() => {
    if (dateOfBirth && gender && profileImage) {
      setProfileUpdate(true);
    }
  }, [gender, dateOfBirth, profileImage]);

  const handleGenderSelect = (input) => {
    let inputs = document.querySelectorAll("div.Gender>div>input");
    let gender = input.value;
    setGender(gender);
    console.log(gender);
    inputs.forEach((input) =>
      input.value !== gender ? (input.checked = false) : ""
    );
  };

  const handleImageUpload = (e) => {
    let image = e.target.files[0];
    console.log(image);
    if (image) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        setProfileImage(evt.target.result);
      };
      reader.readAsDataURL(image);
    } else {
      console.log("upload failed try again");
    }
  };

  const handleSubmit = () => {
    let updateData = {
      dateOfBirth,
      gender,
      imageUrl: profileImage,
    };
  };

  const updateProfile = async (token) => {
    try {
      let imageFile = new FormData();
      imageFile.append("image", profileImage);
      let response = await fetch(uploadImageUrl + token, {
        method: "PUT",
        body: imageFile,
        headers:{
          authorization: `bearer ${token}`,
        }
      })
      console.log(response);


    } catch (error) {
      console.log(error);
    }
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
            <img src={profileImage ? profileImage : profile.imageUrl} />
            <div className="UploadImageDiv">
              <input
                onChange={(e) => handleImageUpload(e)}
                type="file"
                name="file"
                id="file"
              />
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
            <div>{profile.phoneNumber}</div>
          </div>
          <div className="Infodiv">
            <p>Email</p>
            <div className="inputDateEP">{profile.email}</div>
          </div>
          <div className="Infodiv">
            <p>Delivery Address</p>
            <div className="DeliveryAddress">
              <p>
                {profile.streetAddress +
                  ", " +
                  profile.city +
                  ", " +
                  profile.country}
              </p>
            </div>
          </div>
        </div>

        <div className="saveDivePE">
          <button
            style={{ backgroundColor: profileUpdate ? "#0E49B5" : "" }}
            disabled={true}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
