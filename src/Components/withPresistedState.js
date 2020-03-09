import React from 'react'
import usePresistedState from '../Hooks/usePresistedState'

const withPresistedState = (WrappedComponent) => {
  const WrapperComponent =  (props) => {
    const [storageData, setStorageData] = usePresistedState(props.storageKey, props.defaultStorageValue)

    return (
      <WrappedComponent
        storageData = { storageData }
        setStorageData = { setStorageData }
        {...props}
      />
    )
  }

  return WrapperComponent
}

export default withPresistedState
