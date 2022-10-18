import { Link } from "react-router-dom";
import { useState } from "react";

import "./signIn.css";

const SignIn = () => {
  const [password, setPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setPassword(!password);
  };
  return (
    <div>
      <div className="signInHead">SIGN IN TO YOUR ACCOUNT</div>
      <form className="formContianer">
        <div className="inputField">
          <input type="text" name="mobile" id="mobile"
            className="inputFields" placeholder="Mobile number" />{" "}
        </div>
        <div className="inputField">
          <div className="loginPW">
            <input type={password ? "text" : "password"} name="mpin" id="mpin" className="inputFields" placeholder="Mpin"/>
            <img src={require("../../assets/icons/eye_on.png")} alt="Password Eye" className="eyeIcon" onClick={togglePassword}/>
          </div>
        </div>
        <div className="forgotPassword">Forgot your password?</div>
        <div>
          <button className="btnSubmit">SIGN IN</button>
        </div>
      </form>
      <div className="signUp"> Don’t have a Account?{" "}<Link to="/signup" className="signUpLink"> SIGNUP </Link>
      </div>
    </div>
  );
};

export default SignIn;
