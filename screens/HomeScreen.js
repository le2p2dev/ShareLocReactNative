import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {

  return (
      <View style={styles.container}>

        <View>
          <Text style={styles.title}>ShareLoc Home</Text>
          <StatusBar style="auto" />
        </View>

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
    fontSize: 25,
    fontFamily: 'Georama Black',
  },
});
