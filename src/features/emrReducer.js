import { createSlice } from '@reduxjs/toolkit';

export const emr = createSlice({
   name: 'emr',
   initialState: {
      emrData: {},
      hicsService: {}
   },
   reducers: {
      setEmrData: (state, action) => {
         state.emrData = action.payload;
      },
      delEmrData: (state) => {
         state.emrData = {};
         state.hicsService = {};
      },
      setHicsService: (state, action) => {
         state.hicsService = action.payload;
      }
   }
});
export const { setEmrData, setHicsService, delEmrData } = emr.actions;
export default emr.reducer;

export const selectCurrentEmrData = (state) => state.emrReducer.emrData;
export const selectCurrentHicsService = (state) => state.emrReducer.hicsService;
