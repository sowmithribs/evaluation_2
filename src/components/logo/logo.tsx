import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <div className="logoTextContainer">
        <div className="logoImg">
          <img src={require("../../assets/Images/logo.png")} alt="" />
        </div>
        <div className="logoText">
          <div>Protect & Manage every password in your business</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
