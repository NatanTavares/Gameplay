import React from "react";
import { View, Text } from "react-native";

import { MemberType } from "../../@types/global/member";

import { Avatar } from "../Avatar";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type MemberProps = MemberType;

export function Member({
  username,
  avatar_url,
  isOnline = false,
}: MemberProps) {
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />
      <View>
        <Text style={styles.title}>{username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
