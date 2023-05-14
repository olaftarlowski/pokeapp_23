
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { fetchSingleKanto } from "../utils/api"
import { PokeSingleItem } from "../components/PokeSingleItem";
import { LoadingSpinner } from "../components/common";
import { ErrorPage } from "../components";
import BackButton from "../components/common/BackButton";

interface SingleRecord {
    id: number,
    name: string
    weight: number
    height: number
    types: { type: { name: string } }[]
    moves: { move: { name: string } }[]
}

const PokeSingle = () => {
    const { pokeNameCode } = useParams<Record<string, string | undefined>>()

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<SingleRecord | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchSingleKanto(pokeNameCode);
                if (result === null) {
                    setError(true);
                } else {
                    setPokemon(result.data);
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
