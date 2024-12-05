import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { ReduxDispatch, ReduxState } from 'src/store/types/common'

export const useAppDispatch: () => ReduxDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector
