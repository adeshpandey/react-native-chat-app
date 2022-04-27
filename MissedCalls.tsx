import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Divider, List } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

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

export default function MissedCalls({ navigation }) {
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={data}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item, idx }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChatDetail", { name: "Adesh Pandey" })
              }
            >
              <List.Item
                title={item.name}
                left={() => (
                  <Avatar.Icon
                    icon={() => (
                      <Ionicons name={item.icon} size={32} color="#FFF" />
                    )}
                  />
                )}
                right={() => <Text>{item.msg_time}</Text>}
                description={item.msg}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
