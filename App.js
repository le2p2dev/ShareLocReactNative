import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MySplashScreen from './screens/MySplashScreen';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Chargement des fonts, appels API externes, etc...
        await Font.loadAsync({
          'Georama Black': require('./assets/fonts/Georama-Black.ttf')
        });
        // On fait une pause 2 sec pour simuler un chargement lent
        await new Promise(resolve => setTimeout(resolve, 2500));

      } catch (e) { console.warn(e); } finally {
        setAppIsReady(true);

      }
    } prepare();
  }, [appIsReady]);


  const Drawer = createDrawerNavigator();

  return appIsReady ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Signin" component={SigninScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <MySplashScreen />
  );
}
