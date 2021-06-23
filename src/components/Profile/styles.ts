import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    flexDirection: "row",
  },
  greeting: {
    marginRight: 6,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
  },
  userName: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});
