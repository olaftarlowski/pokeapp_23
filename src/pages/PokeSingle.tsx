import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleRecord } from "../utils/api";
import { PokeSingleItem } from "../components/PokeSingleItem";
import { LoadingSpinner, BackButton } from "../components/common";
import { ErrorPage } from "../components";
import { PokeSingleInterface } from "../utils/types/pokeList";

const PokeSingle = () => {
    const { pokeNameCode } = useParams<Record<string, string | undefined>>();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [itemRecord, setItemRecord] = useState<PokeSingleInterface | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pokeNameCode) {
                    const result = await fetchSingleRecord(pokeNameCode);
                    if (!result) {
                        setError(true);
                    } else {
                        setItemRecord(result.data);
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
            {itemRecord && (
                <PokeSingleItem
                    id={itemRecord.id}
                    name={itemRecord.name}
                    sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemRecord.id}.png`}
                    height={itemRecord.height}
                    weight={itemRecord.weight}
                    types={itemRecord.types}
                    moves={itemRecord.moves}
                />
            )}
        </div>
    );
};

export default PokeSingle;
