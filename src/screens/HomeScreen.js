import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hola kala</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          props.navigation.navigate('Components');
        }}
      />
      <Button
        title="Got to List Demo"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
