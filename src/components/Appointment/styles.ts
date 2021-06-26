import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
  },
  guildContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 68,
    width: 68,
    marginRight: 20,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  category: {
    marginRight: 24,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    marginLeft: 7,
    fontSize: 13,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  player: {
    marginRight: 24,
    marginLeft: 7,
    fontSize: 13,
    fontFamily: theme.fonts.text500,
  },
});
