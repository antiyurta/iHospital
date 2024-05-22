import { createSlice } from '@reduxjs/toolkit';

export const emr = createSlice({
   name: 'emr',
   initialState: {
      emrData: {},
      hicsService: {},
      otsData: {}
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
      },
      setInspectionNoteId: (state, action) => {
         state.emrData = { ...state.emrData, inspectionNoteId: action.payload };
      },
      setHicsSeal: (state, action) => {
         state.emrData = { ...state.emrData, hicsSeal: action.payload };
      },
      setOtsData: (state, action) => {
         state.otsData = action.payload;
      },
      delOtsData: (state) => {
         state.otsData = {};
      }
   }
});
export const { setEmrData, setHicsService, setInspectionNoteId, setHicsSeal, delEmrData, setOtsData, delOtsData } =
   emr.actions;
export default emr.reducer;
export const selectCurrentEmrData = (state) => state.emrReducer.emrData;
export const selectCurrentOtsData = (state) => state.emrReducer.otsData;
export const selectCurrentHicsService = (state) => state.emrReducer.hicsService;
