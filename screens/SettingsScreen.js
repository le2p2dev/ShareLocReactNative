import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useAuthentification } from '../utilities/authentification';

export default function SettingsScreen() {
  const { signOut } = useAuthentification();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <TouchableOpacity style={styles.btn} onPress={() => signOut()}>
        <Text style={styles.bntText}>Se déconnecter</Text>
      </TouchableOpacity>
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
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#746AF9",
  },
  bntText: {
    color: "#FFF",
  },
});
