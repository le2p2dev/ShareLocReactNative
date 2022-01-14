import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useAuthentification } from '../utilities/authentification';

export default function HomeScreen() {
  const { login } = useAuthentification();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShareLoc Home</Text>

      <Text>Bonjour {login}</Text>
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
  title: {
    marginBottom: 30,
    color: '#404040',
    fontSize: 25,
    fontFamily: 'Georama Black',
  },
});
