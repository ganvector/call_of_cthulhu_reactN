import React from 'react';
import { View } from 'react-native';

import Styles, {ContainerStyle} from './grid.style';

let STYLE = Styles.Container;

/**
 * Container basico
 * @param props
 * @param style.props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Container(props) {
  console.log('Style:',Styles)
  console.log(ContainerStyle.width)

  STYLE = {...STYLE, ...props.style}

  return (
    <View style={STYLE} id={props.id}>
      {props.children}
    </View>
  )
};