import React from 'react';
import {render, RenderOptions} from 'react-native-testing-library';
import {
    itemSearchContext,
    useItemSearch,
} from '../src/context/itemSearchContext';

const AllProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <itemSearchContext.Provider value={useItemSearch()}>
            {children}
        </itemSearchContext.Provider>
    );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, {wrapper: AllProviders, ...options});

// re-export everything
export * from 'react-native-testing-library';

// override render method
export {customRender as render};
