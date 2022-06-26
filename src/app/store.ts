import { configureStore } from "@reduxjs/toolkit";

// import all the slices here and add to the reducer with key what ever you want to call
import ProductionKPISlice from "@components/Dashboard/NumericalMetrics/ProductionKPI-slice";
export const store = configureStore({
  reducer: {
    productionKPISlice: ProductionKPISlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
