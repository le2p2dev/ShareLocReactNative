import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification</Text>
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
    color: '#404040',
    fontSize: 25,
    fontFamily: 'Georama Black',
  },
});
