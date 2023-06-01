export type SingleRecord = {
  id: string;
  entry_number: number;
  sprite: string;
  pokemon_species: { name: string };
};

export type ApiData = { pokemon_entries: SingleRecord[] };

// export type ApiDataReceived =  { pokemon_entries: Single[]  };

export type PokeTypes = {
  type: {
    name: string;
  };
};

export type PokeMove = {
  move: {
    name: string;
  };
};

export interface PokeSingleInterface {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  types: PokeTypes[];
  moves: PokeMove[];
}
