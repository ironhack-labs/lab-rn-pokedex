import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const navigation =()=>{
    return(
<NavigationContainer>
<Stack.Navigator>

</Stack.Navigator>

</NavigationContainer>


    );
};

export default navigation;