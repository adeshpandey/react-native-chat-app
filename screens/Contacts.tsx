import React from 'react';
import { FlatList, View } from 'react-native';
import { Avatar, Divider, List, withTheme } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";

const contacts = [
  {
    name: "Adesh P",
    number: "910000000000",
  },
  {
    name: "Archana P",
    number: "910000000000",
  },
  {
    name: "Bhaumik P",
    number: "910000000000",
  },
  {
    name: "Pawan A",
    number: "910000000000",
  },
  {
    name: "Vinay P",
    number: "910000000000",
  },
  {
    name: "Rajeev B",
    number: "910000000000",
  }
];
// const groupBy = (x, f) => x.reduce((a, b) => ((a[f(b)] ||= []).push(b), a), {});

function Contacts({theme}) {
  const {colors} = theme;
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={(item, index) => (
          <List.Item
            title={item.name}
            left={() => (
              <Avatar.Icon
                size={48}
                icon={() => (
                  <Ionicons name="person-outline" size={16} color="#FFF" />
                )}
              />
            )}
            right={() => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignContent: "space-between",
                }}
              >
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color={colors.primary}
                  style={{ marginRight: 15 }}
                />
                <Ionicons
                  name="call-outline"
                  size={24}
                  color={colors.primary}
                />
              </View>
            )}
            description={item.number}
          />
        )}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}
export default withTheme(Contacts);