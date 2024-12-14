/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import '../global.css';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
// import Login from './pages/Login';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
// import Home from './pages/Home';
// import Login from './pages/Login';
import AppNavigation from './navigation/AppNavigation';

enableFreeze(true);

const theme = {
  ...DefaultTheme,
  roundness: 0,
};

// const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white">
              {/* <Login /> */}
              {/* <Home /> */}
              {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={Login}  />
                <Stack.Screen name="Home" component={Home}  />
              </Stack.Navigator> */}
              <AppNavigation />
            </SafeAreaView>
          </SafeAreaProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
export default App;
