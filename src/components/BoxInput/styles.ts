import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    marginRight: 4,
    borderRadius: 8,
    fontSize: 13,
    textAlign: "center",
    fontFamily: theme.fonts.text400,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
  },
});
