import React from "react";

import { useTheme } from "styled-components";
import { StatusBar } from 'react-native'
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import { Container, Header, Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,



} from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { Calendars } from '../../components/Calendars';

export function Scheduling() {
  const theme = useTheme();

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
        <Button title="confirmar"/>
      </Footer>
    </Container>
  );
}