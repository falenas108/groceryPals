import {createContext, useState, useCallback} from 'react';

export interface ItemSearchContext {
    searchValue: string;
    setSearchValue: (newValue: string) => void;
}

export const initialItemSearchContext: ItemSearchContext = {
    searchValue: '',
    setSearchValue: () => {},
};

export const itemSearchContext = createContext<ItemSearchContext>(
    initialItemSearchContext,
);

export const useItemSearch = (): ItemSearchContext => {
    const [searchValue, setNewSearchValue] = useState<string>('');
    const setSearchValue = useCallback((newSearchValue) => {
        setNewSearchValue(newSearchValue);
    }, []);

    return {searchValue, setSearchValue};
};
