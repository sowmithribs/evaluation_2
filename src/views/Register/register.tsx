import Logo from "../../components/logo/logo";
import SignUp from "../../components/signUp/signUp";
import "../login/loginPage.css";

const Register = () => {
  return (
    <div className="loginContainer">
      <Logo />
      <div className="signIn">
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
