import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
