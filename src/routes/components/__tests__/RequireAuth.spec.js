import { render, screen } from "@testing-library/react";
import RequireAuth from "../RequireAuth";
import { AllProviders } from "../../../testUtils";
import { useSelector } from "react-redux";

jest
  .mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => <p>navigate</p>,
  }))
  .mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
  }));

describe("RequireAuth", () => {
  it("Should send us to login if we are not logged in", async () => {
    useSelector.mockImplementation(() => ({
      isAuthenticated: false,
    }));

    render(
      <AllProviders>
        <RequireAuth />
      </AllProviders>
    );
    const headline = await screen.findByText(/navigate/i);
    expect(headline).toBeInTheDocument();
  });

  it("Should let us through if we are logged in", async () => {
    useSelector.mockImplementation(() => ({
      isAuthenticated: true,
    }));

    render(
      <AllProviders>
        <RequireAuth>
          <p>crap stories</p>
        </RequireAuth>
      </AllProviders>
    );
    const headline = await screen.findByText(/Crap stories/i);
    expect(headline).toBeInTheDocument();
  });
});
