import React from 'react';
import {Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import {formInputStyles} from '../theme/FormInput.styles';
import {View} from 'react-native';
import {FormInputProps} from '../types';

function FormInput<T extends object>({
  control,
  inputProps,
  error,
  controlName,
  required,
}: FormInputProps<T>) {
  const inputStyles = error
    ? [formInputStyles.input, formInputStyles.inputWithError]
    : [formInputStyles.input];

  return (
    <View style={formInputStyles.inputContainer}>
      <Controller
        control={control}
        rules={{required: required && 'This is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...inputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={inputStyles}
          />
        )}
        name={controlName}
      />
      {error && <Text style={formInputStyles.errorMessage}>{error}</Text>}
    </View>
  );
}

export default FormInput;
