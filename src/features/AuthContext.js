import axios from 'axios';
import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { openNofi } from '../components/common';
import jwtInterceopter from '../components/jwtInterceopter';
import { useDispatch } from 'react-redux';
import { login } from './authReducer';

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

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
   //    if (user) {
   //       console.log(user.exp * 1000);
   //       console.log(Date.now());
   //       if (user.exp * 1000 < Date.now()) {
   //          logout();
   //       }
   //    }
   const loginn = async (payload) => {
      return await axios
         .post(DEV_URL + 'authentication/login', payload, {
            headers: {
               'x-api-key': API_KEY
            }
         })
         .then((response) => {
            dispatch(login(response.data.response.accessToken));
            localStorage.setItem('tokens', JSON.stringify(response.data.response));
            setUser(jwt_decode(response.data.response.accessToken));
            navigate('/profile');
         })
         .catch((error) => {
            console.log(error);
            if (error.code === 'ERR_NETWORK') {
               openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
            } else if (error.response.data.status === 401) {
               openNofi('warning', 'Даатгал', 'Даатгалтай холбогдож чадсангүй');
            } else if (error.response.status == 400) {
               openNofi('warning', 'Нэвтрэх', 'Нэвтрэх нэр эсвэл нууц үг буруу');
            }
            return false;
         });
   };

   const logoutt = async () => {
      await jwtInterceopter
         .post('authentication/logout')
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
