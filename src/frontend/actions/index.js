export const ACTIONS = {
  favorite: 'SET_FAVORITE',
  delete: 'DELETE_FAVORITE',
  login: 'LOGIN_REQUEST',
  logout: 'LOGOUT_REQUEST',
  register: 'REGISTER_REQUEST',
  video: 'GET_VIDEO_SOURCE'
}

export const setFavorite = (payload) => ({
  type: ACTIONS.favorite,
  payload
})

export const deleteFavorite = (payload) => ({
  type: ACTIONS.delete,
  payload
})

export const loginRequest = (payload) => ({
  type: ACTIONS.login,
  payload
})

export const logoutRequest = (payload) => ({
  type: ACTIONS.logout,
  payload
})

export const registerRequest = (payload) => ({
  type: ACTIONS.register,
  payload
})
export const getVideoSource = (payload) => ({
  type: ACTIONS.video,
  payload
})
