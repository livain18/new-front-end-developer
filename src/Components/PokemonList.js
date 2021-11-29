import React from 'react';


export default function PokemonList(props) {
    const { list } = props;

    const listItems = list.map(({ id, name }) => (
        <li key={id}>{name}</li>
    ))

    return (
        <ul>{listItems}</ul>
    )
}