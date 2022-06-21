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
    renderHook(() => useRecoilValue(deadline_state), {
      wrapper: RecoilRoot,
    });

    const { getByTestId } = render(
      <AllProviders>
        <RecoilRoot>
          <DeadlineView />
        </RecoilRoot>
      </AllProviders>
    );

    const switchButton = getByTestId("switch-slider");
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

    render(
      <AllProviders>
        <RecoilRoot>
          <DeadlineView />
        </RecoilRoot>
      </AllProviders>
    );

    function callback(data) {
      expect(data).toBe("2022.25.04");
    }
    function zielCallback(data) {
      expect(data).toBe("Test");
    }
    // async function zielCallback2(data) {
    //   expect(data).toBe("Test");
    //   const text = await screen.findByText(/Anfangsdatum wählen/i);
    //   expect(text).toBeInTheDocument();
    // }
    function prioCall(data) {
      expect(data).toBe("");
    }

    jest.fn(onChangeStartDate("2022", "25", "04", callback));
    jest.fn(onSearch("Test"));
    jest.fn(onChangeZieltermin("Test", true, zielCallback));
    jest.fn(onChangeZieltermin("Test", false, zielCallback));
    jest.fn(onChangePriority(prioCall, ""));
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
