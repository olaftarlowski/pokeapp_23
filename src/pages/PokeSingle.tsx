
import { useParams } from "react-router";
import { useEffect, useState } from "react"
import { fetchSingleKanto } from "../utils/api"
import PokeSingleItem from "../components/PokeSingleItem/PokeSIngleItem";

interface SingleRecord {
    id: number,
    name: string
    weight: number
    height: number
    types: { type: { name: string } }[]
    moves: { move: { name: string } }[]
}

const PokeSingle = () => {
    const params = useParams()

    const name: any = params.pokeNameCode
    console.log(name);


    const [data, setData] = useState<SingleRecord | null>(null)
    const [hasError, setHasError] = useState<boolean>(false)

    const getData = async () => {
        const dataReceived = await fetchSingleKanto(name)
        // console.log(dataReceived);
        if (dataReceived === null) {
            setHasError(true)
            return
        } else if (dataReceived) {
            setData(dataReceived?.data)
        }
    }

    useEffect(() => {
        getData()
    }, [])




    return <div>
        {data ? (
            <>
                <PokeSingleItem id={data.id} name={data.name} sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} height={data.height} weight={data.weight} types={data.types} moves={data.moves} />
                <div key={data.id} ><div><h6 >{data.id}.  {data.name}</h6></div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" /></div>
            </>
        ) : (
            <p>Loading...</p>

        )}
        {hasError && <p>An error has occured...</p>}
    </div>;
};

export default PokeSingle;
