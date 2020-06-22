import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen } from "./Navigator/AuthStack";
import { HomeStackScreen } from "./Navigator/HomeStack";


const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackScreen /> */}
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default App;
