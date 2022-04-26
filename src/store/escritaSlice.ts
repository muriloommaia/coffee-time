import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'escrita',
  initialState: {
    active: false,
    time: 1500,
    timeLeft: 1500,
  },
  reducers: {
    setActiveEscrita(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeEscrita(state, { payload }) {
      return { ...state, time: payload, timeLeft: payload };
    },
    setTimeLeftEscrita(state) {
      return { ...state, timeLeft: state.timeLeft - 1 };
    },
  },
});

export const { setActiveEscrita, setTimeEscrita, setTimeLeftEscrita } = slice.actions;

export default slice.reducer;