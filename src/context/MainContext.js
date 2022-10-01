
import axios from "axios";
import React, { useState } from "react";

const MainContext = React.createContext();
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const MainStore = (props) => {
  const [token, setToken] = useState(null);
  return (
    <MainContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
