import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
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

const persistConfig = {
   key: 'root',
   storage
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
   reducer: persistedReducers,
   devTools: true,
   middleware: [thunk]
});

const Persistor = persistStore(store);

export { Persistor };
export default store;
