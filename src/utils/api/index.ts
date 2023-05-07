import { api } from "./config";

const fetchRegionKanto = async () => {
  const response = await api.get("/pokedex/kanto").catch((error) => {
    if (error.response) {
      console.log("Error: ", error.message);
      console.log("Response status: ", error.response.status);
    }
    return null;
  });

  return response;
};

const fetchSingleKanto = async () => {
  const generateRandomRecord = (): string => {
    const randomNum = Math.floor(Math.random() * 151) + 1;
    const randomStr = randomNum.toString();
    return randomStr;
  };

  const randomRecord: string = generateRandomRecord();
  console.log("SingleItem randomed: ", randomRecord);

  const response = await api.get(`pokemon/${randomRecord}/`).catch((error) => {
    if (error.response) {
      console.log("Error: ", error.message);
      console.log("Response status: ", error.response.status);
    }
    return null;
  });

  return response;
};

export { fetchRegionKanto, fetchSingleKanto };
