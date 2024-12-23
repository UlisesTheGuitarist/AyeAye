import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { saveList, getList } from "../utils/storage";
import SaveListButton from "../components/SaveListButton";
import ListItem from "../components/ListItem";
import { styles } from "../styles/ListScreenStyles";

export default function ListScreen() {
  const { list } = useLocalSearchParams();
  const parsedList = JSON.parse(list || "{}");

  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    const loadList = async () => {
      const storedList = await getList(parsedList.id);
      if (storedList) {
        setItems(storedList.items);
      } else {
        setItems(parsedList.items);
      }
    };
    loadList();
  }, [parsedList.id]);

  const handleAddItem = async () => {
    if (newItemName.trim() === "") return;

    const newItem = {
      id: (items.length + 1).toString(),
      name: newItemName,
      priority: 0 // Default priority
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setNewItemName("");

    const updatedList = { ...parsedList, items: updatedItems };
    await saveList(updatedList);
  };

  const handleEditItem = async (id, newName) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updatedItems);

    const updatedList = { ...parsedList, items: updatedItems };
    await saveList(updatedList);
  };

  const handleDeleteItem = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const updatedList = { ...parsedList, items: updatedItems };
    await saveList(updatedList);
  };

  const handleArchiveItem = async (id) => {
    // Implement archive functionality
  };

  const handleFinishItem = async (id) => {
    // Implement finish functionality
  };

  const handleSetPriority = async (id, priority) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, priority } : item
    );
    updatedItems.sort((a, b) => b.priority - a.priority); // Sort by priority
    setItems(updatedItems);

    const updatedList = { ...parsedList, items: updatedItems };
    await saveList(updatedList);
  };

  const saveChanges = async () => {
    const updatedList = { ...parsedList, items };
    await saveList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parsedList.title}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            listId={parsedList.id}
            onEdit={handleEditItem}
            onSetPriority={handleSetPriority}
            onDelete={handleDeleteItem}
            onArchive={handleArchiveItem}
            onFinish={handleFinishItem}
          />
        )}
      />
      <View style={styles.addItemContainer}>
        <TextInput
          style={styles.input}
          placeholder="New item name"
          value={newItemName}
          onChangeText={setNewItemName}
        />
        <Button title="Add Item" onPress={handleAddItem} />
      </View>
      <SaveListButton onPress={saveChanges} />
    </View>
  );
}
