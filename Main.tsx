import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNative from './navigation/StackNative'

const Main = () => {
  return (
    <NavigationContainer>
        <StackNative />
    </NavigationContainer>
  )
}

export default Main