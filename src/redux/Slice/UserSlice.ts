import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  email: string | null;
}

const initialState: AuthState = {
  email: null,
};

const UserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      AsyncStorage.setItem('userEmail', action.payload); 
    },
    logout: (state) => {
      state.email = null;
      AsyncStorage.removeItem('userEmail');
    },
    setUserEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    }
  },
});

export const { loginSuccess, logout, setUserEmail } = UserSlice.actions;
export default UserSlice.reducer;
