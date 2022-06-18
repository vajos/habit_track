/* istanbul ignore file */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./LoginView";

export default function LoginRoutes() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      <LoginView />
      {/* </Routes> */}
    </BrowserRouter>
  );
}
