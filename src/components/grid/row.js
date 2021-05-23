import React from "react";
import {View} from "react-native";

import Styles from "./grid.style";

function Row(props) {
  let style = {...Styles.Row};

  if (props.justify) style = setJustifyContent(style, props.justify);
  if (props.align) style = setAlignItems(style, props.align)

  style = {...style, ...props.style};

  const childrenComProps = props.rowCols
    ? React.Children.map(props.children, (child) =>
        React.cloneElement(child, {rowCols: props.rowCols})
      )
    : props.children;

  return <View style={style}>{childrenComProps}</View>;
}

function setJustifyContent(style, justify) {
  style.justifyContent = `flex-${justify}`;

  if (justify === "center") style.justifyContent = "center";
  if (/around|between|evenly/) style.justifyContent = `space-${justify}`;

  return style
}

function setAlignItems(style, align) {
  style.alignItems = `flex-${align}`;

  if (align === "center") style.alignItems = "center";

  return style
}

export default Row;
