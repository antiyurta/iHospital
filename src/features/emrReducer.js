import { createSlice } from '@reduxjs/toolkit';

export const emr = createSlice({
   name: 'emr',
   initialState: {
      emrData: {},
      hicsSeal: {},
      addHics: {},
      otsData: {}
   },
   reducers: {
      setEmrData: (state, action) => {
         state.emrData = action.payload;
      },
      delEmrData: (state) => {
         state.emrData = {};
         state.hicsSeal = {};
         state.addHics = {};
         state.otsData = {};
      },
      setAddHics: (state, action) => {
         state.addHics = action.payload;
      },
      setHicsSeal: (state, action) => {
         state.hicsSeal = action.payload;
      },
      setInspectionNoteId: (state, action) => {
         state.emrData = { ...state.emrData, inspectionNoteId: action.payload };
      },
      setOtsData: (state, action) => {
         state.otsData = action.payload;
      },
      delOtsData: (state) => {
         state.otsData = {};
      }
   }
});
export const { setEmrData, delEmrData, setAddHics, setHicsSeal, setInspectionNoteId, setOtsData, delOtsData } =
   emr.actions;
export default emr.reducer;
export const selectCurrentEmrData = (state) => state.emrReducer.emrData;
export const selectCurrentOtsData = (state) => state.emrReducer.otsData;
export const selectCurrentHicsSeal = (state) => state.emrReducer.hicsSeal;
export const selectCurrentAddHics = (state) => state.emrReducer.addHics;
