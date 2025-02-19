import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../redux/Slice/UserSlice'
import wishlistReducer from '../redux/Slice/WishlistSlice';
import cartReducer from '../redux/Slice/CartSlice';
const store = configureStore({
  reducer: {
    auth: UserSlice,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
