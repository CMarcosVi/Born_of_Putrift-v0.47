import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  life: 50,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLife: (state, action) => {
      state.life = Math.min(100, Math.max(0, action.payload));
    },
    increment: (state, action) => {
      state.life = Math.min(100, state.life + action.payload)
    },
    decrement: (state, action) => {
      state.life = Math.max(0, state.life - action.payload);
    },
  },
});

export const { setLife, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
