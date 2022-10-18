import { useState } from "react";

const SignUp = () => {
  const [password, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!password);
  };
  return (
    <>
      <form className="formContianer">
        <div className="signInHeading">SIGN UP</div>
        <div className="inputField">
          <input type="text" name="mobile" id="mobile" className="inputFields" placeholder="Mobile number"/>
        </div>
        <div className="inputField">
          <div className="loginPW">
            <input type="password"name="mpin"  id="mpin"  className="inputFields"  placeholder="Enter 4 Digit MPin"  />
          </div>
        </div>
        <div className="inputField">
          <div className="loginPW">
            <input  type={password ? "text" : "password"}  name="cmpin"  id="cmpin"  className="inputFields"  placeholder="Re-enter 4 Digit MPin"  />
            <img  src={require("../../assets/icons/eye_on.png")}  alt="Password Eye"  className="eyeIcon"  onClick={togglePassword}  />
          </div>
        </div>
        <div>
          <button className="btnRegSubmit">SIGN UP</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
