import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  let counter = 0;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter++;
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          counter--;
          console.log(counter);
        }}
      />
      <Text>{`Counter Count : ${counter}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
