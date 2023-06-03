import React, { createContext, useEffect, useState } from 'react';
import { ApiData, SingleRecord } from '../utils/types/pokeList';
import { fetchRegion } from '../utils/api';
import { v4 as uuidv4 } from 'uuid';

interface PokeListContextType {
  kantoRecords: SingleRecord[] | undefined;
  addKantoRecords: (regio: string) => Promise<void>;
  setNewRegion: (region: string) => void

  selectedRecords: SingleRecord[];
  addRecord: (record: SingleRecord) => void;
  removeElement?: (target: string) => void;
}

export const PokeListContext = createContext<PokeListContextType>({
  kantoRecords: undefined,
  addKantoRecords: () => Promise.resolve(),
  setNewRegion: () => undefined,

  selectedRecords: [],
  addRecord: () => undefined,
  removeElement: () => undefined
});

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedRecords, setSelectedRecords] = useState<SingleRecord[]>([]);



  const [currentRegion, setCurrentRegion] = useState<string>("");

  const [kantoRecords, setKantoRecords] = useState<SingleRecord[] | undefined>([]);
  const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  console.log(currentRegion);

  const setNewRegion = (newr: string) => {

    setCurrentRegion(newr)
  }

  const addKantoRecords = async (regio: string) => {
    try {
      if (regio) {
        const response = await fetchRegion(regio);
        console.log(response);

        if (response) {
          const recordsWithId = response.data.pokemon_entries.map((props) => {
            const elementId = uuidv4();
            return {
              ...props,
              id: elementId,
              sprite: imageLink + `${props.entry_number}.png`
            };
          });

          setKantoRecords(recordsWithId);
        }
      }
    } catch (error) {
      setKantoRecords([]);
      console.log('Błąd');
      console.log("Error fetching Kanto records: ", error);
    }
  };

  useEffect(() => {
    if (currentRegion) {
      addKantoRecords("1");
    }
  }, [currentRegion]);

  const addRecord = (record: SingleRecord) => {
    if (selectedRecords.length < 3) {
      setSelectedRecords([...selectedRecords, record]);
    }
  };

  const removeElement = (dropTarget: string) => {
    const newArr = selectedRecords.filter((item) => item.id !== dropTarget);
    setSelectedRecords(newArr);
  };

  return (
    <PokeListContext.Provider
      value={{ kantoRecords, addKantoRecords, selectedRecords, addRecord, removeElement, setNewRegion }}
    >
      {children}
    </PokeListContext.Provider>
  );
};
