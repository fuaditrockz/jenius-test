import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./reducers";

export default configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
