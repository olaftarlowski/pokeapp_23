import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    common: {
      "Content-Type": "application/json",
      // Authorization: 'key',
    },
  },
});

export { api };
