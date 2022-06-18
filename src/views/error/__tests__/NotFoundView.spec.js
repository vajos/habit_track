import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import NotFound from "../NotFoundView";

describe("NotfoundView", () => {
  it("renders 'Not Found' somewhere", () => {
    render(
      <Router>
        <NotFound location={{ pathname: "yas" }} />
      </Router>
    );

    const notFoundText = screen.getByText(/💩/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
