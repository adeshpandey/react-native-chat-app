import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Avatar, Divider, List } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";


const firestore = getFirestore();
const auth = getAuth();

export default function Chats({navigation}) {
  const [users, setUsers] = useState();
  
  useEffect(() => {
    getDocs(collection(firestore, "users"))
      .then((snapshots) => {
        let newUsers = [];
        snapshots.forEach((doc) => {
          const data = doc.data();
          newUsers.push({
            _id: doc.id,
            ...data,
          });
        });
        setUsers(newUsers);
      })
      .catch((err) => console.log(err));
  }, [setUsers]);

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={users}
        keyExtractor={ (item,idx) => idx }
        renderItem={({ item, idx }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChatDetail", {
                  id: item._id,
                  name: item.displayName,
                })
              }
            >
              <List.Item
                title={item.displayName}
                left={() => (
                  <Avatar.Icon
                    icon={() => (
                      <Ionicons name="person-outline" size={32} color="#FFF" />
                    )}
                  />
                )}
                // right={() => <Text>{item.msg_time}</Text>}
                // description={item.msg}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
