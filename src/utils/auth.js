export const isLoggedIn = () => {
  // for logged-in user only we receive refresh token , for guest user do not have refresh token
  if (localStorage.getItem('loginToken')) return true

  return false
}
