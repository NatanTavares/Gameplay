import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { GuildType } from "../../@types/global/guild";

import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

type GuildProps = TouchableOpacityProps & {
  guild: GuildType;
};

export function Guild({ guild, ...rest }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon guildId={guild.id} iconId={guild.icon} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{guild.name}</Text>

          <Text style={styles.subtitle}>
            {guild.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
}
