import React from "react";

import { useNavigation, CommonActions } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Container, Header, HeaderContent, TotalCars, Carlist } from "./styles";

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: "Audi",
    name: "R$ 5 coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://www.pngmart.com/files/10/White-Audi-PNG-Transparent-Image.png",
  };
  const carData2 = {
    brand: "Audi",
    name: "R$ 5 coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://www.pngmart.com/files/10/White-Audi-PNG-Transparent-Image.png",
  };

  function handleCarDetails() {
    navigation.dispatch(CommonActions.navigate({ name: "CarDetails" }));
  }

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
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Carlist
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
