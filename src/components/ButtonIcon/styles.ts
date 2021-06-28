import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },
});
