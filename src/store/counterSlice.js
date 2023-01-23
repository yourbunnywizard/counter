import { createSlice } from '@reduxjs/toolkit';

export const saveCounterValue = (value) => {
  window.localStorage.setItem('counter', JSON.stringify(value));
}

const getCounterValue = () => {
  return JSON.parse(window.localStorage.getItem('counter')) || 0;
}

const initialState = {
  value: getCounterValue(),
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const {
  increment,
  decrement,
  reset
} = counterSlice.actions;

export const selectCountValue = (state) => state.counter.value;

export default counterSlice.reducer;
