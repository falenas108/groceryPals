import 'react-native';
import React from 'react';
import {fireEvent, RenderResult, NativeTestInstance} from '@testing-library/react-native';
import {ShoppingList} from '../../../src/components';
import {render} from '../../testUtils';
import mockGroceryItems from '../../mockModels/groceryItems';

describe('Shopping List Page', () => {
    let cut: RenderResult;
    let searchBar: NativeTestInstance;
    let autoComplete: NativeTestInstance;
    beforeAll(() => {
        cut = render(<ShoppingList groceryItems={mockGroceryItems} />);
    });

    test('Page renders', () => {
        expect(cut.asJSON).toBeTruthy();
    });

    describe('Search bar functionality', () => {
        beforeAll(() => {
            searchBar = cut.getByTestId('searchBar');
        });

        test('Contains search bar form', () => {
            expect(searchBar).toBeTruthy();
        });

        test('If you type a character in the search bar, that character is shown in the search bar', () => {
            fireEvent.changeText(searchBar, 'bana');
            expect(searchBar.props.value).toEqual('bana');
        });

        describe('Autocomplete functionality', () => {
            test('Autocomplete list should not have children when the search bar is empty', () => {
                fireEvent.changeText(searchBar, '');
                autoComplete = cut.queryByTestId('shoppingAutoComplete')!;

                expect(autoComplete?.children[0]?.toString()).toBeUndefined();
            });

            test('If you type in a letter, auto complete items show up which match the query', () => {
                fireEvent.changeText(searchBar, 'bana');
                autoComplete = cut.getByTestId('shoppingAutoComplete');

                expect(autoComplete).toBeTruthy();
                expect(cut.queryByText('Banana')).toBeTruthy();
                expect(cut.queryByText('provolone')).toBeFalsy();
            });
        });
    });
});
