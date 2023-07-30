import {DataT} from '../context/context';
import {useGetPokemonDetail} from '../hooks/useGetPokemonDetail';
import {Card} from './Card';

type PropsT = {
  pokemon: DataT;
};

export const PokemonCard = (props: PropsT) => {
  const {pokemon} = props;
  const {pokemon: info} = useGetPokemonDetail(pokemon.name, pokemon.url);

  const types = Array.from(
    Array.from(info?.types || []).map(type => type?.type.name),
  ).join(',');

  const abilities = Array.from(
    Array.from(info?.abilities || []).map(ability => ability?.ability.name),
  ).join(',');

  return (
    <Card
      type={types}
      name={pokemon.name}
      abilities={abilities}
      id={info?.id.toString() || '0'}
      image={info?.sprites.front_default ?? ''}
    />
  );
};
