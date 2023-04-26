import { createSlice } from '@reduxjs/toolkit';

export const emr = createSlice({
   name: 'emr',
   initialState: {
      emrData: {}
   },
   reducers: {
      setEmrData: (state, action) => {
         state.emrData = action.payload;
      },
      delEmrData: (state) => {
         state.emrData = {};
      }
   }
});
export const { setEmrData, delEmrData } = emr.actions;
export default emr.reducer;

export const selectCurrentEmrData = (state) => state.emrReducer.emrData;
