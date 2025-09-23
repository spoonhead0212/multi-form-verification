'use client'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from "../app/store/store";
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux'



const persistor = persistStore(store)

export function Providers( {children} ) {
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}