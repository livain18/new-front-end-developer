import React, { useState, useEffect } from 'react';
import styles from '../styles/PokemonApp.module.css'
import PokemonList from './PokemonList';
import DisplayPokemon from './DisplayPokemon';

import { useQuery } from 'graphql-hooks'
import { LIST } from '../queries/Queries';

export default function PokemonPicker() {
    const [searchString, setSearchString] = useState("");
    const { loading, error, data } = useQuery(LIST, {
        variables: {
            limit: 151
        }
    });

    if (loading) return 'Loading...';
    if (error || !data) return 'Something Bad Happened';

    const filterFunction = ({ name }) => {
        return name.includes(searchString) //True or false
    }

    const filtered = searchString !== "" ? data.Pokemons.filter(filterFunction) : data.Pokemons;
    const singleResultName = filtered.length === 1 ? filtered[0].name : "";

    return (
        <>
            <input
                className={styles.searchBox}
                type="search"
                placeholder="Search for Pokémon..."
                value={searchString}
                onInput={(event) => setSearchString(event.target.value)}
            />
            <PokemonList list={filtered} />
            <DisplayPokemon searchString={singleResultName} />
        </>
    );
}