import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isAuthenticated: false,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isAuthenticated = true;
      }
    },
    resetUser: (state, action) => {
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
