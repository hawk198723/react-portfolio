// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// ReactDOM.render(<App />, document.querySelector("#root"));
// React 18 shipped March 29th, 2022. ReactDOM.render has been deprecated in React 18 and currently issues a warning and runs in a compatible mode.

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
