import { StyleSheet, View } from "react-native";
import MainNavigator from "./Navigators/MainNavigator";

export default function App() {
  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 40,
  },
});
