import React from "react";
import { Navigate } from "react-router-dom";

const isauth = () => {
    if (localStorage.getItem('accessToken')) {
        return true;
    } else {
        return false;
    }
}

const PrivateRoute = ({ children }) => {
    const authed = isauth();
    return authed ? children : <Navigate to="/login" />
}

export default PrivateRoute;