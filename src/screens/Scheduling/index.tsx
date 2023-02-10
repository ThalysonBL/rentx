import React from "react";

import { useNavigation, CommonActions } from "@react-navigation/native";

import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { Calendars } from "../../components/Calendars/index";

export function Scheduling() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.dispatch(CommonActions.navigate({ name: "SchedulingDetails" }));
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundCoor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do alugel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue />
          </DateInfo>
          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendars />
      </Content>
      <Footer>
        <Button title="confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
