import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Auth = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Register" component={Signup} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default Auth;
