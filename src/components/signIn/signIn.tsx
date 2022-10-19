import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./signIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setPassword(!password);
  };

  if (localStorage.getItem("users") === null) {
    localStorage.setItem(
      "user Data",
      JSON.stringify(
        localStorage.setItem(
          "users",
          JSON.stringify([
            { mobileNo: "9945810342", mPin: "9945" },
            { mobileNo: "9945810341", mPin: "9945" },
          ])
        )
      )
    );
  }

  const onsubmitHandler = (e: any) => {
    e.preventDefault();
    type usersType = { mobileNo: number; mPin: number };

    const mobileNo = e.target.mobile.value;
    const mPin = e.target.mpin.value;

    const userData = { mobileNo, mPin };
    console.log("userData", userData);

    const users: usersType[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    console.log("users", users);

    for (let i = 0; i < users.length; i++) {
      if (userData.mobileNo === users[i].mobileNo) {
        if (userData.mPin === users[i].mPin) {
          localStorage.setItem("auth", "authenticated");
          navigate("/home");
          localStorage.setItem("currentUser", mobileNo);
          window.location.reload();
        }
      }
    }
  };

  return (
    <div>
      <div className="signInHead">SIGN IN TO YOUR ACCOUNT</div>
      <form className="formContianer" onSubmit={onsubmitHandler}>
        <div className="inputField">
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="inputFields"
            placeholder="Mobile number"
          />{" "}
        </div>
        <div className="inputField">
          <div className="loginPW">
            <input
              type={password ? "text" : "password"}
              name="
              mpin"
              id="mpin"
              minLength={4}
              maxLength={4}
              className="inputFields"
              placeholder="Mpin"
            />
            <img
              src={require("../../assets/icons/eye_on.png")}
              alt="Password Eye"
              className="eyeIcon"
              onClick={togglePassword}
            />
          </div>
        </div>
        <div className="forgotPassword">Forgot your password?</div>
        <div>
          <button className="btnSubmit">SIGN IN</button>
        </div>
      </form>
      <div className="signUp">
        Don’t have a Account?{" "}
        <Link to="/signup" className="signUpLink">
          SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
