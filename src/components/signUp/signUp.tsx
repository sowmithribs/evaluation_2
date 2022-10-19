import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Toast from "../toast/toast";
const SignUp = () => {
  const [password, setPassword] = useState(false);
  const togglePassword = () => {
    setPassword(!password);
  };
  type usersType = { mobileNo: number; mPin: number };

  const navigate = useNavigate();

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

  const singhupchange = (e: any) => {
    e.preventDefault();

    const mobileNo: number = e.target.mobileNo.value;
    const newMPin: number = e.target.newMPin.value;
    const confirmMpin: number = e.target.confirmMPin.value;

    const userData = { mobileNo, mPin: newMPin };

    const previousData: usersType[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    console.log("userData", previousData);

    if (previousData.length > 0 && mobileNo) {
      const mappedUser = previousData.map((user) => {
        if (user.mobileNo === mobileNo) {
          return "user";
        }
        return "no user";
      });

      if (newMPin === confirmMpin) {
        if (mappedUser.includes("user")) {
          alert("user already exist");
        } else if (mappedUser.includes("no user")) {
          previousData.push(userData);
          sessionStorage.setItem("signUpSuccess", "true");
          navigate("/sucess");
          

          localStorage.setItem(JSON.stringify(mobileNo), "[]");
          window.location.reload();
        }
      } else {
        alert("mPin does not match");
      }

      console.log("pre", previousData);
      localStorage.setItem("users", JSON.stringify(previousData));
    } else if ((previousData.length = 0 && mobileNo)) {
    }
  };
  return (
    <>
      <form className="formContianer" onSubmit={singhupchange}>
        <div className="signInHeading">SIGN UP</div>
        <div className="inputField">
          <input
            type="text"
            name="mobileNo"
            id="mobile"
            className="inputFields"
            placeholder="Mobile number"
          />
        </div>
        <div className="inputField">
          <div className="loginPW">
            <input
              type="password"
              name="newMPin"
              id="mpin"
              minLength={4}
              maxLength={4}
              className="inputFields"
              placeholder="Enter 4 Digit MPin"
            />
          </div>
        </div>
        <div className="inputField">
          <div className="loginPW">
            <input
              type={password ? "text" : "password"}
              name="confirmMPin"
              id="cmpin"
              minLength={4}
              maxLength={4}
              className="inputFields"
              placeholder="Re-enter 4 Digit MPin"
            />
            <img
              src={require("../../assets/icons/eye_on.png")}
              alt="Password Eye"
              className="eyeIcon"
              onClick={togglePassword}
            />
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
