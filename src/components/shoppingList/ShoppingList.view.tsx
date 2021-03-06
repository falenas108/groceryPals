import React from 'react';
import {View} from 'react-native';
import {Form} from '../common';
import ShoppingViewStyles from './ShoppingList.style';
import {AutocompleteItem, Autocomplete} from '../common/autocomplete/autocomplete';

const style = ShoppingViewStyles;

export const FormField = ({
    onChangeText,
    searchValue,
}: {
    onChangeText: (text: string) => void;
    searchValue: string;
}) => {
    return (
        <View style={style.rootContainer}>
            <Form onChangeText={onChangeText} testID="searchBar" value={searchValue} />
        </View>
    );
};

export const ShoppingAutocomplete = ({
    isVisible,
    items,
    onPress,
}: {
    isVisible: boolean;
    items: AutocompleteItem[];
    onPress: (item: AutocompleteItem) => void;
}) => {
    return (
        <View>
            <Autocomplete
                testID="shoppingAutoComplete"
                isVisible={isVisible}
                items={items}
                onPressItem={onPress}
            />
        </View>
    );
};
