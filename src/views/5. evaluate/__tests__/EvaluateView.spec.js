import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EvaluateView from ".././EvaluateView";
import { AllProviders } from "../../../testUtils";
import auth0 from "../../../config/auth0";
import { useRecoilValue, RecoilRoot } from "recoil";
import { renderHook } from "@testing-library/react-hooks";
import { evaluate_state } from "../../../atoms/atoms";

describe("EvaluateView", () => {
  it("evaluate Habit", async () => {
    renderHook(() => useRecoilValue(evaluate_state), {
      wrapper: RecoilRoot,
    });
    const funct = jest.fn();

    render(
      <AllProviders>
        <RecoilRoot>
          <EvaluateView />
        </RecoilRoot>
      </AllProviders>
    );

    const button = await screen.getByRole("button", { name: /weiter/i });
    userEvent.click(button);
    expect(button).not.toBeDisabled();
    expect(window.location.pathname).toEqual("/");

    const input = await screen.queryByPlaceholderText(/name der gewohnheit/i);
    expect(input).toBeInTheDocument();
    userEvent.type(input, "Haus");

    const spin = await screen.getByRole("spinbutton");
    expect(spin).toBeInTheDocument;
    userEvent.type(spin, "1");

    const date = await screen.queryByPlaceholderText(/Select date/i);
    expect(date).toBeInTheDocument();
    userEvent.type(date, "2022-06-22");

    userEvent.click(button);
    expect(button).not.toBeDisabled();
    expect(window.location.pathname).toEqual("/");
  });
});
