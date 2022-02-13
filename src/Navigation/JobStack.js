import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../pages/Detail/Detail';
import JobDrawer from './JobsDrawer';
const Stack = createNativeStackNavigator();


  
const JobStack = () => {


  return (
      <Stack.Navigator>
          <Stack.Screen 
          name='Jobs'
          component={JobDrawer}
          options={{headerShown:false}}
          />
          <Stack.Screen 
          name='DetailPage'
          component={Detail}
          options={{
              headerTintColor:"#ef534f",
              title:'Jobs Detail',
          }}
          
          />

      </Stack.Navigator>
  )
}

export default JobStack