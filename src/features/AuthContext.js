import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//redux
import { login } from './authReducer';
//common
import { openNofi } from '@Comman/common';
//api
import AuthApi from '@ApiServices/authentication/authentication.api';
//context
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(() => {
      if (localStorage.getItem('tokens')) {
         let tokens = JSON.parse(localStorage.getItem('tokens'));
         return jwt_decode(tokens.accessToken);
      }
      return null;
   });
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const loginn = async (payload) => {
      return await AuthApi.postLogin(payload)
         .then(({ data: { response } }) => {
            dispatch(login(response.accessToken));
            localStorage.setItem('tokens', JSON.stringify(response));
            setUser(jwt_decode(response.accessToken));
            navigate('/profile');
         })
         .catch((error) => {
            console.log(error);
            if (error.code === 'ERR_NETWORK') {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
            } else if (error.response.data.status === 401) {
               openNofi('warning', 'Даатгал', 'Даатгалтай холбогдож чадсангүй');
            } else if (error.response.status == 400) {
               openNofi('warning', 'Нэвтрэх', `${error.response.data.message}`);
            }
            return false;
         });
   };

   const logoutt = async () => {
      await AuthApi.postLogout()
         .then((response) => {})
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            localStorage.removeItem('tokens');
            setUser(null);
         });
   };

   return <AuthContext.Provider value={{ user, loginn, logoutt }}>{children}</AuthContext.Provider>;
};
export default AuthContext;
