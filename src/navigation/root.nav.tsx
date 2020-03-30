import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {ShoppingList} from '../components';

export default () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={Routes.ShoppingList}>
            <Stack.Screen
                component={ShoppingList}
                name={Routes.ShoppingList}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    );
};
