import { useEffect, useState } from "react"
import { fetchData } from "../utils/api"


const Sidebar = () => {
  const [data, setData] = useState<[] | null>([])
  const [hasError, setHasError] = useState<boolean>(false)

  const getData = async () => {
    const dataReceived = await fetchData()
    console.log(dataReceived);
    if (dataReceived === null) {
      setHasError(true)
      return
    } else if (dataReceived) {
      setData(dataReceived?.data.results)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log("DATA FETCHED");
  console.log(data);


  return (
    <div>
      {data?.length !== 0 ? (
        <>
          {data?.map((item: { name: { first: string, last: string }, gender: string, id: { value: string } }) => {
            return <h1 key={item.id.value}>{item.name.first} || {item.name.last} || {item.gender} </h1>
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
      {hasError && <p>An error has occured...</p>}
    </div>
  )
}

export default Sidebar