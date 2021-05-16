import React from "react";
import {View} from "react-native";

import Styles from "./grid.style";

const GRID_MAX_SIZE = 12;

function Col(props) {
  let style = {...Styles.Col};

  if (props.rowCols) style = setRowCols(style, props.rowCols);

  if (props.size) style = setWidthGrid(style, props.size);

  style = {...style, ...props.style};

  return <View style={style}>{props.children}</View>;
}

function setWidthGrid(style, size) {
  if (size < 1 || size > GRID_MAX_SIZE) return style;

  const unidade = 100 / GRID_MAX_SIZE;

  let width = typeof size === "number" ? `${unidade * size}%` : size;

  style.width = width;
  style.flexGrow = 0;
  style.flexShrink = 0;
  style.flexBasis = "auto";

  return style;
}

function setRowCols(style, rowCols) {
  style.flexGrow = 0;
  style.flexShrink = 0;

  if (!rowCols || rowCols === "auto") {
    style.width = "auto";
    style.flexBasis = "auto";
  }

  if (typeof rowCols === "number") {
    style.flexBasis = style.width;
    style.width = `${100 / rowCols}%`;
  }

  return style;
}

export default Col;
