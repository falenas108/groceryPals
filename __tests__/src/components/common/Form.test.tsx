import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Form} from '../../../../src/components/common';

it('Shopping screen renders correctly', () => {
    renderer.create(<Form />);
});
