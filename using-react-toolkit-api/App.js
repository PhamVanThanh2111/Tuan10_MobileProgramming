import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Javascript/Screen1'
import Screen2 from './Javascript/Screen2'
import ScreenAdd from './Javascript/ScreenAdd'

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen2">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="ScreenAdd" component={ScreenAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;