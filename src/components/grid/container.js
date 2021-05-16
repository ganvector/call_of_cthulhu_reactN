import React from "react";
import {View} from "react-native";

import Styles from "./grid.style";

function Container(props) {
  let style = {...Styles.Container};

  style = {...style, ...props.style};

  return <View style={style}>{props.children}</View>;
}

export default Container;
