import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState(""); 
  const [todos, setTodos] = useState([]); 

  // Add a new TODO
  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now().toString(), text: todo }]);
      setTodo(""); // Clear the input
      console.log("todolist:",todos)
    }
  };

  // Remove a TODO
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Todo List</Text>


        {/* Input Field and Add Button */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new TODO"
            value={todo}
            onChangeText={(text) => setTodo(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTodo}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* List of TODOs */}
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.text}</Text>
              <TouchableOpacity onPress={() => removeTodo(item.id)}>
                <Text style={styles.deleteButton}>❌</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No TODOs. Add one!</Text>
          }
        />
        
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    paddingTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  todoText: {
    fontSize: 16,
  },
  deleteButton: {
    fontSize: 16,
    color: "red",
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 20,
  },
});
