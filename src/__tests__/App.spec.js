import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render a headline", () => {
    render(<App />);
  });
});
