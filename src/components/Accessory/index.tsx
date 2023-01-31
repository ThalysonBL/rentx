import React from "react";
import { SvgProps } from "react-native-svg";
import { Container, Name } from "./styles";

interface Props {
  name: string;
  icon: react.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: Props) {
  return (
    <Container>
      <Icon width={30} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}
