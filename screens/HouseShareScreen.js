import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HouseShare from '../components/HouseShare';

const test = {
  name: 'Titre de la colocation',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum malesuada purus eget bibendum. Vivamus sollicitudin sem vel dolor eleifend fringilla. Cras sit amet scelerisque urna. Cras non lectus diam. In diam quam, scelerisque in ex id, venenatis lacinia dolor. Sed dictum neque eget rhoncus cursus.',
  numberPersons: '5',
}

export default function HouseShareScreen() {
  return (
    <View style={styles.container}>
      <HouseShare name={test.name} description={test.description} numberPersons={test.numberPersons} />
      <HouseShare name={test.name} description={test.description} numberPersons={test.numberPersons} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaf0d1',
    alignItems: 'center',
    padding: 24,
  },
});
