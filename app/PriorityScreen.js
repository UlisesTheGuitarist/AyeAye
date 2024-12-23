import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getList, saveList } from "../utils/storage";

export default function PriorityScreen() {
  const router = useRouter();
  const { itemId, listId } = useLocalSearchParams();
  const [urgency, setUrgency] = useState(1);
  const [importance, setImportance] = useState(1);
  const [consequences, setConsequences] = useState(1);
  const [impact, setImpact] = useState(1);
  const [reward, setReward] = useState(1);
  const [fear, setFear] = useState(1);
  const [delegation, setDelegation] = useState(1);

  const handleSave = async () => {
    const priority =
      urgency + importance + consequences + impact + reward + fear + delegation;
    const list = await getList(listId);
    if (!list) {
      console.error("List not found");
      return;
    }
    const updatedItems = list.items.map((item) =>
      item.id === itemId ? { ...item, priority } : item
    );
    const updatedList = { ...list, items: updatedItems };
    await saveList(updatedList);
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Set Task Priority</Text>

      <Text style={styles.question}>
        Urgency: Does this task need to be completed immediately?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={urgency}
        onValueChange={setUrgency}
      />
      <Text style={styles.value}>{urgency}</Text>
      <View style={styles.divider} />

      <Text style={styles.question}>
        Importance: Does this task align with your long-term goals or values?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={importance}
        onValueChange={setImportance}
      />
      <Text style={styles.value}>{importance}</Text>
      <View style={styles.divider} />

      <Text style={styles.question}>
        Consequences of Delay: What happens if you don’t do this now?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={consequences}
        onValueChange={setConsequences}
      />
      <Text style={styles.value}>{consequences}</Text>
      <View style={styles.divider} />

      <Text style={styles.question}>
        Task Impact: Will this task simplify or eliminate other tasks?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={impact}
        onValueChange={setImpact}
      />
      <Text style={styles.value}>{impact}</Text>
      <View style={styles.divider} />

      <Text style={styles.question}>
        Effort-to-Reward Ratio: Is the reward worth the effort?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={reward}
        onValueChange={setReward}
      />
      <Text style={styles.value}>{reward}</Text>
      <View style={styles.divider} />

      <Text style={styles.question}>
        Fear Setting: Are you avoiding this task, and would doing it drive major
        progress?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={fear}
        onValueChange={setFear}
      />
      <Text style={styles.value}>{fear}</Text>
      <View style={styles.divider} />

      <Text style={styles.question}>
        Automation/Delegation: Can this task be automated or handed off?
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={delegation}
        onValueChange={setDelegation}
      />
      <Text style={styles.value}>{delegation}</Text>
      <View style={styles.divider} />

      <Button title="Save Priority" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  question: {
    fontSize: 16,
    marginBottom: 10
  },
  slider: {
    width: "100%",
    height: 40
  },
  value: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20
  }
});
