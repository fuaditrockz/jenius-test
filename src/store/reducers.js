import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    contacts: [],
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    contacts: (state) => {
      return state;
    },
    setContacts: (state, action) => {
      state.value.contacts = action.payload;
      return state;
    },
  },
});

export const { setContacts, contacts } = appSlice.actions;
