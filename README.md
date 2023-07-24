![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - Pokedex App

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Install and use React Native Stack Navigator.
- Create a React Native app with multiple screens.
- Consume the Pokemon API to obtain information about pokemons.
- Use context and useReducer to manage information about pokemons.
- View the details of a pokemon.
- Render a list of pokemons.
- Create a form to add a new pokemon to the list.
- Create the styles of the application.

## Introduction

In this lab, we will create a React Native application that allows us to view a list of pokemons, add new pokemons to the list, and view the details of each pokemon. To achieve this, we will use the Pokemon API <https://pokeapi.co/> and the React Navigation library <https://reactnavigation.org/> to handle navigation between screens.

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request so your TAs can review your work.

## Example

This is how the app should look like:

![pokedex](./assets/pokedex.GIF)

## Instructions

### Iteration 1: Create the application structure

- Create a `src` folder at the root of the project.
- Create a `navigation` folder at the root of the project.
- Create a `components` folder inside `src`.
- Create a `screens` folder inside `src`.
- Create a `hooks` folder inside `src`.
- Create a `context` folder inside `src`.

### Iteration 2: Create the navigation

- Install `Stack Navigator` from `React Navigation`.
- Create a file inside `navigation` called `AppNavigator.js`.
- Create an `AppNavigator` component that renders a `Stack Navigator` with three screens: `Home`, `PokemonDetail`, and `AddPokemon`.
- Set up the route configuration for each screen.
- Use the `AppNavigator` component in `App.tsx`.

**Note: Don't forget to type the props of `AppNavigator` with `PropTypes`.**

### Iteration 3: Create the context

- Configure the application's context. Remember to use `useReducer` to manage the application state.
- Provide the context to the application.

**Note: Don't forget to create all the necessary types for the context.**

### Iteration 4: Create the screens

- Create a `HomeScreen` component that renders a `SafeAreaView` with a `FlatList` displaying the list of pokemons.
- Create a `PokemonDetailScreen` component that renders a `SafeAreaView` with the information of the pokemon.
- Create an `AddPokemonScreen` component that renders a `SafeAreaView` with a form to add a new pokemon to the list.

### Iteration 5: Fetch and render the list of pokemons

- Create a hook called `useFetch` that allows us to make requests to the Pokemon API (you can use `axios.create` to create an axios instance with the base URL of the API).
- Fetch the list of pokemons using the `useFetch` hook and save it in the context state. You can use the following endpoint: <https://pokeapi.co/api/v2/pokemon?limit=151>
- For now, render only a list of the pokemon names on the `HomeScreen` using the context.

**Note: Don't forget to create all the necessary types for the `useFetch` hook.**

### Iteration 6: Create the PokemonList and PokemonCard components

- Create a `PokemonList` component that receives the list of pokemons as a prop and renders a `FlatList` with the pokemons.
- For the `renderItem`, create and use a `PokemonCard` component that receives the pokemon as a prop and renders the pokemon's name, number (id), and image.
- Tip: You'll need to create a function that allows you to get the id of a pokemon from its URL, and you can use the following endpoint to get a pokemon's image: <https://pokeres.bastionbot.org/images/pokemon/${id}.png>
- Use the `PokemonList` component on the `HomeScreen`.

**Note: The `PokemonCard` component should allow the user to navigate to the `PokemonDetailScreen` when clicked on.**

### Iteration 7: Fetch and render the details of a pokemon

- Fetch the information of a pokemon using the `useFetch` hook and save it in the context state. You can use the following endpoint: <https://pokeapi.co/api/v2/pokemon/${id}>
- Use the context to get the pokemon information on the `PokemonDetailScreen` and render its name, number (id), image, type, and abilities.
- You can create a `PokemonDetail` component to render the pokemon information or render it directly on the `PokemonDetailScreen`.
- Create a button that allows the user to navigate to the `AddPokemonScreen`, and make sure the navigation between screens works correctly.

### Iteration 8: Create the form to add a new pokemon

- Create a form on the `AddPokemonScreen` that allows the user to add a new pokemon to the list.
- The form should have the following fields: name, number (id), image, type, and abilities.
- Add validations to the form fields.
- When the form is submitted, the new pokemon should be added to the list of pokemons, and the user should be redirected to the `HomeScreen`.
- Use the context to add the new pokemon to the list and ensure that the list updates correctly. You can create a new state in the context to store the new pokemon.

### Iteration 9: Create the application styles

- Create a file `theme.js` inside `src` and export an object with the application's colors.
- Create a file `styles.js` inside `src` and export an object with the application's styles.
- The styles are up to you, but make sure the application looks good on both iOS and Android. You can also use the design of the example application as a reference.

## Bonus:

- Create a new Screen `PokemonSearchScreen` that allows the user to search for a pokemon by its name or number (id).
- Integrate the Bottom Tabs Navigator to create navigation between the `HomeScreen` and `PokemonSearchScreen`.

Happy coding! 💙
