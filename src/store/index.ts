import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

import persistedRootReducer from './reducers'
import { middleware } from './middleware'

const updateMiddleware = [...middleware]

const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(updateMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

const persistor = persistStore(store, null)

export { store, persistor }
