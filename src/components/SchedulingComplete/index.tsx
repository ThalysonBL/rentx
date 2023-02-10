import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButtom } from "../ConfirmButtom/index";
import { useNavigation, CommonActions } from "@react-navigation/native";

export function SchedulingComplete() {
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.dispatch(CommonActions.navigate({ name: "Home" }));
  }

  const { width } = useWindowDimensions();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado</Title>

        <Message>
          Agpra você só precisa ir {"\n"}
          até a concessionária da Rentx{"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButtom title="OK" onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}
