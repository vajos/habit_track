// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { AllProviders } from "../../../testUtils";
// import HomeCreateView from "../HomeCreateView";
// import useStoryCreate from "../components/useStoryCreate";

// jest.mock("async-validator").mock("../components/useStoryCreate");

// describe("HomeCreateView", () => {
//   it("should show a success message", async () => {
//     useStoryCreate.mockReturnValue({
//       operations: { handleCreate: () => Promise.resolve() },
//       state: { isUploading: false },
//     });

//     render(
//       <AllProviders>
//         <HomeCreateView />
//       </AllProviders>
//     );

//     const fileInput = await screen.findByTestId("drop");
//     const file = new File(["(⌐□_□)"], "chucknorris.png", { type: ".png" });
//     await userEvent.upload(fileInput, file);
//     const titleField = await screen.findByLabelText("Title");
//     const submitButton = await screen.findByRole("button", {
//       name: /Add this story/i,
//     });

//     userEvent.type(titleField, "sth");
//     userEvent.click(submitButton);

//     const text = await screen.findByText(/Story created!/i);
//     expect(text).toBeInTheDocument();
//   });
// });
test("on intial render", () => {});
