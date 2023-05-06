import { useEffect, useState } from "react"
import { fetchData } from "../utils/api"

const Home = () => {
    const [data, setData] = useState<[] | null>([])
    const [hasError, setHasError] = useState<boolean>(false)

    const getData = async () => {
        const dataReceived = await fetchData()
        console.log(dataReceived);
        if (dataReceived === null) {
            setHasError(true)
            return
        } else if (dataReceived) {
            setData(dataReceived?.data.pokemon_entries)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log("DATA FETCHED");
    // console.log(data);


    return (
        <>
            <div>
                {data?.length !== 0 ? (
                    <>
                        {data?.map((item: { pokemon_species: { name: string, }, entry_number: number }) => {
                            return <div key={item.entry_number} style={{ display: "inline-block" }}><div><h6 >{item.entry_number}.  {item.pokemon_species.name}</h6></div>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.entry_number}.png`} alt="" /></div>
                        })}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                {hasError && <p>An error has occured...</p>}
            </div></>
    )
}

export default Home