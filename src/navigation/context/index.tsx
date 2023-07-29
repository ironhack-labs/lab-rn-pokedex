import { View, Text } from 'react-native';
import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { Pokemon } from '../../../hooks/useFetch';

type AppContextProps = {
    pokemons: Pokemon[];
    dispatch: React.Dispatch<AppReducerActions>;  
};

type AppReducerActions = {type: 'ADD_POKEMONS', payload: Pokemon[]}

const appReducer = (state: AppContextProps['pokemons'], action: AppReducerActions) => {
    switch(action.type){
        case "ADD_POKEMONS":
            return [...state, ...action.payload];
        default:
            return state;
    };
};

export const AppContext = createContext<AppContextProps>({
    pokemons: [],
    dispatch: () => {},    
});

export const AppContextProvider = ({children}: PropsWithChildren) => {
    const [state, dispatch] = useReducer(appReducer, []);

    return <AppContext.Provider value={{pokemons: state, dispatch}}>{children}</AppContext.Provider>
};