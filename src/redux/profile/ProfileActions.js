import ActionTypes from '../actionTypes'

const {
  LOGIN,
  LOGOUT
} = ActionTypes;

export function setUser(user) {
  return {
    type: LOGIN,
    payload: user
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
