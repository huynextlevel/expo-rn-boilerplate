import { store } from 'src/store'
import persistedRootReducer from 'src/store/reducers'

const makeStore = () => store

export type RootState = ReturnType<typeof persistedRootReducer>
export type ReduxStore = ReturnType<typeof makeStore>
export type ReduxState = ReturnType<ReduxStore['getState']>
export type ReduxDispatch = ReduxStore['dispatch']
