/* istanbul ignore file */
import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audi = "https://dev-xc-yysm1.eu.auth0.com/api/v2/"
const scop = "read:current_user update:current_user_metadata update:users_app_metadata"


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audi}
      scope = {scop}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
