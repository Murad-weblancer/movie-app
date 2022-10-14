import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    token: null,
    email: null,
    user: {},
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    curenntlyUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.token = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, curenntlyUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
