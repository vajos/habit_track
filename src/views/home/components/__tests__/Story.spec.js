import { render, screen } from "@testing-library/react";
import Story from "../Story";
import { AllProviders } from "../../../../testUtils";
import mockStories from "../../../../../mockdata/stories.json";

describe("Story", () => {
  it("Should render the title", () => {
    render(
      <AllProviders>
        <Story story={mockStories[0]} />
      </AllProviders>
    );
    const headline = screen.getByText(/This is a story/i);
    expect(headline).toBeInTheDocument();
  });
});
