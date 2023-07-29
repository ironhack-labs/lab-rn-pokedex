import {Control, Path} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type Pokemon = {
  name: string;
  id: number;
  image: string;
  type: string;
  abilities: string[];
};

export type FormInputProps<T extends object> = {
  control: Control<T>;
  controlName: Path<T>;
  inputProps?: TextInputProps;
  error?: string;
  required?: boolean;
};
