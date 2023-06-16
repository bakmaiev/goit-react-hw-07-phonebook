const { createSlice } = require('@reduxjs/toolkit');

const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
