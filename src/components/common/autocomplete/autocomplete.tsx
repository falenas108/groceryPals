import {View, FlatList} from 'react-native';
import React from 'react';
import AutocompleteStyles from './autocomplete.style';
import {Pargraph} from '..';

const styles = AutocompleteStyles;

export interface AutocompleteItem {
    label: string;
    id: string;
}

export const Autocomplete = ({
    isVisible,
    items,
    onPressItem,
    testID,
}: {
    isVisible: boolean;
    items: AutocompleteItem[];
    onPressItem: (item: AutocompleteItem) => void;
    testID?: string;
}) => {
    if (!isVisible) {
        return null;
    }

    return <AutocompleteList items={items} onPressItem={onPressItem} testID={testID} />;
};

const AutocompleteList = ({
    items,
    onPressItem,
    testID,
}: {
    items: AutocompleteItem[];
    onPressItem: (item: AutocompleteItem) => void;
    testID?: string;
}) => {
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Item item={item} onPressItem={onPressItem} />}
                testID={testID}
            />
        </View>
    );
};

const Item = ({
    item,
    onPressItem,
}: {
    item: AutocompleteItem;
    onPressItem: (item: AutocompleteItem) => void;
}) => {
    return (
        <View>
            <Pargraph onPress={() => onPressItem(item)}>{item.label}</Pargraph>
        </View>
    );
};
