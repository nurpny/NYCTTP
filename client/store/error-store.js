// Action Types
import { ADD_TRANSACTION } from './transaction-store'
import { GET_USER, REMOVE_USER } from './user-store'
export const BUYSELL_ERROR = 'BUY_SELL_ERROR'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

// Initial State
const defaultError = {}

// Reducer
export default (state = defaultError, action) => {
  switch (action.type) {
    case BUYSELL_ERROR:
      return { ...state, buySell: action.buySellError }
    case ADD_TRANSACTION:
      return { ...state, buySell: action.buySellError }
    case LOGIN_ERROR:
      return { ...state, login: action.loginError }
    case GET_USER:
      return { ...state, login: action.loginError, signup: action.signUpError }
    case SIGNUP_ERROR:
      return { ...state, signup: action.signUpError }
    // if the user logs out of system, all errors reset to default
    case REMOVE_USER:
      return defaultError
  }
  return state
}