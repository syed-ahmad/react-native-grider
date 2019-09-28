import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 23 },
    { name: 'Friend #2', age: 24 },
    { name: 'Friend #3', age: 25 },
    { name: 'Friend #4', age: 26 },
    { name: 'Friend #5', age: 27 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 82 },
    { name: 'Friend #8', age: 42 },
    { name: 'Friend #9', age: 26 }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
