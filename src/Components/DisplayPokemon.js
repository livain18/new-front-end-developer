import React, { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks'
import { POKEMON_EXTRA_QUERY } from '../queries/Queries';

export default function DisplayPokemon(props) {
    const { searchString } = props;
    const { loading, error, data } = useQuery(POKEMON_EXTRA_QUERY, {
        variables: {
            name: searchString
        }
    });

    if (searchString === "") return 'Select A Pokemon';

    if (loading) return 'Loading...';
    if (error) return 'Select A Pokemon';

    const Pokemon = data.Pokemon;

    return (
        <>
            <p>{`${Pokemon.name} ${Pokemon.id}`}</p><br />
            <img src={Pokemon.image} alt={`${Pokemon.name}`} />
            <ul>
                {Pokemon.abilities.map((element, i) => <li key={i}>{`${element.name} ${i}`}</li>)}
            </ul>
            <ul>
                {Pokemon.stats.map((element, i) => <li key={i}>{`${element.name} ${element.value}`}</li>)}
            </ul>
            <ul>
                {Pokemon.types.map((element, i) => <li key={i}>{`${element.name}`}</li>)}
            </ul>
        </>
    )
}