import React from "react";

import { Container, Title } from "./styles";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color, onPress, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      onPress={onPress}
    >
      <Title>{title}</Title>
    </Container>
  );
}
