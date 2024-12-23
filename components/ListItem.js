import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PriorityButton from "./PriorityButton";

const ListItem = ({
  item,
  listId,
  onEdit,
  onSetPriority,
  onDelete,
  onArchive,
  onFinish
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={styles.priorityContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.priorityText}>{item.priority}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onEdit(item.id, "New Name")}>
          <Icon name="edit" size={20} color="#000" />
        </TouchableOpacity>
        <PriorityButton itemId={item.id} listId={listId} />
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Icon name="trash" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onArchive(item.id)}>
          <Icon name="archive" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFinish(item.id)}>
          <Icon name="check" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  itemText: {
    fontSize: 18,
    marginRight: 10
  },
  priorityContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  priorityText: {
    fontSize: 16,
    marginLeft: 5
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }
});

export default ListItem;
