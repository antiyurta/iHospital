import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store, { Persistor } from './features/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SocketProvider } from './features/socketContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
         <SocketProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </SocketProvider>
      </PersistGate>
   </Provider>
);
reportWebVitals();
