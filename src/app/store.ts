import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../features/global/globalSlice.ts';
import cellsReducer from '../features/cells/slice.ts';
import mergeReducer from '../features/merge/slice.ts';

const store = configureStore({
  reducer: {
    global: globalReducer,
    cells: cellsReducer,
    merge: mergeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;