import React, { useState } from 'react';
import styles from '../../styles/PokemonApp.module.css'
import PokemonList from './PokemonList';
import DisplayPokemon from './DisplayPokemon';

import { useQuery } from 'graphql-hooks'
import { LIST } from '../../queries/Queries';

export default function PokemonPicker(props) {
    const [searchString, setSearchString] = useState("");
    const { loading, error, data } = useQuery(LIST, {
        variables: {
            limit: 151
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Something Bad Happened</p>;

    const filterFunction = ({ name }) => {
        return name.includes(searchString) //True or false for each element of array
    }

    const filtered = searchString !== "" ? data.Pokemons.filter(filterFunction) : data.Pokemons;
    const singleResultName = filtered.length === 1 ? filtered[0].name : "";

    const clickHandler = (e, getPokemonInfo) => {
        props.handleAddNewUser(singleResultName, getPokemonInfo);
    }

    // const passedPokemonInfo = () => {

    // }

    return (
        <>
            <input
                className={styles.searchBox}
                type="search"
                placeholder="Search for Pokémon..."
                value={searchString}
                onInput={(event) => setSearchString(event.target.value)}
            />
            <div className={styles.flex}>
                <PokemonList list={filtered} />
                <DisplayPokemon searchString={singleResultName} clickHandler={clickHandler} />
            </div>
        </>
    );
}