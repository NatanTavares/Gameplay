import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GuildType } from "../../@types/global/guild";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

import { Guilds } from "../Guilds";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { BoxInput } from "../../components/BoxInput";
import { GuildIcon } from "../../components/GuildIcon";
import { ModalView } from "../../components/ModalView";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {
  const navigation = useNavigation();

  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState({} as GuildType);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelected: GuildType) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleSelectCategory(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleAppointmentSave() {
    const newAppointment = {
      id: uuid.v4,
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              {
                marginLeft: 24,
                marginTop: 28,
                marginBottom: 14,
              },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            categorySelected={category}
            onSelectCategory={handleSelectCategory}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuildsModal}>
              <View style={styles.select}>
                {!!guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.imageWrapper} />
                )}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {!!guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <BoxInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <BoxInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <BoxInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <BoxInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.span}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleAppointmentSave} />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView
        visible={openGuildsModal}
        onCloseModal={handleCloseGuildsModal}
      >
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
