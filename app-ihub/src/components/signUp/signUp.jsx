import "../../styles/signUp.css";
import { signUpUrl, updateCartUrl } from "../../api/consumerApi";
import { setProfile } from "../../slices/profileSlice";
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
import { useState, useEffect } from "react";
import DeliveryAddress from "./DeliveryAddress";
import { useSelector, useDispatch } from "react-redux";
import BounceLoader from "react-spinners/ClipLoader";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isEmailUnique, setIsEmailUnique] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [proceedToPayment, setProceedToPayment] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fullname && email && password && isEmailUnique && !invalidEmail) {
      setIsFormFilled(true);  
    }else {setIsFormFilled(false)}
  }, [fullname, email, password]);

  const checkEmail = () => {
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
    setProceedToPayment(true);
  };

  const updateUserCart = async (id) => {
    try {
      let response = await fetch(updateCartUrl + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      if (response.ok) {
        console.log("cart updated");
        const data = await response.json();
        console.log("data :", data);
        setLoading(false);
        goToNextPage();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    const newUser = {
      fullName: fullname,
      email,
      password,
    };
    try {
      console.log("key",process.env.REACT_APP_SECRET_KEY );
      console.log(process.env.REACT_APP_TOKEN);
      console.log(signUpUrl);
      let response = await fetch(signUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setIsEmailUnique(true);
        dispatch(setProfile(data));
        localStorage.setItem("token", data.token)
        updateUserCart(data._id);
      } else {
        setLoading(false);
        setIsEmailUnique(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ overflow: "hidden", width: "100vw" }}>
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
                      onChange={(e) => {setEmail(e.target.value); setIsEmailUnique(true)}}
                      value={email}
                      className="inputFormELement"
                      type="email"
                      placeholder="Email"
                      required={true}
                    />
                  </div>
                  <div style={{ color: "rgb(36, 187, 129);" }}>
                    {!invalidEmail && <BsCheck2 />}
                  </div>
                </div>
                {invalidEmail && (
                  <p className="WrongEmail">Provide a valid email</p>
                )}
                {!isEmailUnique && (
                  <p className="WrongEmail">User already exist</p>
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
                <button
                  style={{
                    backgroundColor: isFormFilled ? "" : "rgb(206, 205, 205)",
                  }}
                  disabled={isFormFilled ? false : true}
                  onClick={handleSignUp}
                >
                  Proceed <BsArrowRight />{" "}
                  {loading && (
                    <BounceLoader color="#1CCCE9" size={18} loading={true} />
                  )}
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
          <DeliveryAddress proceed={proceedToPayment} />
        </div>
      </div>
    </>
  );
};

export default SignUp;
