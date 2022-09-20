import "../../styles/signIn.css";
import { useState, useEffect } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
 
  const navigate = useNavigate();
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {" "}
        <div className="signinCircle"></div>
      </div>
      <div className="mycontainer">
        <div className="ihubLogo">
          <p>Ihub Logo</p>
        </div>
        <div className="inputFormSigninWrapper">
          <div className="inputFormSignin">
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="foo"
                type={"text"}
                className="inputSignin"
                required="true"
              />
              <p>Email address</p>
              <p style={{ fontSize: "13px", color: "red" }}>invalide email</p>
            </div>
            <div>
              {" "}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id={password}
                type={showPassword ? "text" : "password"}
                className="inputSignin"
                required="true"
              />
              <p>Password</p>
              {showPassword ? (
                <div
                  className="passwordInputSignin"
                  onClick={() => setShowPassword(false)}
                >
                  <BsEye />
                </div>
              ) : (
                <div
                  className="passwordInputSignin"
                  onClick={() => setShowPassword(true)}
                >
                  <BsEyeSlash />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="forgotpasdiv">
          <div>
            {" "}
            <p>Forgot password?</p>
          </div>
        </div>
        <div>
          <button className="signinButton2">Sign in</button>
        </div>
        <div>
          <div className="shortHline" ></div> <p>Or continue with</p> <div className="shortHline"></div>
        </div>
        <div>
            <div><FcGoogle size={40} /></div>
            <div>   <FaFacebookF size={40} color={"rgb(23,115,234)"}/> </div>
        </div>
        <div>
            <p>Click here to <span onClick={e=>navigate("/")} style={{color:"#0E49B5", fontWeight:"600"}}>continue shopping</span></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
