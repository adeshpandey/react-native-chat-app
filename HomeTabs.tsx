import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./Chats";
import Calls from "./Calls";
import CameraView from "./CameraView";
import Contacts from "./Contacts";
import Settings from "./Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { withTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();

function HomeTabs(props) {
  const { colors } = props.theme;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Calls") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name == "Chats") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          } else if (route.name == "Camera") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name == "Contacts") {
            iconName = focused ? "happy" : "happy-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      })}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={({ route }) => ({
          headerShown: true,
          headerStyle: { backgroundColor: colors.headerBackgroundColor },
          headerTitleStyle: { color: "#FFF" },
          headerTitleAlign: "left",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Ionicons name="ios-search" color={colors.primary} size={18} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-vertical"
                  color={colors.primary}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={({ route }) => ({
          headerShown: true,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colors.headerBackgroundColor,
            elevation: 0,
          },
          headerTitleStyle: { color: "#FFF" },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Ionicons name="ios-search" color={colors.primary} size={18} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-vertical"
                  color={colors.primary}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Tab.Screen
        
        name="Camera"
        component={CameraView}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default withTheme(HomeTabs);
