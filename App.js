import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ColocationScreen from './screens/ColocationScreen';
import HomeScreen from './screens/HomeScreen';
import MySplashScreen from './screens/MySplashScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingsScreen from './screens/SettingsScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import AddServices from "./screens/AddServices";

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
        <Drawer.Screen name="Signin" component={SigninScreen} options={{title: 'Connexion'}} />
        <Drawer.Screen name="Signup" component={SignupScreen} options={{title: 'Inscription'}} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Accueil'}} />
        <Drawer.Screen name="AddServices" component={AddServices} options={{title: 'Proposition service'}} />
        <Drawer.Screen name="Colocation" component={ColocationScreen} options={{title: 'Mes colocations'}} />
        <Drawer.Screen name="Notification" component={NotificationScreen} options={{title: 'Notifications'}} />
        <Drawer.Screen name="Setting" component={SettingsScreen} options={{title: 'Paramètres'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <MySplashScreen />
  );
}
