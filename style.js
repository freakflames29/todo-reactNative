import { StyleSheet } from "react-native";
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
      fontSize:20
    },
    listGoals: {
      flex: 7,
    },
    listItems:{
      margin:5,
      padding:10,
      backgroundColor: '#f3726b',
      borderRadius: 5,
    },
    listText:{
      fontSize:20,
      textTransform: "capitalize"
    }
  });

  export default styles;