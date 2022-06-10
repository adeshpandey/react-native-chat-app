import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, getAuth, updateCurrentUser } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

const auth = getAuth();

const loginImg = require("../../assets/images/christine-sandu-yvJGMcuke7g-unsplash.jpg");
export default function Signup() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, userName, password);
      await updateCurrentUser(auth,{...auth.currentUser, displayName: userName.substring(0,userName.indexOf("@"))})
      navigation.navigate("Login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Card style={{ flex: 1 }}>
        <Card.Cover source={loginImg} />
        <Card.Title title="Signup" subtitle="So that you're not left out" />
        <Card.Content>
          {error && <Text style={{ color: "tomato" }}>{error}</Text>}
          <View style={styles.inputContainer}>
            <TextInput
              label="Username"
              value={userName}
              mode="outlined"
              dense
              onChangeText={(text) => setUserName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="Password"
              value={password}
              mode="outlined"
              autoCapitalize="none"
              secureTextEntry={true}
              dense
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={signup}>Signup</Button>
          <Button onPress={navigateToLogin}>Go to Login</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
  },
});
