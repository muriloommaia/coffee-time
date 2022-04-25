import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'lectura',
  initialState: {
    active: false,
    time: 1200,
    timeLeft: 1200,
  },
  reducers: {
    setActiveLectura(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeLectura(state, { payload }) {
      return { ...state, time: payload };
    },
    setTimeLeftLectura(state, { payload }) {
      return { ...state, timeLeft: payload };
    },
  },
});

export const { setActiveLectura, setTimeLectura, setTimeLeftLectura } = slice.actions;
export default slice.reducer;
