import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../components/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { CarDetails } from "../screens/CarDetails";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash/index";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerMode: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />

      <Screen name="Home" component={Home} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
