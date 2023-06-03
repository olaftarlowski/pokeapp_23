import React, { createContext, useEffect, useState } from 'react';
import { SingleRecord } from '../utils/types/pokeList';
import { fetchAllSingleRecords } from '../utils/api';
import { v4 as uuidv4 } from 'uuid';

interface PokeListContextType {
  kantoRecords: SingleRecord[] | undefined;
  addKantoRecords: () => Promise<void>;

  selectedRecords: SingleRecord[];
  addRecord: (record: SingleRecord) => void;
  removeElement?: (target: string) => void;
}

export const PokeListContext = createContext<PokeListContextType>({
  kantoRecords: undefined,
  addKantoRecords: () => Promise.resolve(),

  selectedRecords: [],
  addRecord: () => undefined,
  removeElement: () => undefined
});

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedRecords, setSelectedRecords] = useState<SingleRecord[]>([]);


  const [kantoRecords, setKantoRecords] = useState<SingleRecord[]>([]);
  const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


  const addKantoRecords = async () => {
    try {
      const response = await fetchAllSingleRecords();
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

    } catch (error) {
      setKantoRecords([]);
      console.log('ERRORRR');
      console.log("Error fetching Kanto records: ", error);
    }
  };

  useEffect(() => {

    if (kantoRecords.length === 0) {
      addKantoRecords();
    }


  }, []);

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
      value={{ kantoRecords, addKantoRecords, selectedRecords, addRecord, removeElement }}
    >
      {children}
    </PokeListContext.Provider>
  );
};
