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

<<<<<<< HEAD
    const notFoundText = screen.getByText(/Not Found/i);
=======
    const notFoundText = screen.getByText(/💩/i);
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
    expect(notFoundText).toBeInTheDocument();
  });
});
