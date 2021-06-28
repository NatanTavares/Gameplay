import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
    color: theme.colors.heading,
  },
  subtitle: {
    marginBottom: 64,
    textAlign: "center",
    fontSize: 15,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
    color: theme.colors.heading,
  },
});
