import React from 'react';
import {Input, InputProps} from 'react-native-elements';
import FormStyles from './Form.style';

const styles = FormStyles;

export default (props: InputProps) => {
    return (
        <Input
            inputContainerStyle={styles.formContainer}
            inputStyle={styles.text}
            {...props}
        />
    );
};
