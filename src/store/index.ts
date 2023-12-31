import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from "./slices/user.slice"
import artilceSliceReducer from "./slices/article.slice"
import commentSliceReducer from "./slices/comment.slice"

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    article: artilceSliceReducer,
    comment: commentSliceReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}) /* .concat(logger), */,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
};

export default store;