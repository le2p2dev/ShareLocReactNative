import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import * as Progress from 'react-native-progress';

export default function MySplashScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShareLoc</Text>
      <Image
        style={styles.Logo}
        source={require('../assets/splashscreen.png')}
      />
      <StatusBar style="auto" />

      <Progress.Circle size={50} indeterminate={true} />
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
    color: '#404040',
    fontSize: 30,
    fontWeight: "bold",
  },
  Logo: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  }
});