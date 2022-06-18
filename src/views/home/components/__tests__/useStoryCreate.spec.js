// import { act, renderHook } from "@testing-library/react-hooks";
// import { AllProviders } from "../../../../testUtils";
// import useStoryCreate from "../useStoryCreate";
// import { graphql } from "msw";

// describe("useStoryCreate", () => {
//   it("should do it", async () => {
//     const wrapper = ({ children }) => <AllProviders>{children}</AllProviders>;
//     const { result } = renderHook(() => useStoryCreate(), { wrapper });
//     const values = {
//       title: "teststory",
//       thumbnail: new File(["(⌐□_□)"], "chucknorris.png", { type: ".png" }),
//     };

//     await act(async () => {
//       await expect(
//         result.current.operations.handleCreate(values)
//       ).resolves.toBeUndefined();
//     });
//   });

//   it("should throw an error if the the signedUrlRequest query fails", async () => {
//     global.server.use(
//       graphql.query("SignedUrlQuery", (req, res, ctx) =>
//         res(
//           ctx.data({
//             generateUrl: {
//               signedUrl: null,
//               success: false,
//               errors: ["wat"],
//             },
//           })
//         )
//       )
//     );

//     const wrapper = ({ children }) => <AllProviders>{children}</AllProviders>;
//     const { result } = renderHook(() => useStoryCreate(), { wrapper });
//     const values = {
//       title: "teststory",
//       thumbnail: new File(["(⌐□_□)"], "chucknorris.png", { type: ".png" }),
//     };

//     await act(async () => {
//       await expect(
//         result.current.operations.handleCreate(values)
//       ).rejects.toThrowError();
//     });
//   });
// });

test("on intial render", () => {});
