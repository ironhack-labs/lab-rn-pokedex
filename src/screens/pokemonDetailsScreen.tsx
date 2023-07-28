import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  

const pokemonDetailsScreen =({ route })=>{
    const { pokemonName } = route.params;

    return (
      <Text>{`Detalles del Pokémon: ${pokemonName}`}</Text>
    );
};

export default pokemonDetailsScreen;