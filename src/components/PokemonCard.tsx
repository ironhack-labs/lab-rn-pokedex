import React from "react";
import { Image, Text, View } from "react-native";
import { PokeInfo } from "../interface/PokeTypes";

const PokemonCard: React.FC<PokeInfo> = ({ name, url, description }) => {
    return (<View>
        <Text>
            {name}
        </Text>
        <Image source={require(description?.sprites.front_default)} />
    </View>)
}

export default PokemonCard;