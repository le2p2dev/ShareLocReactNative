import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import MySplashScreen from "./src/MySplashScreen";

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

  return appIsReady ? (
      <View style={styles.container}>
        <Text style={styles.title}>ShareLoc Menu</Text>
        <StatusBar style="auto" />
      </View>
  ) : (
      <MySplashScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaf0d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#404040',
    fontSize: 25,
    fontFamily: 'Georama Black',
  },
});
