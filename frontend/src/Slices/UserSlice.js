import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api/authApi';

export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const userData = await loginUser(credentials);
    return userData;
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
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
