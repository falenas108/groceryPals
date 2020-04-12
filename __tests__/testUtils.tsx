import React from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {itemSearchContext, useItemSearch} from '../src/context/itemSearchContext';

const AllProviders = ({children}: {children?: React.ReactNode}) => {
    return (
        <itemSearchContext.Provider value={useItemSearch()}>{children}</itemSearchContext.Provider>
    );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, {wrapper: AllProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
