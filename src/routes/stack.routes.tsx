import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../components/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { CarDetails } from "../screens/CarDetails/index";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerMode: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CarDetails" component={CarDetails} />
    </Navigator>
  );
}
