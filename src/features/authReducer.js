import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        userInfo: {
            firstName: null,
            lastName: null,
        },
        token: null,
        depId: [],
        appId: null,
        userId: null,
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
            state.appId = action.payload;
        },
        DelAppId: (state) => {
            state.appId = null;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        DelUserId: (state) => {
            state.userId = null;
        },
        setUserInfo: (state, action) => {
            console.log(action.payload.firstName);
            state.userInfo.firstName = action.payload.firstName;
            state.userInfo.lastName = action.payload.lastName;
        },
        DelUserInfo: (state) => {
            state.userInfo['firstName'] = null;
            state.userInfo['lastName'] = null;
        }
    }
})

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
    DelUserInfo
} = auth.actions;
export default auth.reducer;

export const selectCurrentToken = (state) => state.authReducer.token;
export const selectCurrentDepId = (state) => state.authReducer.depId;
export const selectCurrentAppId = (state) => state.authReducer.appId;
export const selectCurrentUserId = (state) => state.authReducer.userId;
export const selectCurrentUserInfo = (state) => state.authReducer.userInfo;