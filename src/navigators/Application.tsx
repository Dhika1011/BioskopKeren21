import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  ConfirmationTiket,
  DetailTiket,
  EditProfile,
  Payment,
  Startup,
} from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import Moviedetails from '@/screens/Moviedetails/Moviedetails';
import Login from '@/screens/Login/Login';
import Register from '@/screens/Register/Register';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen
            name="DetailTiket"
            component={DetailTiket}
            options={{
              headerShown: true,
              headerTitle: 'DetailTiket',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Moviedetails"
            component={Moviedetails}
            options={{
              headerShown: true,
              headerTitle: 'Moviedetails',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              headerShown: true,
              headerTitle: 'Payment',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="ConfirmationTiket"
            component={ConfirmationTiket}
            options={{
              headerShown: true,
              headerTitle: 'ConfirmationTiket',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              headerTitle: 'Login',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
              headerTitle: 'Register',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerShown: false,
              headerTitle: 'EditProfile',
              headerPressColor: colors.background,
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
