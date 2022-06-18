import React from "react";
// import ReactDOM from "react-dom";
import LoginView from "./../LoginView";
import { render, screen } from "@testing-library/react";
import LoginRoutes from "../Login.routes";

test("on intial render", () => {
  //render(<App />);
  //const el = screen.getByText(/Crap Stories/i);
  //TODO hier ein test machen expect(el).toBeInTheDocument();
  expect(3).toBe(3);
});
