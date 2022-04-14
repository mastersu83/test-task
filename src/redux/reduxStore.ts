import { configureStore } from "@reduxjs/toolkit";
import transportationSlice from "./reducers/transportationSlice";

export const setupState = () => {
  return configureStore({
    reducer: { transportationSlice },
  });
};

export type AppStoreType = ReturnType<typeof setupState>;
export type RootReducerType = ReturnType<AppStoreType["getState"]>;
export type AppDispatchType = AppStoreType["dispatch"];
