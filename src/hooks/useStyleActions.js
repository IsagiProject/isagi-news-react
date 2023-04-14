import { useAppDispatch } from './store'
import { switchStyleDarkMode } from '../store/style/slice'

export const useStyleActions = () => {
  const dispatch = useAppDispatch()

  const switchDarkMode = () => {
    dispatch(switchStyleDarkMode())
  }

  return { switchDarkMode }
}
