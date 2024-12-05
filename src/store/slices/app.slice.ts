import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { REDUX_SLICE } from 'src/constants/redux'
import { AppState } from '../types/slices/app.type'

const initialState: AppState = {
  token: '',
}

export const appSlice = createSlice({
  name: REDUX_SLICE.APP,
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    resetAppState: state => {
      state = initialState
    },
  },
})
