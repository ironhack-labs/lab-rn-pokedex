import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
          <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
        </Stack.Navigator>
      );
}

export default AppNavigator;