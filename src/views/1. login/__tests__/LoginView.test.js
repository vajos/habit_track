import React from "react";
// import ReactDOM from "react-dom";
import LoginView from "./../LoginView";
import { render, screen } from "@testing-library/react";
import LoginRoutes from "../Login.routes";

test("on intial render", () => {
  render(<LoginRoutes />);

  screen.debug();
});
