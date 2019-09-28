import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Syed';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
