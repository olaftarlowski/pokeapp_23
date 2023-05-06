import { api } from "./config";

const fetchData = async () => {
  const response = await api.get("/api/?results=10").catch((error) => {
    if (error.response) {
      console.log("Error: ", error.message);
      console.log("Response status: ", error.response.status);
    }
    return null;
  });

  return response;
};

export { fetchData };
