import React from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import { useTheme } from "styled-components";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.dispatch(CommonActions.navigate({ name: "SchedulingComplete" }));
  }

  return (
    <Container>
      <StatusBar />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.pngmart.com/files/10/White-Audi-PNG-Transparent-Image.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Langorguini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$900</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasoline" icon={gasolineSvg} />
          <Accessory namea="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              sizee={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirm}
        />
      </Footer>
    </Container>
  );
}
