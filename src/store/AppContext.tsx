import React, { createContext, useState } from 'react';
import { PokeListSingle } from '../utils/types/pokeList';

interface PokeListContextType {
    selectedRecords: PokeListSingle[];
    addRecord?: (record: PokeListSingle) => void;
    removeElement?:((target:string) => void) ;
}

export const PokeListContext = createContext<PokeListContextType>({
    selectedRecords: [],
    addRecord: () => undefined,
    removeElement: () => undefined
});

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedRecords, setSelectedRecords] = useState<PokeListSingle[]>([]);

    const addRecord = (record: PokeListSingle) => {
        if (selectedRecords.length < 3) {
            setSelectedRecords([...selectedRecords, record]);
        }
    };

    const removeElement=(dropTarget:string) =>{
      const newArr=  selectedRecords.filter((item) => item.id !== dropTarget)
    // const newArr=  selectedRecords.filter((item) => item.id !== dropTarget)
      setSelectedRecords(newArr);
};

    return (
        <PokeListContext.Provider value={{ selectedRecords, addRecord, removeElement }}>
            {children}
        </PokeListContext.Provider>
    );
};
