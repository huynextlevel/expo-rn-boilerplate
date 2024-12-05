import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

import rootSaga from './sagas'
// import { reducer } from './reducers'
import persistedRootReducer from './reducers'
import { middleware } from './middleware'

const sagaMiddleware = createSagaMiddleware()
const updateMiddleware = [...middleware, sagaMiddleware]

const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(updateMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store, null)

export { store, persistor }
