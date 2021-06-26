import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
});
