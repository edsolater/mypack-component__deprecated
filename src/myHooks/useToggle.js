import { useState } from 'react'

export const useToggle = initState => {
  const [state, changeStateFunction] = useState(initState)
  const toggle = () => {
    changeStateFunction(!state)
  }
  return [state, toggle]
}
