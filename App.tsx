import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Notifications from "./screens/Notifications";
import Home from "./screens/Home";
import Auth from "./screens/Auth";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Authentication">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Authentication" component={Auth} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
