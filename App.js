import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { BookDetails} from "./screens";
import Tabs from "./navigation/tabs";


const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();


const App = () => {

  return (


    <NavigationContainer theme={Theme}>
      <Stack.Navigator
      
          screenOptions={{
          HeaderShown: false
        }}
        initialRouteName={'Home'}
        >

          {/* Tabs */}

          <Stack.Screen name="Home" component={Tabs} 
          option = {{HeaderShown: false}}
          /> 
          


          {/* Screens */}
          <Stack.Screen name="BookDetails" component={BookDetails} 
          option = {{HeaderShown: false}} 
          />
          </Stack.Navigator>
          
               
      </NavigationContainer>

  )

}

export default App;

