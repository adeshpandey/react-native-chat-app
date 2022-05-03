import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Colors, Divider, List, withTheme } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
        tabBarLabelStyle: { fontWeight: "bold", color: "#FFF" },
        tabBarStyle: { backgroundColor: colors.headerBackgroundColor },
      }}
    >
      <TopTabs.Screen name="All" component={AllCalls} />
      <TopTabs.Screen name="Missed" component={MissedCalls} />
    </TopTabs.Navigator>
  );
}

export default withTheme(Calls);