import reactDom from "react-dom";
import App from "./App";
import "./index.css";

reactDom.createRoot(document.getElementById("root")).render(
  <div className="main">
    <App />
    <App />
    <App />
  </div>
);
