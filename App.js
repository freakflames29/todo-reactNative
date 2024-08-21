import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
  Modal,
  ActionSheetIOS,
  Image,
} from "react-native";
import { useState } from "react";
import TempComp from "./TempComp";
// import styles from "./style";
import GoalItem from "./components/GoalItem";
import LinearGradient from "react-native-linear-gradient";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [courseDelete, setCourseDelete] = useState(false);

  function enteredTextHandler(theText) {
    setEnteredText(theText);
  }

  function buttonClickHandler() {
    console.log(enteredText);
    if (enteredText.length > 0) {
      console.log("Entered empty string");

      setGoals((prevGoals) => [...prevGoals, enteredText]);
      setEnteredText("");
      modalToggle();
    }
    else{

      Alert.alert("Please add something!");
    }
  }

  function DeleteHandler(index) {
    Alert.alert("Delete goal", "Do you want to delete the goal? ", [
      {
        text: "Cancel",
        onPress: () => {
          setCourseDelete(false);
        },
        style: "cancel",
      },
      {
        text: "Yeah man!!",
        onPress: () => {
          console.log(goals + " => DELETED");
          setGoals((prevGoals) => {
            return prevGoals.filter((goal, ind) => ind !== index);
          });
        },
      },
    ]);

    // if (courseDelete == true) {
    //   console.log(goals + " => DELETED");
    //   setGoals((prevGoals) => {
    //     return prevGoals.filter((goal, ind) => ind !== index);
    //   });
    // }
  }

  function modalToggle() {
    setModalVisible((prev) => !prev);
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button title="Add a new goal" onPress={modalToggle} />

        <Modal visible={modalVisible} animationType="slide">
          {/* <View style={styles.imageContainer}>
          <Image
            source={require("./assets/goal.jpeg")}
            style={styles.goalImg}
          />
        </View> */}

          <View style={styles.GoalView}>
            <TextInput
              placeholder="Enter Goal now"
              style={styles.TextBox}
              onChangeText={enteredTextHandler}
              value={enteredText}
            />

            <View style={styles.buttonViews}>
              <View style={styles.Button}>
                <Button title="Cancel" onPress={modalToggle} color="#f45550" />
              </View>
              <View style={styles.Button}>
                <Button
                  title="Add Goal"
                  onPress={buttonClickHandler}
                  color="#6cd395"
                />
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.listGoals}>
          {/* <ScrollView>
          {goals.map((goal, index) => (
            <View key={index} style={styles.listItems}>
              <Text style={styles.listText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}

          {/* a good way to list cause it is dynamic kind of lazyLoad  */}

          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item}
                  keyValue={itemData.index}
                  onDeleteTap={DeleteHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  GoalView: {
    flex: 5,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    // backgroundColor: "#fff7db",
    // marginBottom: 24,
  },
  buttonViews: {
    marginVertical: 20,
    flexDirection: "row",
  },
  Button: {
    marginHorizontal: 10,
    width: "30%",
  },
  TextBox: {
    borderWidth: 2,
    borderColor: "#ecc21c",
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    fontSize: 20,
    // color:'#fff'
  },
  listGoals: {
    flex: 7,
  },
  imageContainer: {
    flex: 1,
    width: 250,
    margin: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    borderWidth: 2,
  },
  goalImg: {
    width: 250,
    height: 250,
    objectFit: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
});
