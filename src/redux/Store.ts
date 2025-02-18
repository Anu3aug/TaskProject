import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../redux/Slice/UserSlice'

const store = configureStore({
  reducer: {
    auth: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
