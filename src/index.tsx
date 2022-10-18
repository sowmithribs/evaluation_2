import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./views/home/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
);
