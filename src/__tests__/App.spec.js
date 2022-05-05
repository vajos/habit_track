import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: (props) => props.children,
}));
jest.mock("redux-persist", () => ({
  ...jest.requireActual("redux-persist"),
  persistStore: jest.fn(),
}));

describe("App", () => {
  it("should render a headline", () => {
    render(<App />);
    const el = screen.getByText(/Crap Stories/i);
    expect(el).toBeInTheDocument();
  });
});
