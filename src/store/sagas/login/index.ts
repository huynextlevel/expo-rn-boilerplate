import { ForkEffect, put, takeLatest } from 'redux-saga/effects'
import { setToken } from 'src/store/actions'
import { SET_TOKEN } from 'src/store/actions/app/app.types'

function* setTokenSaga(action: ReturnType<typeof setToken>) {
  yield put(setToken(action.payload))
}

function* loginSagas(): Generator<ForkEffect<never>, void> {
  yield takeLatest(SET_TOKEN, setTokenSaga)
}

export default loginSagas
