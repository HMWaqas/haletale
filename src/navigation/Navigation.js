import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import * as navigators from '../constants/navigators';
import * as screens from '../screens';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigators.STARTUP_SCREEN}>
        <Stack.Screen
          name={navigators.STARTUP_SCREEN}
          component={screens.StartupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigators.LOGIN_SCREEN}
          component={screens.LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
