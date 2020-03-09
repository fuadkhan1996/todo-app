import { useState, useEffect } from 'react'

function usePresistedState(Key, defaultValue) {
  const [state, setState] = useState(JSON.parse(localStorage.getItem(Key)) || defaultValue)

  useEffect(() => {
    localStorage.setItem(Key, JSON.stringify(state))

    return () => {
      localStorage.setItem(Key, JSON.stringify(state))
    }
  }, [Key, state])

  return [state, setState]
}

export default usePresistedState
