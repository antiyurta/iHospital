import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store, { Persistor } from './features/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Helmet } from 'react-helmet';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
         <BrowserRouter>
            <Helmet>
               <html lang="en" />
               <title>iHospital</title>
               <meta name="Дэлгэрэнгүй" content="Эрүүл мэндийн нэгдсэн цогц систем" />
               <meta property="og:title" content="iHospital" />
               <meta property="og:description" content="Эрүүл мэндийн нэгдсэн цогц систем" />
               <meta property="og:image" content="https://www.ihospital.mn/favicon.ico" />
               <meta property="og:url" content="https://www.ihospital.mn" />
               <meta property="og:type" content="website" />
            </Helmet>
            <App />
         </BrowserRouter>
      </PersistGate>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
