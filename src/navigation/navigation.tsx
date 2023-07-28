import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "../screens/homeScreen";
import pokemonDetailsScreen from "../screens/pokemonDetailsScreen";
import addPokemonScreen from "../screens/addPokemonScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={homeScreen} />
                <Stack.Screen name="AddPokemon" component={addPokemonScreen} />
                <Stack.Screen name="pokemonDetails" component={pokemonDetailsScreen} />

            </Stack.Navigator>
        </NavigationContainer>




    );
};

export default Navigation;