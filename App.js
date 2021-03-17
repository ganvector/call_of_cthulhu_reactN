import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container  from './src/container'

export default function App() {
  return (
    <View style={styles.container}>
      {/*<StatusBar style="auto" />*/}
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F00',
    backgroundColor: '#1A181D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#EDEDED'
  }
});
