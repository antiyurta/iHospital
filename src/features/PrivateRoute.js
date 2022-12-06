import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const token = useSelector(state => state.authReducer.token)
    const isauth = () => {
        if (token) {
            return true;
        }
        return false;
    };
    const location = useLocation();

    const isPermission = () => {
        if (location.state) {
            return true;
        }
        return false;
    };

    const authed = isauth();
    const permission = isPermission();

    return authed ? (permission ? children : <Navigate to="/notPermission" />) : (<Navigate to="/login" />)
}

export default PrivateRoute;