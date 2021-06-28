import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppointmentType } from "../../@types/global/appointment";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./styles";
import { useCallback } from "react";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const navigation = useNavigation();

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleAppointmentDetails(guildSelected: AppointmentType) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  async function loadAppointmentsStorageDatabase() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storedAppointments: AppointmentType[] = response
      ? JSON.parse(response)
      : [];

    if (category) {
      setAppointments(
        storedAppointments.filter((item) => item.category === category)
      );
    } else {
      setAppointments(storedAppointments);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      loadAppointmentsStorageDatabase();
    }, [category])
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        onSelectCategory={handleSelectCategory}
      />

      <ListHeader
        title="Partidas agendadas"
        subtitle={`Total ${appointments.length}`}
      />

      {loading ? (
        <Load />
      ) : (
        <FlatList
          style={styles.matches}
          contentContainerStyle={{ paddingBottom: 70 }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          data={appointments}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => handleAppointmentDetails(item)}
            />
          )}
        />
      )}
    </Background>
  );
}
