import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { withTheme } from 'react-native-paper';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

function SettingsNavigation(props) {
  const { colors } = props.theme;

  return (
    <Stack.Navigator screenOptions={{
          headerTitleAlign: "left",
          headerStyle: { backgroundColor: colors.headerBackgroundColor },
          headerTitleStyle: { color: colors.titleColor },
        }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}


export default withTheme(SettingsNavigation);