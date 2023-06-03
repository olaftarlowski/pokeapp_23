import { AxiosResponse, isAxiosError } from "axios";
import { api } from "./config";
import { ApiData, PokeSingleInterface } from "../types/pokeList";

const fetchRegion: (targetRegion:string) => Promise<
  AxiosResponse<ApiData> | undefined
> = async (targetRegion:string) => {
  try {
    const response: AxiosResponse<ApiData> = await api.get<ApiData>(
      `/pokedex/${targetRegion}`
    );
    console.log(response);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const errResp = error.response;
      console.log("Error: ", error.message);
      console.log("Response status: ", errResp?.status);
    } else {
      throw error;
    }
  }
};

// const fetchRegionKanto: () => Promise<
//   AxiosResponse<ApiData> | undefined
// > = async () => {
//   try {
//     const response: AxiosResponse<ApiData> = await api.get<ApiData>(
//       "/pokedex/kanto"
//     );
//     console.log(response);

//     return response;
//   } catch (error) {
//     if (isAxiosError(error)) {
//       const errResp = error.response;
//       console.log("Error: ", error.message);
//       console.log("Response status: ", errResp?.status);
//     } else {
//       throw error;
//     }
//   }
// };

const fetchSingleKanto: (
  recordName: string
) => Promise<AxiosResponse<PokeSingleInterface> | undefined> = async (
  recordName
) => {
  console.log("SingleItem choosen: ", recordName);

  try {
    const response: AxiosResponse<PokeSingleInterface> = await api.get(
      `pokemon/${recordName}/`
    );
    console.log(response);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const errResp = error.response;
      console.log("Error: ", error.message);
      console.log("Response status: ", errResp?.status);
    } else {
      throw error;
    }
  }
};

const fetchSingleKantoRandom = async () => {
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

export { fetchRegion, fetchSingleKanto, fetchSingleKantoRandom };
