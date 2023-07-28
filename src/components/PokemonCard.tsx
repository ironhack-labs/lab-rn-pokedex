import React from "react";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { PokeInfo } from "../interface/PokeTypes";

const PokemonCard: React.FC<PokeInfo> = ({ name, url, description }) => {
    console.log(name)
    console.log(description)
    return (
    <TouchableOpacity style={style.card}>
        <Text>{name}</Text>
        <Image source={{ uri: description?.sprites.front_default }} style={style.image} />
    </TouchableOpacity>)
}

export default PokemonCard;

const style = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#000',
        height: 300,
    },
    image: {
        flex:1,
        width: 200,

    }
})