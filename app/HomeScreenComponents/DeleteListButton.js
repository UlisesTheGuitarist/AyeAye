import React from "react";
import { Button, Alert } from "react-native";

const DeleteListButton = ({ onDelete, title }) => {
  const handlePress = () => {
    console.log(`Delete button pressed for ${title}`);
    Alert.alert(
      "Delete Confirmation",
      `Are you sure you want to delete "${title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: onDelete
        }
      ]
    );
  };

  return <Button title="Delete" onPress={handlePress} color="#ff0000" />;
};

export default DeleteListButton;
