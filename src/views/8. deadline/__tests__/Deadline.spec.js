import {
  getByTestId,
  act,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeadlineView from ".././DeadlineView";
import {
  onChangeStartDate,
  onSearch,
  onChangeZieltermin,
  onChangePriority,
} from ".././DeadlineViewFunctions";
import { AllProviders } from "../../../testUtils";
import auth0 from "../../../config/auth0";
import { deadline_state } from "../../../atoms/atoms";
import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot } from "recoil";
import { DatePicker, Select } from "antd";
import { ExceptionMap } from "antd/lib/result";

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
    // spy.mockRestore();
  });
});

describe("Date choosen", () => {
  it("Date choosen", async () => {
    renderHook(() => useRecoilValue(deadline_state), {
      wrapper: RecoilRoot,
    });
    const onSearchMock = jest.fn();

    // render(
    //   <AllProviders>
    //     <RecoilRoot>
    //       <DeadlineView />
    //     </RecoilRoot>
    //   </AllProviders>
    // );

    jest.fn(onChangeStartDate("2022", "25", "04", () => {}));
    jest.fn(onSearch("Test"));
    jest.fn(onChangeZieltermin("Test", true, () => {}));
    jest.fn(onChangeZieltermin("Test", false, () => {}));
    jest.fn(onChangePriority(() => {}, ""));
    // const datePicker = await screen.getByTestId("datePicker");
    // userEvent.click(datePicker);
    // const table = await screen.getByText(/15/i);

    // expect(datePicker).toBe("25:03");
  });
});

// it("funct", async () => {
//   // act(async () => {
//   renderHook(() => useRecoilValue(deadline_state), {
//     wrapper: RecoilRoot,
//   });

//   render(
//     <AllProviders>
//       <RecoilRoot>
//         <DeadlineView />
//       </RecoilRoot>
//     </AllProviders>
//   );
//   // const { getByTestId } = render(<Select onChange={() => jest.fn()} />);
//   // const getPrio = getByTestId("prio");
//   const getPrio = getByRole('textbox', { name: /12:08/i })
//   expect(getPrio).toBeTruthy();
//   userEvent.type(getPrio, 1);
//   const text = await screen.findByText(/1/i);
//   expect(text).toBeInTheDocument;
//   // });

// });
