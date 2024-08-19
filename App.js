import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput, Alert,ScrollView } from "react-native";
import { useState } from "react";
import TempComp from "./TempComp";
// import styles from "./style";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  function enteredTextHandler(theText) {
    setEnteredText(theText);
  }

  function buttonClickHandler() {
    console.log(enteredText);
    setGoals((prevGoals) => [...prevGoals, enteredText]);
    // setEnteredText("");
    // Alert.alert("added");
  }

  return (
    <View style={styles.container}>
      <View style={styles.GoalView}>
        <TextInput
          placeholder="Enter Goal now"
          style={styles.TextBox}
          onChangeText={enteredTextHandler}
          // value={enteredText}
        />

        <Button title="Add Goal" onPress={buttonClickHandler} />
      </View>

      <View style={styles.listGoals}>
      <ScrollView>
          {goals.map((goal, index) => (
            <View key={index} style={styles.listItems}>
              <Text style={styles.listText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  GoalView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  TextBox: {
    borderWidth: 2,
    borderColor: "#ecc21c",
    width: "70%",
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    fontSize: 20,
  },
  listGoals: {
    flex: 7,
  },
  listItems: {
    margin: 5,
    padding: 10,
    backgroundColor: "#f3726b",
    borderRadius: 5,
  },
  listText: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});
