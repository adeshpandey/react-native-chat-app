import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import React, { useState } from "react";
import { View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Divider,
  List,
  TextInput
} from "react-native-paper";


const functions = getFunctions();
const auth = getAuth();

export default function Profile() {
  const [displayName, setDisplayName] = useState(auth.currentUser?.displayName);

  const updateDisplayName = () => {
    const updateProfile = httpsCallable(functions, "updateProfile");
    updateProfile({displayName}).then(res => console.log(res)).catch(err => console.log(err))
  };

  return (
    <Card style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Avatar.Image size={120} source={auth.currentUser?.photoURL} />
      </View>
      <Divider />
      <List.Item
        title={() => (
          <TextInput value={displayName} onChangeText={setDisplayName} />
        )}
      />
      <Button onPress={updateDisplayName}>Update</Button>
    </Card>
  );
}
