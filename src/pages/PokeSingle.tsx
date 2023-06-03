import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { fetchSingleKanto } from "../utils/api"
import { PokeSingleItem } from "../components/PokeSingleItem";
import { LoadingSpinner, BackButton } from "../components/common";
import { ErrorPage } from "../components";
import { PokeSingleInterface } from "../utils/types/pokeList";


const PokeSingle = () => {
    const { pokeNameCode } = useParams<Record<string, string | undefined>>()
console.log(pokeNameCode);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<PokeSingleInterface | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pokeNameCode) {
                    const result = await fetchSingleKanto(pokeNameCode);
                    if (!result) {
                        setError(true);
                    } else {
                        setPokemon(result.data);
                    }
                } else {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pokeNameCode]);

    return (
        <div>
            <BackButton />
            {loading && <LoadingSpinner />}
            {error && <ErrorPage />}
            {pokemon && (
                <PokeSingleItem
                    id={pokemon.id}
                    name={pokemon.name}
                    sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    types={pokemon.types}
                    moves={pokemon.moves}
                />

            )}
        </div>
    );
};

export default PokeSingle;
