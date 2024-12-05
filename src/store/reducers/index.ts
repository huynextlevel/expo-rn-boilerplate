import { persistCombineReducers } from 'redux-persist'

import { reduxStorage } from '../storage'
import { appSlice } from 'src/store/slices'
import { REDUX_SLICE } from 'src/constants/redux'

export const reducer = {
  [REDUX_SLICE.APP]: appSlice.reducer,
}

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
  whitelist: [''],
}

export const persistedRootReducer = persistCombineReducers(persistConfig, reducer)

export default persistedRootReducer
