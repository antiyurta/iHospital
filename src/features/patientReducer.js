import { createSlice } from '@reduxjs/toolkit';

export const patientSlice = createSlice({
   name: 'patient',
   initialState: {
      patient: {}
   },
   reducers: {
      setPatient: (state, action) => {
         state.patient = action.payload;
      }
   }
});
export const { setPatient } = patientSlice.actions;
export default patientSlice.reducer;

export const selectPatient = (state) => state.patientReducer.patient;
