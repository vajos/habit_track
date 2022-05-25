import { render, screen } from "@testing-library/react";
import App from "../App";

<<<<<<< HEAD
jest.mock("redux-persist/integration/react", () => ({
  PersistGate: (props) => props.children,
}));
jest.mock("redux-persist", () => ({
  ...jest.requireActual("redux-persist"),
  persistStore: jest.fn(),
}));

=======
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
describe("App", () => {
  it("should render a headline", () => {
    render(<App />);
    const el = screen.getByText(/Crap Stories/i);
    expect(el).toBeInTheDocument();
  });
});
