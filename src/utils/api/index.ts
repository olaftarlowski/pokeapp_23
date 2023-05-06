import { api } from "./config";

// const singleRecord = "https://pokeapi.co/api/v2/pokemon/23/"

const fetchData = async () => {
  const response = await api.get("").catch((error) => {
    if (error.response) {
      console.log("Error: ", error.message);
      console.log("Response status: ", error.response.status);
    }
    return null;
  });

  return response;
};

export { fetchData };
