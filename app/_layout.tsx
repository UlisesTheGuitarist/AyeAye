import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";
import { DefaultTheme, DarkTheme, ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="ListScreen"
          options={({ navigation }) => ({
            title: "List Details",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ marginLeft: 10, color: "#007AFF" }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}