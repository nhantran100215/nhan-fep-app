// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducer/RootReducer";

// export const store = configureStore({ reducer: rootReducer });

////auto combine reducers
import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "./reducers/featureSlice";

export const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
});
