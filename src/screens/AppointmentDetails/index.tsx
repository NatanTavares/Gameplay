import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { Fontisto } from "@expo/vector-icons";
import BannerImg from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  const { primary } = theme.colors;
  const members = [
    {
      id: "1",
      username: "NatanT",
      avatar_url: "https://github.com/NatanTavares.png",
      isOnline: true,
    },
    {
      id: "2",
      username: "Tanan",
      avatar_url: "https://github.com/NatanTavares.png",
      isOnline: false,
    },
    {
      id: "3",
      username: "Diego Fernandes",
      avatar_url: "https://github.com/NatanTavares.png",
      isOnline: false,
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={20} color={primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member {...item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
