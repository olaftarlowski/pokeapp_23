import React, { createContext, useEffect, useState } from 'react';
import { SingleRecord } from '../utils/types/pokeList';
import { fetchAllSingleRecords } from '../utils/api';
import { v4 as uuidv4 } from 'uuid';

interface PokeListContextType {
  allSingleRecords: SingleRecord[];
  addAllSingleRecords: () => Promise<void>;

  selectedRecords: SingleRecord[];
  addRecord: (record: SingleRecord) => void;
  removeElement: (target: string) => void;
}

export const PokeListContext = createContext<PokeListContextType>({
  allSingleRecords: [],
  addAllSingleRecords: () => Promise.resolve(),

  selectedRecords: [],
  addRecord: () => undefined,
  removeElement: () => undefined
});

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedRecords, setSelectedRecords] = useState<SingleRecord[]>([]);
  const [allSingleRecords, setAllSingleRecords] = useState<SingleRecord[]>([]);
  const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  const addAllSingleRecords = async () => {
    try {
      const response = await fetchAllSingleRecords();
      if (response) {
        const recordsWithId = response.data.pokemon_entries.map((props) => {
          const elementId = uuidv4();
          return {
            ...props,
            id: elementId,
            sprite: `${imageLink}${props.entry_number}.png`
          };
        });

        setAllSingleRecords(recordsWithId);
      }
    } catch (error) {
      setAllSingleRecords([]);
      console.log('Error fetching all poke records: ', error);
    }
  };

  useEffect(() => {
    if (allSingleRecords.length === 0) {
      addAllSingleRecords();
    }
  }, [allSingleRecords]);

  const addRecord = (record: SingleRecord) => {
    if (selectedRecords.length < 3) {
      setSelectedRecords((prevSelectedRecords) => [...prevSelectedRecords, record]);
    }
  };

  const removeElement = (dropTarget: string) => {
    setSelectedRecords((prevSelectedRecords) =>
      prevSelectedRecords.filter((item) => item.id !== dropTarget)
    );
  };

  return (
    <PokeListContext.Provider
      value={{ allSingleRecords, addAllSingleRecords, selectedRecords, addRecord, removeElement }}
    >
      {children}
    </PokeListContext.Provider>
  );
};
