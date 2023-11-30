import React from 'react';
import { Example, Favorit, Home, Profile, Ticket } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '@/theme/Variables';
import { useTheme } from '@/hooks';

const Tab = createBottomTabNavigator();

// @refresh reset
// Home, MyVoucher, Transaction, Report, Account
// @refresh reset
const MainNavigator = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  const screenOptions = {
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: '#DDD',
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBarStyle,
    lazy: true,
  };
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: '#F2F2F2' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.Black,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/IconHomeOn.png')
                    : require('../theme/assets/images/IconHomeOff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textRegular, { fontSize: 10, color: Colors.error }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={Favorit}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.Black,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/IconFavoritOn.png')
                    : require('../theme/assets/images/IconFavoritOff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textRegular, { fontSize: 10, color: Colors.error }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Favorit
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.Black,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/TiketON.png')
                    : require('../theme/assets/images/Black.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textRegular, { fontSize: 10, color: Colors.error }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Tiket
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.Black,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/IconProfileOn.png')
                    : require('../theme/assets/images/IconProfilOff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textRegular, { fontSize: 10, color: Colors.error }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.white,
    height: 60,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backfaceVisibility: 'hidden',
    marginTop: -30,
    borderTopWidth: 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
});
