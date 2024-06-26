import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    contacts: [],
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contacts: (state, action) => {
      state.value = action.payload;
      return state;
    },
  },
});

export const { contacts } = contactsSlice.actions;
