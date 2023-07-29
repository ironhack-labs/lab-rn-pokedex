import {SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PokemonDetail from '../components/PokemonDetail';
import {fetchPokemonById} from '../hooks/useFetchPokemon';

const PokemonDetailsScreen = (props: any) => {
  const [pokemon, setPokemon] = useState({});
  const {
    navigation,
    route: {params},
  } = props;

  useEffect(() => {
    (async () => {
      try {
        const data = fetchPokemonById(params.id);
        console.log(data);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  return (
    <SafeAreaView>
      <PokemonDetail />
    </SafeAreaView>
  );
};

export default PokemonDetailsScreen;
