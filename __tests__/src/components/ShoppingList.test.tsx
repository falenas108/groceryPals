import 'react-native';
import React from 'react';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import {ReactTestInstance} from 'react-test-renderer';
import {ShoppingList} from '../../../src/components';
import {render} from '../../testUtils';

describe('Shopping List Page', () => {
    let cut: RenderAPI;
    let searchBar: ReactTestInstance;
    beforeAll(() => {
        cut = render(<ShoppingList />);
    });

    test('Page renders', () => {
        expect(cut.toJSON()).toBeTruthy();
    });

    describe('Search bar functionality', () => {
        beforeAll(() => {
            searchBar = cut.queryByTestId('searchBar') as ReactTestInstance;
        });

        test('Contains search bar form', () => {
            expect(searchBar).toBeTruthy();
        });

        test('If you type a character in the search bar, that character is shown in the search bar', async () => {
            fireEvent.changeText(searchBar, 'bana');
            expect(searchBar.props.value).toEqual('bana');
        });
    });
});
