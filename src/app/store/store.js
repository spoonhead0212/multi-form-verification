// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import addonReducer from "../../AllSlices/addonSlice/addonSlice"
import planReducer from "../../AllSlices/planSlice/planSlice"
import productsReducer from "@/AllSlices/productsSlice/productsSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    // plans: planReducer,
    // addons: addonReducer,
    productList: productsReducer
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