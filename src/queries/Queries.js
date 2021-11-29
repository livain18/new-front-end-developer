export const POKEMON_QUERY = `query Pokemon($limit: Int) {
    Pokemons(first: $limit) {
      id
      name
    }
  }`;

export const LIST = `query Pokemon($limit: Int) {
    Pokemons(first: $limit) {
      id
      name
    }
  }`;
//COMPLETE_LIST_QUERY

//FILTER_BY_NAME
export const POKEMON_EXTRA_QUERY = `query Pokemons($name: String!) {
    Pokemon(name: $name) {
      id
      name
      image
      abilities {
        name
      }
      moves {
        name
        type
        learnMethod
      }
      stats {
        name
        value
      }
      types {
        name
      }
    }
  }`;