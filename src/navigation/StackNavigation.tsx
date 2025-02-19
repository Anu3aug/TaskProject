import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
import DrawerNavigation from './DrawerNavigation'
import BottomNavigation from './BottomNavigation'
import ProductDetails from '../screens/ProductDetails'


type  RootParamList = {
  Login : undefined;
  HomeScreen : undefined;
  ProductDetails:undefined
}
const Stack = createNativeStackNavigator<RootParamList>()

const StackNavigation = () => {

  
  return (
   
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={BottomNavigation} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>

  )
}

export default StackNavigation