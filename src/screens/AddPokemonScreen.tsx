import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

type DataT = {
  id: string;
  name: string;
  image: string;
  type: string;
  abilities: string;
};

export const AddPokemonScreen = () => {
  const {control, handleSubmit} = useForm<DataT>();

  const onSubmit = (data: DataT) => {
    console.log(data);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          name="id"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          name="type"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          name="abilities"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput value={value} onChangeText={onChange} />
          )}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
