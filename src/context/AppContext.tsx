import React, { createContext, useReducer, useContext } from 'react';
import { Pokemon } from './types/Pokemon';

interface AppState {
  pokemons: Pokemon[];
}

type Action = { type: 'ADD_POKEMON'; payload: Pokemon };

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(
  undefined
);

const initialState: AppState = {
  pokemons: [],
};

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    default:
      return state;
  }
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};

export { AppContextProvider, useAppContext };
