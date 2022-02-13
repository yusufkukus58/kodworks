import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import JobStack from "./src/Navigation/JobStack"
const App = () => {
  return (
    <NavigationContainer>
    <JobStack />
  </NavigationContainer>
  )
}

export default App