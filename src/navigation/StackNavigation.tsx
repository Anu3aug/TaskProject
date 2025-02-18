import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
import BottomNavigation from './BottomNavigation'


type  RootParamList = {
  Login : undefined;
  HomeScreen : undefined
}
const Stack = createNativeStackNavigator<RootParamList>()

const StackNavigation = () => {

  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={BottomNavigation} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default StackNavigation