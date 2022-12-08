import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        depId: [],
        appId: '',
        userId: '',
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
    setMenus,
    DelMenus,
} = auth.actions;
export default auth.reducer;

export const selectCurrentToken = (state) => state.authReducer.token;
export const selectCurrentDepId = (state) => state.authReducer.depId;
export const selectCurrentAppId = (state) => state.authReducer.appId;
export const selectCurrentUserId = (state) => state.authReducer.userId;