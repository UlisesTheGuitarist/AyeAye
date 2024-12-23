import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const PriorityButton = ({ itemId, listId }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/PriorityScreen",
      params: { itemId, listId }
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Icon name="star" size={20} color="#FFD700" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center", // Ensure the icon is centered
    marginHorizontal: 5 // Add horizontal margin to match other buttons
  }
});

export default PriorityButton;
