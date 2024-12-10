import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Image
} from "react-native";
import { removeTodo } from '../store/actions';
import { Todo } from '../store/type';
import { useDispatch, useSelector } from 'react-redux';

export default function dashboard({ navigation }: { navigation: any }) {

    const todos = useSelector((state: { todos: Todo[] }) => state.todos);
    const dispatch = useDispatch();

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id));
    };

    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <>

            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ height: '30%', backgroundColor: '#9d6ae1' }}>
                        <View style={{ width: '100%', alignItems: 'center', padding: 20, flexDirection: 'row' }}>
                            <Image
                                style={styles.logo}
                                source={require('../assets/menu-button.png')}
                            />
                            <Text style={{ color: 'white', marginLeft: 20, fontWeight: 'bold', fontSize: 15 }}>{currentDate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', padding: 20, justifyContent: "space-between" }}>
                            <View style={{ width: '30%', flexDirection: 'column', }}>
                                <Text style={styles.heading}>Today</Text>
                                <Text style={[styles.addButtonText, { color: 'white', alignSelf: 'flex-start' }]}>{todos.length} Tasks</Text>
                            </View>

                            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddList')}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', height: '70%', top: -40, borderTopLeftRadius: 50, padding: 20 }}>
                        <Text style={[styles.heading, { color: 'black', fontSize: 20, marginBottom: 20 }]}>My Tasks</Text>
                     
                       {/* todolist */}
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <View style={styles.listContainer}>
                                    <View style={{}}>
                                        <Text style={[styles.heading, { color: 'white', fontSize: 18 }]}>{item.todo}</Text>
                                        <Text style={[styles.addButtonText, { color: 'white', alignSelf: 'flex-start' }]}>{item.description}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.deleteButton}
                                        onPress={() => handleRemoveTodo(item.id)}>
                                        <Image
                                            style={styles.logo}
                                            source={require('../assets/delete.png')}
                                        />
                                    </TouchableOpacity>

                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={
                                <Text style={styles.emptyText}>No TODOs. Add one!</Text>
                              }
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        height: '100%'


    },
    heading: {
        fontSize: 25,
        fontWeight: "bold", color: 'white',
    },
    logo: {
        width: 25,
        height: 25,
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
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        justifyContent: "center", width: 70
    },
    addButtonText: {
        color: "#a067ea",
        fontWeight: "bold", alignSelf: 'center'
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
        justifyContent: 'center', 
        width: 50,
         height: 50, 
         alignItems: 'flex-end', 
         alignContent: 'center'
    },
    emptyText: {
        textAlign: "center",
        color: "#aaa",
        marginTop: 20,
    },
    listContainer: { 
        borderRadius: 10, 
        marginTop: 10, 
        backgroundColor: '#a067ea', 
        width: '100%', 
        padding: 15, 
        height: 70, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row' }
});
