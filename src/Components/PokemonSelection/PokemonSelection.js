import React, { useState } from 'react';
import styles from '../../styles/PokemonApp.module.css'

export default function PokemonSelection(props) {
    // const { list } = props;

    const selectedPokemon = Array(6).fill(1).map((el, i) => <div className={styles.selectPokEmpty} key={i}>empty</div>)


    return (
        <div className={styles.selectedPokemons}>{selectedPokemon}</div>
    )
}