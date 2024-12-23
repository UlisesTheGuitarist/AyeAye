import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveList = async (list) => {
  try {
    const jsonValue = JSON.stringify(list);
    await AsyncStorage.setItem(`@list_${list.id}`, jsonValue);
  } catch (e) {
    console.error("Failed to save the list to storage", e);
  }
};

export const getList = async (id) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@list_${id}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Failed to fetch the list from storage", e);
  }
};

export const deleteList = async (id) => {
  try {
    await AsyncStorage.removeItem(`@list_${id}`);
  } catch (e) {
    console.error("Failed to delete the list from storage", e);
  }
};

export const getAllLists = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const listKeys = keys.filter((key) => key.startsWith("@list_"));
    const lists = await AsyncStorage.multiGet(listKeys);
    return lists.map(([key, value]) => JSON.parse(value));
  } catch (e) {
    console.error("Failed to fetch all lists from storage", e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error("Failed to clear the storage", e);
  }
};
