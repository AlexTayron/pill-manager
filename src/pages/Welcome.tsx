import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import managerImg from "../assets/manager.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification" as never);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} seus medicamentos {"\n"}de forma fácil
        </Text>

        <Image source={managerImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não perca os horários de seus medicamentos
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Text style={styles.buttonIcon}>
            <Feather name="chevron-right" style={styles.buttonIcon} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.paragraph,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },

  button: {
    backgroundColor: colors.button,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});
