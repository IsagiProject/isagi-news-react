import { useAppDispatch } from './store'
import { addUserToken, removeUserToken } from '../store/token/slice'

export const useAuthActions = () => {
  const dispatch = useAppDispatch()

  const addToken = (token) => {
    dispatch(addUserToken(token))
  }

  const removeToken = () => {
    dispatch(removeUserToken())
  }

  return { addToken, removeToken }
}
