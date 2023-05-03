import React, { useEffect } from "react";

import { Button, StyleSheet, Dimensions } from "react-native";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

import { Container } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0]),
        },
      ],
    };
  });
  /*//const animation = useSharedValue(0); //posição da animação
  //const animatedStyles = useAnimatedStyle(() => {
    //objeto de estilo
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(0,1.18,.92,-0.16)
          }),
        },
      ],
    };
  });

  function handleAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }*/

  function startApp() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, 
      () => {
        'worklet' //deve ser usado o worklet e runOnJS para ser processado na mesma thread
        runOnJS(startApp)();
        ;
      });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={([logoStyle], { position: "absolute" })}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
