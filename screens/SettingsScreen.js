import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
      <StatusBar style="auto" />
    </View>
  );
}
