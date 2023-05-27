import jwtDecode from 'jwt-decode'
const DEFAULT_USER_DATA = {
  id: null,
  email: null,
  username: null,
  admin: 0
}
export const useUserData = (token) => {
  if (!token) return DEFAULT_USER_DATA
  try {
    return jwtDecode(token)
  } catch (error) {
    return DEFAULT_USER_DATA
  }
}
