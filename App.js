import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
    <MainStackNavigator />
  </Provider>

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
