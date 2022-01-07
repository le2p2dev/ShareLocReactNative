import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Colocation from '../components/Colocation';

const test = {
  name: 'Titre de la colocation',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum malesuada purus eget bibendum. Vivamus sollicitudin sem vel dolor eleifend fringilla. Cras sit amet scelerisque urna. Cras non lectus diam. In diam quam, scelerisque in ex id, venenatis lacinia dolor. Sed dictum neque eget rhoncus cursus.',
  dateCreation: '6 janvier 2022',
}

export default function ColocationScreen() {
  return (
    <View style={styles.container}>
      <Colocation name={test.name} description={test.description} dateCreation={test.dateCreation} />
      <Colocation name={test.name} description={test.description} dateCreation={test.dateCreation} />
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
