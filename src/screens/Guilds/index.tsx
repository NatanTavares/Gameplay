import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { GuildType } from "../../@types/global/guild";

import { ListDivider } from "../../components/ListDivider";
import { Guild } from "../../components/Guild";
import { Load } from "../../components/Load";

import { styles } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

type GuildProps = {
  handleGuildSelect: (guild: GuildType) => void;
};

export function Guilds({ handleGuildSelect }: GuildProps) {
  const [guilds, setGuilds] = useState<GuildType[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const { data } = await api.get("/users/@me/guilds");
    setGuilds(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          style={styles.guilds}
          contentContainerStyle={{ paddingBottom: 70, paddingTop: 100 }}
          data={guilds}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <ListDivider isCentered />}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          renderItem={({ item }) => (
            <Guild guild={item} onPress={() => handleGuildSelect(item)} />
          )}
        />
      )}
    </View>
  );
}
