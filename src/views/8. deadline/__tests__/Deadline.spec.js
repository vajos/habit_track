import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeadlineView from ".././DeadlineView";
import { AllProviders } from "../../../testUtils";
import auth0 from "../../../config/auth0";
import { deadline_state } from "../../../atoms/atoms";
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot } from "recoil";

describe("DeadlineView", () => {
  it("should enable a Deadline to be choosen", async () => {
    // const spy = jest
    //   .spyOn(auth0.client, "login")
    //   .mockImplementation((values, cb) => cb(null, { accessToken: "123" }));

    renderHook(() => useRecoilValue(deadline_state), {
      wrapper: RecoilRoot,
    });

    render(
      <AllProviders>
        <RecoilRoot>
          <DeadlineView />
        </RecoilRoot>
      </AllProviders>
    );

    const switchButton = await screen.getByRole("switch");
    userEvent.click(switchButton);

    expect(switchButton).toBeInTheDocument();
    expect(switchButton).toBeChecked();
    spy.mockRestore();
  });

  it("Date is choosen", async () => {
    renderHook(() => useRecoilValue(deadline_state), {
      wrapper: RecoilRoot,
    });

    render(
      <AllProviders>
        <RecoilRoot>
          <DeadlineView />
        </RecoilRoot>
      </AllProviders>
    );

    // const date = await container.querySelector(
    //   "#root > section > div > div:nth-child(2) > main > div > div:nth-child(1) > div > div:nth-child(2) > div"
    // );

    onChangeStartDate("25.04.1995");
    expect.ob;
    console.log(date);

    spy.mockRestore();
  });
});
