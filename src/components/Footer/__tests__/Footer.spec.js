import { screen, render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render ADIS und Co.", async () => {
    render(
      <>
        <Footer />
      </>
    );

    expect(screen.getByText(/Internetprogrammierung 2/i)).toBeInTheDocument();
  });
});
