import {CustomPokemonT} from '../context/context';
import {Card} from './Card';

export const CustomPokemonCard = ({pokemon}: {pokemon: CustomPokemonT}) => {
  return <Card {...pokemon} />;
};
