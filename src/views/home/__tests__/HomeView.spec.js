import { render, screen } from "@testing-library/react";
import HomeView from "../HomeView";
import { AllProviders } from "../../../testUtils";

describe("HomeView", () => {
<<<<<<< HEAD
  it("Should render a headline", async () => {
=======
  it("Should render a headline", () => {
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
    render(
      <AllProviders>
        <HomeView />
      </AllProviders>
    );
<<<<<<< HEAD
    const headline = await screen.findByText(/This is a story/i);
=======
    const headline = screen.getByText(/Crap Stories/i);
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
    expect(headline).toBeInTheDocument();
  });
});
