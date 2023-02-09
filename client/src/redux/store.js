import { authReducer } from "./feature/authSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  auth: authReducer,
})



export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}