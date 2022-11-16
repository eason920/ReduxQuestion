import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// REDUX v
// import configureStore from "./src/redux/store";
// import { StoreContext } from "redux-react-hook";
// const store = configureStore();

// SCREEN v
import ProfileScreen from "./src/screens/ProfileScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileGroup = () => (
  <Stack.Navigator
    initialRouteName={"ProfileScreen"}
    screenOptions={{
      headerStyle: { backgroundColor: "#3092ca" },
      headerTintColor: "#fff",
    }}
  >
    <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"ProfileGroup"}
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#ccc",
        })}
      >
        <Tab.Screen
          name={"ProfileGroup"}
          component={ProfileGroup}
          options={{ title: "PROFILE" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function MyApp() {
//   <StoreContext.Provider value={store}>
//     <App />
//   </StoreContext.Provider>
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
