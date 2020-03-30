import React from 'react';
import {View} from 'react-native';
import {Form} from '../common';
import ShoppingViewStyles from './ShoppingList.style';

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
            <Form
                onChangeText={onChangeText}
                testID="searchBar"
                value={searchValue}
            />
        </View>
    );
};
