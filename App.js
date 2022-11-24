import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyAppBar from "./components/appbar";
import CalcScreen from "./components/screen";
export default function App() {
  return (
    <View>
      <MyAppBar/>
    <View style={styles.container}>
      <View style={{ marginVertical: 6 }} />
      <CalcScreen />
      <View style={{ marginVertical: 6 }} />
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    borderColor: "yellow",
    borderWidth: 2,
    width:300,
    textAlign:"center"
  },
});
