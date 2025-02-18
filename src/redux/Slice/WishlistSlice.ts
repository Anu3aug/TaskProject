import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  name: string;
  price: string;
  details: string;
  image: any;
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const productExists = state.items.find(item => item.name === action.payload.name);
      if (!productExists) {
        state.items.push(action.payload);
      }
      AsyncStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      AsyncStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    loadWishlist: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    }
  },
});

export const { addToWishlist, removeFromWishlist, loadWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
