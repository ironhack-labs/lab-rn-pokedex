import {FlatList, SafeAreaView, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {usePokeContextProvider} from '../context/usePokemon';
import PokemonInfoCard from '../components/PokemonInfoCard';

const HomeScreen = () => {
  const {pokeInfo, fetchPoke} = usePokeContextProvider();

  useEffect(() => {
    console.log('entor');
    fetchPoke();
  }, []);

  return (
    <SafeAreaView>
      {pokeInfo && (
        <FlatList
          data={pokeInfo}
          renderItem={({item}) => <PokemonInfoCard item={item} />}
          keyExtractor={item => item.name}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
