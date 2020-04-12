import React, {useContext} from 'react';
import {FormField, ShoppingAutocomplete} from './ShoppingList.view';
import {ItemSearchContext, itemSearchContext} from '../../context/itemSearchContext';
import GroceryItem, {allGroceryItems} from '../../models/GroceryItem';
import {AutocompleteItem} from '../common/autocomplete/autocomplete';

export default ({groceryItems = allGroceryItems}: {groceryItems?: GroceryItem[]}) => {
    const {searchValue, setSearchValue} = useContext<ItemSearchContext>(itemSearchContext);
    return (
        <>
            <FormField
                onChangeText={(text) => {
                    setSearchValue(text);
                }}
                searchValue={searchValue}
            />
            <ShoppingAutocomplete
                isVisible={!!searchValue}
                items={getActiveAutocompleteItems(groceryItems, searchValue)}
                onPress={(item) => {}}
            />
        </>
    );
};

const getActiveAutocompleteItems = (
    grocertyItems: GroceryItem[],
    searchValue: string,
): AutocompleteItem[] => {
    return getFilteredGroceryItems(grocertyItems, searchValue).map(groceryTypeToAutocompleteItem);
};

const getFilteredGroceryItems = (
    grocertyItems: GroceryItem[],
    searchValue: string,
): GroceryItem[] => {
    return grocertyItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
};

const groceryTypeToAutocompleteItem = (item: GroceryItem): AutocompleteItem => {
    return {
        label: item.name,
        id: item.name,
    };
};
