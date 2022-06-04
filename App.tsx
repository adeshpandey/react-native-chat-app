import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeTabs from './HomeTabs';
import ChatDetail from './screens/ChatDetail';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4DB6AC",
    accent: "#2D292D",
    titleColor: "#000",
    iconColor: "#08979c",
    headerBackgroundColor: "#D0D0D0",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatDetail"
            component={ChatDetail}
            options={({ route, navigation }) => ({
              title: route.params.name,
              headerLeft: () => {
                return (
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Ionicons name="arrow-back" size={32} />
                    </TouchableOpacity>
                    <Avatar.Icon
                      size={36}
                      icon={() => (
                        <Ionicons
                          name="person-outline"
                          size={16}
                          color="#FFF"
                        />
                      )}
                    />
                  </View>
                );
              },
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <TouchableOpacity style={{ marginRight: 15 }}>
                    <Feather
                      name="phone-call"
                      color={theme.colors.primary}
                      size={18}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather
                      name="video"
                      color={theme.colors.primary}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
