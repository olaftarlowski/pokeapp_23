import React, { createContext, useContext, useEffect, useState } from 'react';
import { ApiData, ApiDataReceived, PokeListSingle } from '../utils/types/pokeList';
import { fetchRegionKanto } from '../utils/api';

interface PokeListContextType {
    kantoRecords: ApiDataReceived | undefined;
    addKantoRecords?: (data: ApiData | undefined) => void;

    selectedRecords: PokeListSingle[];
    addRecord?: (record: PokeListSingle) => void;
    removeElement?: ((target: string) => void);
}

export const PokeListContext = createContext<PokeListContextType>({
    kantoRecords: undefined,
    addKantoRecords: () => undefined,

    selectedRecords: [],
    addRecord: () => undefined,
    removeElement: () => undefined
});

export const usePokeListContext = () => useContext(PokeListContext);

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedRecords, setSelectedRecords] = useState<PokeListSingle[]>([]);

    const [kantoRecords, setKantoRecords] = useState<ApiData | undefined>(undefined);

    const addKantoRecords = async () => {
        try {
          const response = await fetchRegionKanto();
          if (response) {
            setKantoRecords(response.data);
          }
        } catch (error) {
          console.log("Error fetching Kanto records: ", error);
        }
      };
    
      useEffect(() => {
        addKantoRecords();
      }, []);

    // const addKantoRecords = (data: ApiData | undefined) => {
    //     if (kantoRecords) {
    //         setKantoRecords(data)
    //     }
    // }

    const addRecord = (record: PokeListSingle) => {
        if (selectedRecords.length < 3) {
            setSelectedRecords([...selectedRecords, record]);
        }
    };

    const removeElement = (dropTarget: string) => {
        const newArr = selectedRecords.filter((item) => item.id !== dropTarget)
        setSelectedRecords(newArr);
    };

    return (
        <PokeListContext.Provider value={{ kantoRecords, addKantoRecords, selectedRecords, addRecord, removeElement }}>
            {children}
        </PokeListContext.Provider>
    );
};
