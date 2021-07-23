import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Home from '../screens/Dashboard';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen component={SignIn} name="SignIn" />
      <AuthStack.Screen component={SignUp} name="SignUp" />
    </AuthStack.Navigator>
  );
};

const RootStack = createStackNavigator();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};
