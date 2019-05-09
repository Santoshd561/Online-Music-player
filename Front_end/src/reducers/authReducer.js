import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";
import isEmpty from '../is-empty'
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};


export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
  }
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
