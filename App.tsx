import { StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import './config/firebase';
import PrivateNavigations from './navigation/PrivateNavigations';
import PublicNavigation from './navigation/PublicNavigation';
import { useAuthentication } from './utils/hooks/useAuthentication';

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


export default function App() {
    const { user } = useAuthentication();

  return (
    <PaperProvider theme={theme}>
      {user ? <PrivateNavigations /> : <PublicNavigation />}
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
