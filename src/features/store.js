import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import hospitalReducer from './hospitalReducer';
import emrReducer from './emrReducer';
import patientReducer from './patientReducer';

const reducers = combineReducers({
   authReducer,
   hospitalReducer,
   emrReducer,
   patientReducer
});

const encryptedTransForm = encryptTransform({
   secretKey: `${process.env.REACT_APP_REDUX_SECRET_KEY}`,
   onError: function (error) {
      console.log('redux encrypt error: ', error);
   }
});

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['authReducer', 'hospitalReducer', 'emrReducer', 'patientReducer'],
   blacklist: [],
   transforms: [encryptedTransForm]
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
   reducer: persistedReducers,
   middleware: [thunkMiddleware]
});

const Persistor = persistStore(store);

export { Persistor };
export default store;
