import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import pictureSlice from './pictureSlice'


const persistConfig = {
    key : 'root',
    storage
}


const rootReducer = combineReducers({
    pictureSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = configureStore({
    reducer : persistedReducer
})

export const persistor = persistStore(Store)