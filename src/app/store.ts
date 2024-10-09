import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../features/global/globalSlice.ts';
import cellsReducer from '../features/cells/cellsSlice.ts';

const store = configureStore({
  reducer: {
    global: globalReducer,
    cells: cellsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;