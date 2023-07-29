import React, {cloneElement, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    ToastAndroid,
    Button,
    Text,
    TextInput,
    View,
  } from 'react-native';
     import {useNavigation} from '@react-navigation/native';
    import {usePokemonContext} from '../context/pokemonContext';
    import styles from '../styles/styles';
    import { useForm, Controller } from "react-hook-form";

    const addPokemonScreen: React.FC = () => {
        const {navigate} = useNavigation();

        const [pokemonName, setPokemonName] = useState('');
        const [abilities, setAbilities] = useState('');
        const navigation = useNavigation();
        const {state, dispatch} = usePokemonContext();
        const {AddPokemon} = usePokemonContext();

        const newPokemon = {
            name: pokemonName,
            id: Number,
            image: '',
            type: '',
            abilities: abilities.split(',').map(ability => ability.trim()),
          };

          const {
            control,
            formState: { errors },
            handleSubmit,
            reset,
            watch,
            clearErrors,
            setValue,
            getValues,
          } = useForm<newPokemon>()
          
          const onSubmit  = (pokemon: Pokemon) => {
            console.log(pokemon);
                ToastAndroid.show('Form submitted successfully!', ToastAndroid.SHORT);
                AddPokemon({...pokemon, id: Number(pokemon.id + new Date().getDate())});
                reset(); 
                navigate('Home');
          };

        return(

            <View style={styles.container}>

<Text style={styles.text}>Agrega un nuevo pokemon</Text>


            <Controller
              name="Nombre"
              label="Nombre"
              mode="outlined"
                rules={{ required: 'Este campo es obligatorio' }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                 <TextInput               
                 onChangeText={onChange}
                 style={styles.input} 
                 placeholder="Nombre"
                 onBlur={onBlur}
                 value={value} 
                 />
              )}
            />
            {errors.Nombre && <Text style={styles2.text}>{errors.Nombre.message}</Text>}

            <Controller
              name="type"
              label="tipos Obligatorio"
              mode="outlined"
                rules={{ required: 'Este campo es obligatorio' }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                 <TextInput               
                 onChangeText={onChange}
                 style={styles.input} 
                 placeholder="Lista de Tipo"
                 onBlur={onBlur}
                 value={value} 
                 />
              )}
            />
            {errors.abilities && <Text style={styles2.text}>{errors.abilities.message}</Text>}
          
            <Controller
              name="abilities"
              placeholder="lista de habilidades(separa con comas cada una )"
              mode="outlined"
                rules={{ required: 'Este campo es obligatorio' }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                 <TextInput               
                 onChangeText={onChange}
                 style={styles.input} 
                 placeholder="lista de habilidades(separa con comas cada una)"
                 onBlur={onBlur}
                 value={value} 
                 />
              )}
            />
            {errors.abilities && <Text style={styles2.text}>{errors.abilities.message}</Text>}
      
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      
          </View>
        );
};

export default addPokemonScreen;

const styles2 = {
    errorText: {
      color: 'red',
    },
    text: {
      // Your styles for the text here
    },
  };