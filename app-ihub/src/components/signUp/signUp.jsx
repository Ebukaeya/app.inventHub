import "../../styles/signUp.css";
import { IoIosArrowBack } from "react-icons/io";
import {
  BsPerson,
  BsEnvelope,
  BsShieldLock,
  BsEyeSlash,
  BsEye,
  BsCheck2,
  BsArrowRight,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import DeliveryAddress from "./DeliveryAddress";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isEmailUnique, setIsEmailUnique] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const checkEmail = () => {
    console.log(invalidEmail);
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailFormat)) {
      setInvalidEmail(false);
      /* check if email is already registered */
    } else setInvalidEmail(true);
  };

  const goToNextPage = () => {
    const currentPage = document.querySelector(".signUpPage1");
    const nextPage = document.querySelector(".deliveryAddressPage2");
    const wrapper = document.querySelector("Div.signUpDivWrapper");
    currentPage.style.transform = "translateX(-100vw)";
    nextPage.style.transform = "translateX(-100vw)";
    if (fullname && email && password && isEmailUnique) {
      console.log("go to next page");
    }
  };

  return (
    <>
      <div className="signUpDivWrapper">
        <div className="signUpPage1">
          <div className="mycontainer">
            <div className="NavBarProdP">
              <div style={{ display: "flex", alignItems: "center" }}>
                <IoIosArrowBack
                  size={30}
                  onClick={() => window.history.back()}
                />
                <p>Back</p>
              </div>
            </div>
            <h1 className="signUpHeadding">Create an Account</h1>
            <div className="signUpform">
              <div className="inputFormdiv">
                <div>
                  <BsPerson size={18} />
                  <input
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    className="inputFormELement"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="inputFormdiv">
                <div>
                  <BsEnvelope size={16} />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="inputFormELement"
                    type="email"
                    placeholder="Email"
                    required={true}
                  />
                </div>
                <div style={{ color: "rgb(36, 187, 129);" }}>
                  {isEmailUnique && <BsCheck2 />}
                </div>
              </div>
              {invalidEmail && (
                <p className="WrongEmail">Provide a valid email</p>
              )}
              <div className="inputFormdiv">
                <div>
                  <BsShieldLock size={18} />
                  <input
                    onClick={checkEmail}
                    onFocus={checkEmail}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="inputFormELement"
                    type={showPassword ? "text" : "Password"}
                    placeholder="Password"
                  />
                </div>

                {showPassword ? (
                  <div>
                    <BsEye onClick={() => setShowPassword(false)} />
                  </div>
                ) : (
                  <div>
                    <BsEyeSlash onClick={() => setShowPassword(true)} />
                  </div>
                )}
              </div>
            </div>
            <div className="proceedButton">
              <button onClick={goToNextPage}>
                Proceed <BsArrowRight />
              </button>
            </div>
            <div className="hrLineSignUP"></div>
            <p>Sign up with:</p>
            <div className="socailsSignUpDiv">
              <FcGoogle size={40} />
              <FaFacebookF size={40} color={"rgb(23,115,234)"} />
            </div>
          </div>
        </div>
        <DeliveryAddress/>
      </div>
    </>
  );
};

export default SignUp;
