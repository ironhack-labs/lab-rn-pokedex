import React from 'react';
import { Pokemon } from '../types/types';

type pokemonCardProps={

        id: number;
        name: string;
        image: string;

};


const pokemonCard : React.FC<pokemonCardProps> = ({}) => {
    return (
        <Text >App.tsx</Text>
    );

};

export default pokemonCard;