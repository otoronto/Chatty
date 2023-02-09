import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { setAuthorizationHeader } from '../../api/authCalls'

let defaultState = {
  isLoggedIn: false
}

const authToken = Cookies.get('auth-cookie')
if (authToken !== undefined) {
  defaultState = JSON.parse(authToken)
}

setAuthorizationHeader({ isLoggedIn: defaultState.isLoggedIn, token: defaultState.token })

export const authSlice = createSlice({
  name: 'auth',
  initialState: { value: defaultState },
  reducers: {
    loginAction: (state, action) => {
      const auth = { ...action.payload, isLoggedIn: true }
      state.value = auth;
      Cookies.set('auth-cookie', JSON.stringify(auth), { expires: 1 })
      setAuthorizationHeader({ isLoggedIn: true, token: action.payload.token })
    },
    logoutAction: (state, action) => {
      Cookies.remove('auth-cookie')
      state.value = { isLoggedIn: false }
      setAuthorizationHeader({ isLoggedIn: false })
    }
  }
})

export const authReducer = authSlice.reducer;
export const { loginAction, logoutAction } = authSlice.actions;