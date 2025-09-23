import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import addonReducer from "../../AllSlices/addonSlice/addonSlice"
// import planReducer from "../../AllSlices/planSlice/planSlice"
import productsReducer from "../../AllSlices/productsSlice/productsSlice";
import commentsReducer from '../../AllSlices/commentsSlice/commentsSlice';
import extensionsReducer from '../../AllSlices/extensionSlice/extensionSlice'
import authReducer from '../../AllSlices/cosmeticsSlice/authSlice'

export const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    // plans: planReducer,
    // addons: addonReducer,
    productList: productsReducer,
    extensionList: extensionsReducer,
    comments: commentsReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer) 

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
        },
    }),
})