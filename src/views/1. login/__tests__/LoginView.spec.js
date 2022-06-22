import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginView from "../LoginView";
import { AllProviders } from "../../../testUtils";
import auth0 from "../../../config/auth0";
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot } from "recoil";
import { user_meta_data_state } from "../../../atoms/atoms";

describe("LoginView", () => {
  it("should enable a user to login", async () => {
    const spy = jest
      .spyOn(auth0.client, "login")
      .mockImplementation((values, cb) => cb(null, { accessToken: "123" }));

    renderHook(() => useRecoilValue(user_meta_data_state), {
      wrapper: RecoilRoot,
    });

    render(
      <AllProviders>
        <RecoilRoot>
          <LoginView />
        </RecoilRoot>
      </AllProviders>
    );

    const button = screen.getByRole("button", { name: /anmelden/i });
    expect(button).toBeTruthy();

    // userEvent.click(button);
    // expect(window.location.pathname).toEqual("/slide");

    // const username = await screen.findByLabelText(/Username/i);
    // const password = await screen.findByLabelText(/password/i);
    // const submit = await screen.findByRole("button", { name: /login/i });

    // userEvent.type(username, "test");
    // userEvent.type(password, "test");
    // userEvent.click(submit);

    // const text = await screen.findByText(/Login successful/i);

    // expect(spy).toHaveBeenCalled();
    // expect(text).toBeInTheDocument();
    spy.mockRestore();
  });

  // it("should show an error if something is wrong with the login", async () => {
  //   const spy = jest
  //     .spyOn(auth0.client, "login")
  //     .mockImplementation((values, cb) => cb({ description: "NEIN" }));

  //   renderHook(() => useRecoilValue(user_meta_data_state), {
  //     wrapper: RecoilRoot,
  //   });

  //   render(
  //     <AllProviders>
  //       <RecoilRoot>
  //         <LoginView />
  //       </RecoilRoot>
  //     </AllProviders>
  //   );
  //   const username = await screen.findByLabelText(/Username/i);
  //   const password = await screen.findByLabelText(/password/i);
  //   const submit = await screen.findByRole("button", { name: /login/i });

  //   userEvent.type(username, "test");
  //   userEvent.type(password, "test");
  //   userEvent.click(submit);

  //   const text = await screen.findByText(/Login failed: NEIN/i);

  //   expect(spy).toHaveBeenCalled();
  //   expect(text).toBeInTheDocument();
  //   spy.mockRestore();
  // });
});
