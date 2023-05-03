import React, { useEffect, useState } from "react";

import { useNavigation, CommonActions } from "@react-navigation/native";
import { StatusBar, StyleSheet, Button, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import {
  RectButton,
  PanGestureHandler,
  RectButtonProps,
} from "react-native-gesture-handler";

import {
  Animated,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";




import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  Carlist,
  MyCarsButton,
} from "./styles";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Load } from "../../components/Load/index";
import { useTheme } from "styled-components";

export function Home() {
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translateX;
      positionY.value = ctx.positionY + event.translateY;
    },
    onEnd() {},
  });

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpensMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content" //tarja das notificações no header
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de carros: {cars.length}</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <Carlist
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            { position: "absolute", bottom: 13, right: 22 },
          ]}
        >
          <View
            onPress={handleOpensMyCars}
            style={(styles.button, { backgroundColor: theme.colors.main })}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
