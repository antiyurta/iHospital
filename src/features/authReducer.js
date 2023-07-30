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
      hospitalName: null
   },
   reducers: {
      login: (state, action) => {
         state.token = action.payload;
      },
      logout: (state) => {
         state.token = null;
      },
      setDepId: (state, action) => {
         state.depId = action.payload;
      },
      DelDepId: (state) => {
         state.depId = null;
      },
      setAppId: (state, action) => {
         state.appIds = action.payload;
      },
      DelAppId: (state) => {
         state.appIds = null;
      },
      setUserId: (state, action) => {
         state.userId = action.payload;
      },
      DelUserId: (state) => {
         state.userId = null;
      },
      setUserInfo: (state, action) => {
         state.firstName = action.payload.firstName;
         state.lastName = action.payload.lastName;
      },
      DelUserInfo: (state) => {
         state.firstName = null;
         state.lastName = null;
      },
      setInsurrance: (state, action) => {
         state.isInsurance = action.payload;
      },
      DelInsurrance: (state) => {
         state.isInsurance = null;
      },
      setRoleId: (state, action) => {
         state.roleId = action.payload;
      },
      DelRoleId: (state) => {
         state.roleId = null;
      },
      setPhoneNo: (state, action) => {
         state.phoneNo = action.payload;
      },
      DelPhonoNo: (state) => {
         state.phoneNo = null;
      },
      setHospitalName: (state, action) => {
         state.hospitalName = action.payload;
      },
      DelHospitalName: (state) => {
         state.hospitalName = null;
      }
   }
});

export const {
   login,
   logout,
   setDepId,
   DelDepId,
   setAppId,
   DelAppId,
   setUserId,
   DelUserId,
   setUserInfo,
   DelUserInfo,
   setInsurrance,
   DelInsurrance,
   setRoleId,
   DelRoleId,
   setPhoneNo,
   DelPhonoNo,
   setHospitalName,
   DelHospitalName
} = auth.actions;
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
