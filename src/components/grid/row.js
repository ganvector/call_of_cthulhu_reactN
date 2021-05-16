import React from "react";
import {View} from "react-native";

import Styles from "./grid.style";

function Row(props) {
  let style = {...Styles.Row};

  if (props.justify) style = setJustifyContent(style, props.justify);

  style = {...style, ...props.style};

  const childrenComProps = props.rowCols
    ? React.Children.map(props.children, (child) =>
        React.cloneElement(child, {rowCols: props.rowCols})
      )
    : props.children;

  return <View style={style}>{childrenComProps}</View>;
}

function setJustifyContent(style, justify) {
  style.justifyContent = justify;

  return style;
}

export default Row;
