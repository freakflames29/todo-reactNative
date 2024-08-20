import { StyleSheet,View,Text,Pressable} from "react-native";
const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteTap.bind(this,props.keyValue)}>
        <View key= {props.keyValue} style={styles.listItems} >
        <Text style={styles.listText}>{props.text}</Text>
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({

  listItems: {
    margin: 5,
    padding: 10,
    backgroundColor: "#f3726b",
    borderRadius: 5,
    marginTop:15
  },
  listText: {
    fontSize: 20,
    textTransform: "capitalize",
  },
})
export default GoalItem;
