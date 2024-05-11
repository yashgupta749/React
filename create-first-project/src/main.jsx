import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // strict mode basically hame error show kr deta hai ki agar hamen kuch mistake ya kuch isssue kiye hai code me in the browser console area
  // yaha sirf ek hi component rakh skte hai wo ham koi bhi le skte hai ye as a child work kr raha hai
);
