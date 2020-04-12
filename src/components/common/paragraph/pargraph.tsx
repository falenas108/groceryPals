import React from 'react';
import {Text, TextProps} from 'react-native';
import ParagraphStyles from '../../shoppingList/pagagraph.style';

const styles = ParagraphStyles;

const Paragraph = (props: TextProps & {children: React.ReactNode}) => {
    return <Text style={styles.pargraph} {...props} />;
};

export default Paragraph;
