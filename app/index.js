import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  // Lists Array
  const [data, setData] = useState([
    {
      id: "1",
      title: "Groceries",
      items: [
        { id: "1", name: "Milk" },
        { id: "2", name: "Bread" }
      ]
    },
    {
      id: "2",
      title: "Work Tasks",
      items: [
        { id: "1", name: "Email client" },
        { id: "2", name: "Prepare report" }
      ]
    }
  ]);

  const handleViewList = (list) => {
    router.push({
      pathname: "ListScreen",
      params: { list: JSON.stringify(list) }
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.title}</Text>
      <TouchableOpacity
        style={[styles.button, styles.viewButton]}
        onPress={() => handleViewList(item)}
      >
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aye Aye</Text>
      <View style={styles.separator} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  listText: {
    fontSize: 18
  },
  button: {
    padding: 10,
    borderRadius: 5
  },
  viewButton: {
    backgroundColor: "#007AFF"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default Index;
