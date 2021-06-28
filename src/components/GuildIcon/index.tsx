import React from "react";
import { Image, View } from "react-native";

const { CDN_IMAGE } = process.env;

import DiscordSvg from "../../assets/discord.svg";
import { styles } from "./styles";

type GuildIconProps = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: GuildIconProps) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {!!iconId ? (
        <Image style={styles.image} source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
