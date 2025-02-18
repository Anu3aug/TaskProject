import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' 
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Menu from '../screens/Menu';
import CartScreen from '../screens/CartScreen';
import Whislist from '../screens/Whislist';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#672ffb', 
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black', 
          borderTopWidth: 0,
          paddingTop:responsiveHeight(1)
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Whislist"
        component={Whislist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
