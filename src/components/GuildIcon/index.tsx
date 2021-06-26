import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

type GuildIconProps = {};

export function GuildIcon({}: GuildIconProps) {
  const uri = "https://github.com/NatanTavares.png";
  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
