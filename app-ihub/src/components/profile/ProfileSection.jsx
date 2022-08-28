import "../../styles/profile/profile.css";
import { IoIosArrowBack, IoIosHeart } from "react-icons/io";
import { BiDotsVerticalRounded, BiMinus } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../slices/profileSlice";
import { uploadImageUrl, updateUserProfile } from "../../api/consumerApi";
import Spinner from "../loaders/Spinner";

const Profile = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageBuffer, setImageBuffer] = useState(null);

  const profile = useSelector((state) => state.profile?.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(profile);
    if (profile) {
      setDateOfBirth(profile.dateOfBirth);
      setGender(profile.gender);
      setProfileImage(profile.imageUrl);
    }
  }, []);

  useEffect(() => {
    console.log(dateOfBirth);
    if (dateOfBirth && gender && imageBuffer) {
      setProfileUpdate(true);
    }
  }, [gender, dateOfBirth, imageBuffer]);

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
    setImageBuffer(image);
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
    console.log(imageBuffer);
    console.log(loading);
    setLoading(true);

    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjNWQ4NDhhMTUwOGQwMGIwNzZkMCIsImlhdCI6MTY2MTcxNTkyOCwiZXhwIjoxNjYyMzIwNzI4fQ.om8Jr9UgHrOWH1soEl3BuvquQCxCrjy2nFTUa9WY0Rs"
    );
    /* should be removed latter and redirected to login page instead */
    updateProfileFun(localStorage.getItem("token"));
  };

  const updateProfileFun = async (token) => {
    try {
      let imageFile = new FormData();
      imageFile.append("image", imageBuffer);
      let response = await fetch(uploadImageUrl, {
        method: "PUT",
        body: imageFile,
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      console.log(response);
      if (response.ok) {
        console.log(dateOfBirth, gender);
        let body = {
          dateOfBirth,
          gender,
        };
        let response = await fetch(updateUserProfile, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            authorization: `bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          let data = await response.json();
          dispatch(updateProfile(data));
          setLoading(false);
        } else {
          alert("could not update profile");
        }
      } else {
        alert("image upload failed token expired redirect to login");
        console.log(response);
      }
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
            <div className="DeliveryAddress">
              <p style={{ width: "100%", overflow: "hidden" }}>
                {profile.email}
              </p>
            </div>
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
            onClick={handleSubmit}
            disabled={profileUpdate ? false : true}
          >
            Save
          </button>
        </div>
        {loading && <Spinner />}
      </div>
    </>
  );
};

export default Profile;
