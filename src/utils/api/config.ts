import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokedex/kanto",
  headers: {
    common: {
      "Content-Type": "application/json",
      // Authorization: 'key',
    },
  },
});

export { api };
