import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Config } from 'screens/Config';
import { Game } from 'screens/Game';
import { Home } from 'screens/Home';
import { HighScores } from 'screens/HighScores';
import type { RootStackParamList } from 'screens/types';
import { useAssets } from 'app/media/useAssets';
import { AssetsContext } from 'app/media/AssetsContext';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  const { assets } = useAssets();

  if (!assets) {
    // TODO: Loading component
    return null;
  }

  return (
    <AssetsContext.Provider value={{ assets }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="HighScores"
            component={HighScores}
            options={{
              gestureEnabled: true,
              gestureDirection: 'horizontal-inverted',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Config"
            component={Config}
            options={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </AssetsContext.Provider>
  );
};
