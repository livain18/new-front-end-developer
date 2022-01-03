import React, { useState } from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './Container';
import Logo from './Components/Logo';
import PokemonPicker from './Components/PokemonPicker/PokemonPicker.js'
import PokemonSelection from './Components/PokemonSelection/PokemonSelection';

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});

export default function App() {
  const [squad, setSquad] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState([]);

  function handleAddNewUser(selectedPokemon, selectedInfo) {
    setSelectedPokemon(selectedPokemon);
    setSelectedInfo(selectedInfo);
    const updateSquad = [
      ...squad,
      {
        id: squad.length + 1,
        name: `${selectedPokemon} `,
        type: `type${squad.length + 1}${selectedInfo.type}`,
        img: selectedInfo.img
      }
    ];
    setSquad(updateSquad);
  }

  // const AddPokemonInfo = (selectedInfo) => {

  // }

  // function selectPokemon(selectedPokemon) {
  //   setSelectedPokemon(selectedPokemon)
  // }

  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />
          <PokemonPicker handleAddNewUser={handleAddNewUser} />
          <PokemonSelection squad={squad} />
        </Container>
      </>
    </ClientContext.Provider>
  );
}






