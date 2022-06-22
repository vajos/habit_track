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

    render(
      <AllProviders>
        <RecoilRoot>
          <EvaluateView />
        </RecoilRoot>
      </AllProviders>
    );
    // const username = await screen.findByLabelText(/Username/i);
    // const password = await screen.findByLabelText(/password/i);
    // const submit = await screen.findByRole("button", { name: /login/i });

    // userEvent.type(username, "test");
    // userEvent.type(password, "test");
    // userEvent.click(submit);

    // const text = await screen.findByText(/Login successful/i);

    // expect(spy).toHaveBeenCalled();
    // expect(text).toBeInTheDocument();
  });
});
