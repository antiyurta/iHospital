import { createSlice } from '@reduxjs/toolkit';

export const note = createSlice({
   name: 'note',
   initialState: {
      note: {}
   },
   reducers: {
      setNote: (state, action) => {
         state.note = action.payload;
      },
      delNote: (state) => {
         state.note = {};
      }
   }
});
export const { setNote, delNote } = note.actions;
export default note.reducer;

export const selectCurrentNote = (state) => state.noteReducer.note;
