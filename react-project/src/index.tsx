import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyle";
import App from "./Pages/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
