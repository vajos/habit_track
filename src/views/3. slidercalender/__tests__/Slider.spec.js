import { render, screen } from "@testing-library/react";
import SliderView from "../SliderView";
import { AllProviders } from "../../../testUtils";
import auth0 from "../../../config/auth0";
import userEvent from "@testing-library/user-event";
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { slider_state } from "../../../atoms/atoms";

describe("CategoryView", () => {
    it("should enable a category to be choosen", async () => {
        const spy = jest
        .spyOn(auth0.client, "login")
        .mockImplementation((values, cb) => cb(null, { accessToken: "123" }));

        renderHook(() => useRecoilValue(slider_state), {
        wrapper: RecoilRoot,
        });

        const history = render(
        <AllProviders>
            <RecoilRoot>
            <SliderView />
            </RecoilRoot>
        </AllProviders>
        );
    });

    it("test redirect funtion", async () => {

        const spy = jest
        .spyOn(auth0.client, "login")
        .mockImplementation((values, cb) => cb(null, { accessToken: "123" }));

        const { result } = renderHook(() => useRecoilValue(slider_state), {
          wrapper: RecoilRoot,
        });

        const history = render(
            <AllProviders>
                <RecoilRoot>
                <SliderView />
                </RecoilRoot>
            </AllProviders>
        );

        const but = await screen.findByRole('button', {name: /A/i});
        userEvent.click(but);
        expect(window.location.pathname).toEqual("/category");
        spy.mockRestore();
    });
});  