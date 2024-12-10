import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';
export default function NavigationScreen({ navigation }: { navigation: any }) {
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim() && description.trim()) {
      dispatch(addTodo(todo, description));
      navigation.goBack(); // Navigate back to the TodoList screen
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={todo}
        onChangeText={(value) => setTodo(value)}
      />
      <TextInput
        style={[styles.input, { marginTop: 30, height: 100, }]}
        placeholder="Task Description"
        value={description}
        onChangeText={(value) => setDescription(value)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white', padding: 20
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#a067ea',
    padding: 10,
    borderRadius: 10,
    justifyContent: "center", width: '100%', marginTop: 30, height: 50
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold", alignSelf: 'center', fontSize: 18
  },
});
