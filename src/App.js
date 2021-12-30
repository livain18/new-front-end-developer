import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './Container';
import Logo from './Components/Logo';
import PokemonPicker from './Components/PokemonPicker/PokemonPicker.js'
import PokemonSelection from './Components/PokemonSelection/PokemonSelection';

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />
          <PokemonPicker />
          <PokemonSelection />
        </Container>
      </>
    </ClientContext.Provider>
  );
}






