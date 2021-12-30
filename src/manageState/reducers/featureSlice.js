import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const featureSlice = createSlice({
  name: "feature",
  initialState,

  reducers: {
    ///state login
    changeStateLogin: (state, action) => {
      state.login = action.payload;
      console.log("changeStateLogin:", action);
    },
  },
});

////export reducers

export const { changeStateLogin } = featureSlice.actions;
export default featureSlice.reducer;

//export state

export const selectLogin = (state) => state.feature.login;
