import React from 'react';
import { View } from 'react-native';

import Styles from './grid.style';

const STYLE = Styles.Row;

export default function Row(props){
  return (<View style={STYLE}>
    {props.children}
  </View>)
};