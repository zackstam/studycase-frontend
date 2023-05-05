import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  carts: [],
  auth: true,
  user: {},
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAuth: (state, action) => {
      state.auth  = action.payload;
    },
  },
});

export default counterSlice.reducer;