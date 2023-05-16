import React, { createContext, useState } from 'react';
import { PokeListSingle } from '../utils/types/pokeList';

interface PokeListContextType {
    selectedRecords: PokeListSingle[];
    addRecord: (record: PokeListSingle) => void;
}

export const PokeListContext = createContext<PokeListContextType>({
    selectedRecords: [],
    addRecord: () => undefined,
});

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedRecords, setSelectedRecords] = useState<PokeListSingle[]>([]);

    const addRecord = (record: PokeListSingle) => {
        if (selectedRecords.length < 3) {
            setSelectedRecords([...selectedRecords, record]);
        }
    };

    return (
        <PokeListContext.Provider value={{ selectedRecords, addRecord }}>
            {children}
        </PokeListContext.Provider>
    );
};
