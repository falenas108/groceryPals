import React, {useContext} from 'react';
import {FormField} from './ShoppingList.view';
import {
    ItemSearchContext,
    itemSearchContext,
} from '../../context/itemSearchContext';

export default () => {
    const {searchValue, setSearchValue} = useContext<ItemSearchContext>(
        itemSearchContext,
    );

    return (
        <FormField onChangeText={setSearchValue} searchValue={searchValue} />
    );
};
