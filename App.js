import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import ProfilScreen from './screens/Profil'
import GameScreen from './screens/Game'
import CameraScreen from './screens/Camera'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} />
         <Stack.Screen 
        name="Profil" 
        component={ProfilScreen} />
        <Stack.Screen 
        name="Game" 
        component={GameScreen} />
        <Stack.Screen 
        name="Camera" 
        component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack