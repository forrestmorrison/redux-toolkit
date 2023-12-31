import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'
import themeReducer from '../features/themeSlice'
import postReducer from '../features/postSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    post: postReducer
  },
});
