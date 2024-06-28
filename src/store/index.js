import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./reducers";

export default configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
