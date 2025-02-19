import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserEmail } from './src/redux/Slice/UserSlice';
import StackNavigation from './src/navigation/StackNavigation';
import store from './src/redux/Store';
import { StyleSheet, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';

const AuthWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserEmail = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      if (email) {
        dispatch(setUserEmail(email));
      }
    };
    checkUserEmail();
  }, []);

  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AuthWrapper /> 
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
