import React from 'react';
import styles from '../styles/PokemonApp.module.css';

export default function PokemonList(props) {
    const { list } = props;

    const listItems = list.map(({ id, name }) => (
        <li key={id}>{name}</li>
    ))

    return (
        <ul className={styles.list}>{listItems}</ul>
    )
}