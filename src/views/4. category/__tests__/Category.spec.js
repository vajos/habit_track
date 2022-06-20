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

    renderHook(() => useRecoilValue(category_state), {
      wrapper: RecoilRoot,
    });

    const history = render(
      <AllProviders>
        <RecoilRoot>
          <CategoryView />
        </RecoilRoot>
      </AllProviders>
    );

    /**
     * If Button geklickt redirect
     * expect redirect
     */

    const but = await screen.getByRole("button", { name: /unterhaltung/i });
    userEvent.click(but);

    expect(window.location.pathname).toEqual("/evaluate");

    spy.mockRestore();
  });

  it("test reirect funtion", () => {});
});

describe("CategoryState", () => {
  it("should initialise with a blank string", () => {
    const { result } = renderHook(() => useRecoilValue(category_state), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual("");
  });
});
