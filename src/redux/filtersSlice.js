const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
