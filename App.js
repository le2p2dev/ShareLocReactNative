import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // affichage

        // Chargement des fonts, appels API externes, etc...
        await Font.loadAsync({
          'Georama Black': require('./assets/fonts/Georama-Black.ttf')
        });
        // On fait une pause 2 sec pour simuler un chargement lent
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) { console.warn(e); } finally {
        await SplashScreen.hideAsync(); // masquage
        setAppIsReady(true);

      }
    } prepare();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
      <View style={styles.container}>
        <Text style={{fontFamily: 'Georama Black', color: '#404040'}}>ShareLoc</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaf0d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
