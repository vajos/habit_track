import { render, screen } from "@testing-library/react";
import CategoryView from ".././CategoryView";
import { AllProviders } from "../../../testUtils";
import auth0 from "../../../config/auth0";
import userEvent from "@testing-library/user-event";
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { category_state } from "../../../atoms/atoms";

describe("CategoryView", () => {
  it("should enable a category to be choosen", async () => {
    const spy = jest
      .spyOn(auth0.client, "login")
      .mockImplementation((values, cb) => cb(null, { accessToken: "123" }));

    const { result } = renderHook(() => useRecoilValue(category_state), {
      wrapper: RecoilRoot,
    });

    const history = render(
      <RecoilRoot>
        <CategoryView />
      </RecoilRoot>
    );
    // const username = await screen.findByLabelText(/Username/i);
    // const password = await screen.findByLabelText(/password/i);
    // const submit = await screen.findByRole("button", { name: /login/i });

    /**
     * If Button geklickt redirect
     * expect redirect
     */

    const but = await screen.getByRole("button", { name: /unterhaltung/i });
    userEvent.click(but);

    expect(history.location.pathname).toEqual("./evaluate");
    expect(result.current).toEqual(0);

    // const res = await request(app).get("/redirectUri?code=code&state=state");
    // expect(exchangeForAuthTokenSpy).toHaveBeenCalledTimes(1);
    // expect(exchangeForAuthTokenSpy).toHaveBeenCalledWith("code", "state");
    // expect(res.status).toEqual(301);
    // expect(res.headers.location).toContain(
    //   "/callback?code=200&token=access_token"
    // );

    spy.mockRestore();
  });

  it("test reirect funtion", () => {});

  // it("should show an error if something is wrong with the login", async () => {
  //   const spy = jest
  //     .spyOn(auth0.client, "login")
  //     .mockImplementation((values, cb) => cb({ description: "NEIN" }));

  //   render(
  //     <AllProviders>
  //       <CategoryView />
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

describe("CategoryState", () => {
  it("should initialise with a blank string", () => {
    const { result } = renderHook(() => useRecoilValue(category_state), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual("");
  });
});
