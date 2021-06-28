import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 66,
    height: 66,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: theme.colors.discord,
  },
  image: {
    width: 66,
    height: 66,
  },
});
