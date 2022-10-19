import Logo from "../../components/logo/logo";
import SignIn from "../../components/signIn/signIn";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="loginContainer">
       <Logo /> 
      <div className="signIn">
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPage;
