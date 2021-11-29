import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './Container';
import Logo from './Components/Logo';
import PokemonPicker from './Components/PokemonPicker.js'

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
        </Container>
      </>
    </ClientContext.Provider>
  );
}






