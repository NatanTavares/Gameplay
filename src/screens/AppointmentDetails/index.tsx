import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import {
  Alert,
  FlatList,
  ImageBackground,
  Platform,
  Share,
  Text,
  View,
} from "react-native";

import { api } from "../../services/api";
import { MemberType } from "../../@types/global/member";
import { AppointmentType } from "../../@types/global/appointment";

import { Load } from "../../components/Load";
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

type Params = {
  guildSelected: AppointmentType;
};

type GuildWidgetType = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberType[];
};

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const [widget, setWidget] = useState({} as GuildWidgetType);
  const [loading, setLoading] = useState(true);

  async function fetchGuildWidget() {
    try {
      const { data } = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(data);
    } catch (error) {
      Alert.alert(
        "Verifique as configurações do servidor. Será qie o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({ message, url: widget.instant_invite });
  }

  function handleOpenGuildOnDiscord() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={20} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member {...item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      )}
      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon
            title="Entrar na partida"
            onPress={handleOpenGuildOnDiscord}
          />
        </View>
      )}
    </Background>
  );
}
