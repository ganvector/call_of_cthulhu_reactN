import React from 'react';
import { View } from 'react-native';

import Styles from './grid.style'

const GRID_MAX_SIZE = 12;

let STYLE = Styles.Col;

function setWidthDoGrid(size) {
  if (size < 1 || size > GRID_MAX_SIZE) return {}

  const unidade = 100 / GRID_MAX_SIZE;

  return {width: `${unidade * size}%`}
}

export default function Col(props) {

  let gridSize = props.size;

  if (gridSize) STYLE = {...STYLE, ...setWidthDoGrid(gridSize)}

  console.log({STYLE})

  return (<View style={STYLE}>
    {props.children}
  </View>)
};