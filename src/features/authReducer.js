import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
   name: 'auth',
   initialState: {
      firstName: null,
      lastName: null,
      token: null,
      depId: [],
      appIds: [],
      userId: null,
      isInsurance: null,
      roleId: null,
      phoneNo: null,
      hospitalName: null,
      hospitalId: null,
      hospitalIsAfterPay: false
   },
   reducers: {
      set: (state, action) => {
         state.firstName = action.payload.firstName;
         state.lastName = action.payload.lastName;
         state.depId = action.payload.depId;
         state.appIds = action.payload.appIds;
         state.userId = action.payload.userId;
         state.isInsurance = action.payload.isInsurance;
         state.roleId = action.payload.roleId;
         state.phoneNo = action.payload.phoneNo;
         state.hospitalName = action.payload.hospitalName;
         state.hospitalId = action.payload.hospitalId;
         state.hospitalIsAfterPay = action.payload.isAfterPay;
      },
      Delete: (state) => {
         state.firstName = null;
         state.firstName = null;
         state.lastName = null;
         state.depId = null;
         state.appIds = null;
         state.userId = null;
         state.isInsurance = null;
         state.roleId = null;
         state.phoneNo = null;
         state.hospitalName = null;
         state.hospitalId = null;
      },
      login: (state, action) => {
         state.token = action.payload;
      },
      logout: (state) => {
         state.token = null;
      }
   }
});

export const { set, Delete, login, logout } = auth.actions;
export default auth.reducer;

export const selectCurrentToken = (state) => state.authReducer.token;
export const selectCurrentDepId = (state) => state.authReducer.depId;
export const selectCurrentAppId = (state) => state.authReducer.appIds;
export const selectCurrentUserId = (state) => state.authReducer.userId;
export const selectCurrentFirstName = (state) => state.authReducer.firstName;
export const selectCurrentLastName = (state) => state.authReducer.lastName;
export const selectCurrentInsurance = (state) => state.authReducer.isInsurance;
export const selectCurrentRoleId = (state) => state.authReducer.roleId;
export const selectCurrentPhoneNo = (state) => state.authReducer.phoneNo;
export const selectCurrentHospitalName = (state) => state.authReducer.hospitalName;
export const selectCurrentHospitalId = (state) => state.authReducer.hospitalId;
export const selectCurrentIsAfterPay = (state) => state.authReducer.hospitalIsAfterPay;
