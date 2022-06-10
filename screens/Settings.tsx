import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import {
  Avatar, Button, Divider,
  IconButton,
  List,
  Text,
  withTheme
} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const auth = getAuth();

const data = [
  {
    icon: "phone-portrait-outline",
    name: "Account",
    msg: "My number, delete account",
  },
  {
    icon: "shield-checkmark-outline",
    name: "Privacy",
    msg: "Blocked Contacts, app lock, hide chat",
    color: "#096dd9",
  },
  {
    icon: "chatbubble-ellipses-outline",
    name: "Chat",
    msg: "Language, theme, chat background",
    color: "#69c0ff",
  },
  {
    icon: "help-outline",
    name: "Help",
    msg: "Privacy policy, terms and conditions",
    color: "orange",
  },
  {
    icon: "notifications-outline",
    name: "Notifications",
    msg: "Messages, calls and group alerts",
    color: "green",
  },
  {
    icon: "heart-outline",
    name: "Invite Friend",
    msg: null,
    color: "tomato",
  },
];

function Settings(props) {
  const navigation = useNavigation();
  const { colors } = props.theme;

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <List.Item
        title={() => (
          <Text style={{ marginBottom: 10, fontSize: 24 }}>Adesh Pandey</Text>
        )}
        left={() => (
          <Avatar.Icon
            icon={() => (
              <Ionicons name="person-outline" size={32} color="#FFF" />
            )}
          />
        )}
        right={(props) => (
          <IconButton
            {...props}
            icon="qrcode"
            color="#36cfc9"
            onPress={() => {}}
          />
        )}
        description="+971-5257-87316"
      />
      <Divider />
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={data}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item, idx }) => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <List.Item
                title={item.name}
                left={() => (
                  <Avatar.Icon
                    size={32}
                    style={{ backgroundColor: "#FFF" }}
                    icon={() => (
                      <Ionicons
                        name={item.icon}
                        color={item.color ?? colors.primary}
                        size={24}
                      />
                    )}
                  />
                )}
                description={item.msg}
              />
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <>
            <Divider />
            <View style={{ padding: 10 }}>
              <Button onPress={logout}>SIGNOUT</Button>
            </View>
            <Divider />
            <View style={{ alignItems: "center", paddingVertical: 10 }}>
              <Text>Version 0.0.1</Text>
            </View>
          </>
        }
      />
    </View>
  );
}

export default withTheme(Settings);
