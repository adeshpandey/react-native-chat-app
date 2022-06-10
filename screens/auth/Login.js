import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

const auth = getAuth();

const loginImg = require("../../assets/images/christine-sandu-yvJGMcuke7g-unsplash.jpg");
export default function Login() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, userName, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Card style={{ flex: 1 }}>
        <Card.Cover source={loginImg} />
        <Card.Title title="Login" subtitle="New way to chat" />
        <Card.Content>
          {error && <Text style={{ color: "tomato" }}>{error}</Text>}
          <View style={styles.inputContainer}>
            <TextInput
              label="Username"
              keyboardType="email-address"
              autoCapitalize="none"
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
          <Button onPress={login}>Login</Button>
          <Button onPress={navigateToSignup}>Signup</Button>
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
