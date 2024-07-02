import { createSlice } from '@reduxjs/toolkit';

export const hospital = createSlice({
   name: 'hospital',
   initialState: {
      id: null,
      name: '',
      logoId: null,
      description: '',
      address: '',
      email: '',
      phone: '',
      registerNumber: '',
      isXyp: false,
      isActive: false,
      isInsurance: false,
      isCitizenByOtp: false
   },
   reducers: {
      set: (state, action) => {
         state.id = action.payload.id;
         state.name = action.payload.name;
         state.logoId = action.payload.logoId;
         state.description = action.payload.description;
         state.email = action.payload.email;
         state.phone = action.payload.phone;
         state.registerNumber = action.payload.registerNumber;
         state.isXyp = action.payload.isXyp;
         state.isActive = action.payload.isActive;
         state.isInsurance = action.payload.isInsurance;
         state.isCitizenByOtp = action.payload.isCitizenByOtp;
      },
      remove: (state) => {
         state.id = null;
         state.name = '';
         state.logoId = null;
         state.description = '';
         state.email = '';
         state.phone = '';
         state.registerNumber = '';
         state.isXyp = false;
         state.isActive = false;
         state.isInsurance = false;
         state.isCitizenByOtp = false;
      }
   }
});

export const { set, remove } = hospital.actions;
export default hospital.reducer;

export const selectHospitalIsXyp = (state) => state.hospitalReducer.isXyp;
