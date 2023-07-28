import React, {createContext, useContext, useReducer, Dispatch} from 'react';

export type Pokemon = {
  name: string;
  url: string;
};

type PokedexState = {
  Pokemons: Pokemon[];
};

type Action =
  | {type: 'ADD_POKEMON'; payload: Pokemon}
  | {type: 'REMOVE_POKEMON'; payload: Pokemon}
  | {type: 'ADD_POKEMONS'; payload: Pokemon[]};

const initialState: PokedexState = {
  Pokemons: [],
};

const pokedexReducer = (state: PokedexState, action: Action): PokedexState => {
  console.log('aquí los pokemons', state, action);
  switch (action.type) {
    case 'ADD_POKEMONS':
      return {
        ...state,
        Pokemons: action.payload,
      };
  
    default:
      break;
  }
  return state;
};

const PokedexContext = createContext<
  | {
      state: PokedexState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

export const PokedexProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(pokedexReducer, initialState);

  return (
    <PokedexContext.Provider value={{state, dispatch}}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedex = () => {
  const context = useContext(PokedexContext);
  if (!context) {
    throw new Error('usePokedex debe ser utilizado dentro de PokedexProvider');
  }
  return context;
};
