import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { withTheme } from "react-native-paper";
import AllCalls from "./AllCalls";
import MissedCalls from "./MissedCalls";

const data = [
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
  {
    icon: "person-outline",
    name: "Adesh Pandey",
    msg_time: "22/04/2022 01:00 PM",
    msg: "Hi there",
  },
];

const TopTabs = createMaterialTopTabNavigator();
function Calls({theme, navigation }) {
  const {colors} = theme;
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontWeight: "bold", color: colors.titleColor },
        tabBarStyle: { backgroundColor: colors.headerBackgroundColor },
      }}
    >
      <TopTabs.Screen name="All" component={AllCalls} />
      <TopTabs.Screen name="Missed" component={MissedCalls} />
    </TopTabs.Navigator>
  );
}

export default withTheme(Calls);