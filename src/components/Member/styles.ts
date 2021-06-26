import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletStatus: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  nameStatus: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});
