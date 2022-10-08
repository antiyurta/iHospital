import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const token = useSelector(state => state.authReducer.token)
    const isauth = () => {
        if (token) {
            return true;
        }
        return false;
    }
    const authed = isauth();
    return authed ? children : <Navigate to="/login" />
}

export default PrivateRoute;