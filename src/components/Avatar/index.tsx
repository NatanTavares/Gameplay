import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import DiscordSvg from "../../assets/discord.svg";
import { styles } from "./styles";

type AvatarProps = {
  urlImage: string | null;
};

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      {!!urlImage ? (
        <Image source={{ uri: urlImage }} style={styles.avatar} />
      ) : (
        <DiscordSvg width={46} height={46} />
      )}
    </LinearGradient>
  );
}
