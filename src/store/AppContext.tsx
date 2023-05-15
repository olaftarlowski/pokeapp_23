import React, { createContext, useState } from 'react';

interface PokeListItem {
    id: number
    name: string
    sprite: string | undefined
}
interface PokeListContextType {
    selectedRecords: PokeListItem[];
    addRecord: (record: PokeListItem) => void;
}

export const PokeListContext = createContext<PokeListContextType>({
    selectedRecords: [],
    addRecord: () => undefined,
});

export const PokeListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedRecords, setSelectedRecords] = useState<PokeListItem[]>([]);

    const addRecord = (record: PokeListItem) => {
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
