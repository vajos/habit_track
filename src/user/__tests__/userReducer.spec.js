import userReducer, {
  initialState,
  resetUser,
  updateUser,
} from "../userReducer";

describe("user reducer", () => {
  it("Should return the initial state", async () => {
    const expectedState = {
      isAuthenticated: false,
      user: undefined,
    };

    expect(userReducer(undefined, {})).toEqual(expectedState);
  });

  it("should reset the state", async () => {
    const changedState = {
      isAuthenticated: true,
      user: { email: "lel@lol@.hehe" },
    };

    expect(userReducer(changedState, resetUser())).toEqual(initialState);
  });

  it("should update a user", async () => {
    const expectedState = {
      isAuthenticated: true,
      user: { email: "lel@lol@.heh" },
    };

    expect(
      userReducer(initialState, updateUser({ email: "lel@lol@.heh" }))
    ).toEqual(expectedState);
  });
});
