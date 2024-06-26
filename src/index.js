import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store, { Persistor } from './features/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SocketProvider } from './features/socketContext';
import { ConfigProvider } from 'antd';
const root = ReactDOM.createRoot(document.getElementById('root'));
import mnMN from 'antd/locale/mn_MN';
import EscapeAntd from '@Features/AppGlobal';
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
         <SocketProvider>
            <BrowserRouter>
               <ConfigProvider
                  locale={mnMN}
                  theme={{
                     components: {
                        Button: {
                           paddingBlock: 8,
                           paddingInline: 12
                        }
                     },
                     token: {
                        colorPrimary: '#0095FF'
                     }
                  }}
               >
                  <EscapeAntd>
                     <App />
                  </EscapeAntd>
               </ConfigProvider>
            </BrowserRouter>
         </SocketProvider>
      </PersistGate>
   </Provider>
);
reportWebVitals();
