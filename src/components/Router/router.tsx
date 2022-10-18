import { Routes, Route } from "react-router-dom";
import Login from "../../views/login/loginPage";
import Register from "../../views/Register/register";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Router;
