import { render, screen } from "@testing-library/react";
import HomeView from "../HomeView";
import { AllProviders } from "../../../testUtils";

describe("HomeView", () => {
  it("Should render a headline", async () => {
    render(
      <AllProviders>
        <HomeView />
      </AllProviders>
    );
    const headline = await screen.findByText(/This is a story/i);
    expect(headline).toBeInTheDocument();
  });
});
