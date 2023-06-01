import { useContext } from "react";

import { PokeListContext } from "../../store/AppContext";

export const usePokeListContext = () => useContext(PokeListContext);
