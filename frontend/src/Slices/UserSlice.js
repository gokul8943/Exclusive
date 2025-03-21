import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../service/authApi';

// Login action
export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const userData = await loginUser(credentials);
    return userData;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Signup action
export const signup = createAsyncThunk('user/signup', async (userData, { rejectWithValue }) => {
  try {
    const newUser = await registerUser(userData);
    return newUser;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: { userInfo: null, loading: false, error: null },
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Signup cases
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
