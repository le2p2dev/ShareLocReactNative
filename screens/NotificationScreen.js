import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function NotificationScreen() {
  return (
    <View>
      <Text>Notification</Text>
      <StatusBar style="auto" />
    </View>
  );
}
