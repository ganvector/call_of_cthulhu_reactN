import {StyleSheet} from "react-native";

const REM = 16;

const styles = {
  Container: {
    width: "100%",
    maxWidth: "95%",
    paddingRight: 0.75 * REM,
    paddingLeft: 0.75 * REM,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#eee", //TODO remover isso aqui depois
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
    marginRight: (1.5 * REM) / -2,
    marginLeft: (1.5 * REM) / -2,
    backgroundColor: "#aaa",
  },
  Col: {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "0%",
    border: "1px solid black", //TODO remover isso aqui depois
  },
};

export default styles;
export const ContainerStyle = styles.Container;
export const RowStyle = styles.Row;
export const ColStyle = styles.Col;
