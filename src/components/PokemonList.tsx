import React from "react";
import { PokeInfo } from "../interface/PokeTypes";
import { FlatList } from "react-native";
import PokemonCard from "./PokemonCard";
import { PokemonListInterface } from "../interface/PokemonListInterface";

const PokemonList: React.FC<PokemonListInterface> = ({ pokelist }) => {
    return (
        <FlatList
            data={pokelist}
            renderItem={({ item }) => <PokemonCard name={item.name} url={item.url} description={item.description} />}
            keyExtractor={item => item.name}
        />
    )
}

export default PokemonList;