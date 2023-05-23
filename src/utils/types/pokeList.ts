export interface PokeListSingle {
  id: string;
  // entry_number: number;
  entryNumber:number;
  name: string;
  sprite: string | undefined;
}

export type Single = {
  entry_number: number;
  pokemon_species: { name: string };
};

export type ApiData = { data: { pokemon_entries: Single[] } };

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
