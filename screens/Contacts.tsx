import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Avatar, Colors, Divider, List, withTheme } from 'react-native-paper';
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
const groupBy = (x, f) => x.reduce((a, b) => ((a[f(b)] ||= []).push(b), a), {});

function Contacts({theme}) {
  const {colors} = theme;
  const r = groupBy(contacts, v => v.name[0]);
  return (
    <View>
      {
        Object.keys(r).map(v => {
          return (
            <List.Section>
              <View style={{ backgroundColor: "#C6C6C6", marginHorizontal: 5,padding:10,borderRadius:2 }}>
                <Text>{v}</Text>
              </View>
              <FlatList data={r[v]} renderItem={
                (item, index) => (<List.Item
                  title={item.name}
                  left={() => (
                    <Avatar.Icon
                      size={48}
                      icon={() => (
                        <Ionicons
                          name="person-outline"
                          size={16}
                          color="#FFF"
                        />
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
                />)
              }
              keyExtractor={ (item) => item.name }
              ItemSeparatorComponent={ () => <Divider /> }
              />
            </List.Section>
          );
        } )
      }
    </View>
  )
}
export default withTheme(Contacts);