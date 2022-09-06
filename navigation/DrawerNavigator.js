import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="MyHome"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
