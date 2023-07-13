import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'notes',
  initialState: { notes: [] },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});
export const { setNotes } = slice.actions;
export default slice.reducer;
