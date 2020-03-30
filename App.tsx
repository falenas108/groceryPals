import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation';
import {
    itemSearchContext,
    useItemSearch,
} from './src/context/itemSearchContext';

const App = () => {
    const itemSearch = useItemSearch();

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <itemSearchContext.Provider value={itemSearch}>
                    <RootNavigator />
                </itemSearchContext.Provider>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
