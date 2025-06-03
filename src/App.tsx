import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/app_navigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
