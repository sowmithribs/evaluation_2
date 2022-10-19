import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/home";
import Login from "../../views/login/loginPage";
import Loginsucess from "../../views/loginsucess/loginsucess"
import Register from "../../views/Register/register";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Home />} />
         <Route path ="/sucess" element={<Loginsucess/>}/>
      </Routes>
    </div>
  );
};

export default Router;
