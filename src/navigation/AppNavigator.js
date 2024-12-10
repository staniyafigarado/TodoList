
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import dashboard from '../screens/dashboard'; 
import AddList from '../screens/AddList'; 

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen
          name="dashboard"
          component={dashboard}
          options={{ title: 'Todo' }}
        />
        <Stack.Screen
          name="AddList"
          component={AddList}
          options={{ title: 'Add Todo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
