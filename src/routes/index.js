import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import MyWallet from "../screens/MyWallet";
import Settings from "../screens/Settings";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size="24"
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyWallet"
          component={MyWallet}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "wallet" : "wallet-outline"}
                size="24"
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size="24"
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size="24"
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
