import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Config } from 'screens/Config';
import { Game } from 'screens/Game';
import { Home } from 'screens/Home';
import type { RootStackParamList } from 'screens/types';

const Stack = createStackNavigator<RootStackParamList>();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Config" component={Config} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  </NavigationContainer>
);
