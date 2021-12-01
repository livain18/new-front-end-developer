import React from 'react';
import { useQuery } from 'graphql-hooks'
import { POKEMON_EXTRA_QUERY } from '../queries/Queries';
import styles from '../styles/PokemonApp.module.css'

export default function DisplayPokemon(props) {
    const { searchString } = props;
    const { loading, error, data } = useQuery(POKEMON_EXTRA_QUERY, {
        variables: {
            name: searchString
        }
    });

    if (searchString === "") return <p>Select A Pokemon</p>;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Select A Pokemon</p>;

    const Pokemon = data.Pokemon;

    const Stats = () => {
        const stats = Pokemon.stats;
        const stats1 = stats.slice(0, 3);
        const stats2 = stats.slice(3);
        return (
            <>
                <p className={styles.block}>
                    Stats
                </p>
                <ul className={styles.statsColumn}>
                    {stats1.map((element, i) => <li className={styles.liFlex} key={i}><p>{element.name}</p><p>{element.value}</p></li>)}
                </ul>
                <ul className={styles.statsColumn}>
                    {stats2.map((element, i) => <li className={styles.liFlex} key={i}><p>{element.name}</p><p>{element.value}</p></li>)}
                </ul>
            </>
        )
    }

    return (
        <>
            <div className={`${styles.width50}`}>
                <div>
                    <img src={Pokemon.image} alt={`${Pokemon.name}`} />
                    <p>{`${Pokemon.name} ${Pokemon.id}`}</p><br />
                    <p>Type</p>
                    <ul>
                        {Pokemon.types.map((element, i) => <li key={i}>{`${element.name}`}</li>)}
                    </ul>
                    <p>Abilities</p>
                    <ul className={styles.abilities}>
                        {Pokemon.abilities.map((element, i) => <li key={i}>{`${element.name}`}</li>)}
                    </ul>
                    <button className={styles.btnSavePokemon}>Save Pokemon</button>
                </div>
                <div className={`${styles.statsFlex} ${styles.flexWrap} ${styles.width75}`}>
                    <Stats />
                </div>
            </div>
            <div>
                <p className={styles.block}>Moves</p>
                <ul className={styles.movesList}>
                    {Pokemon.moves.map((element, i) => <li key={i}>{`${element.name} ${element.learnMethod}`}</li>)}
                </ul>
            </div>
        </>
    )
}