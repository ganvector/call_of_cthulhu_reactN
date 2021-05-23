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
    marginTop: 16, // TODO mudar para 0
    marginRight: (1.5 * REM) / -2,
    marginLeft: (1.5 * REM) / -2,
    backgroundColor: "#ededed",
    border: "1px solid #0000ed", //TODO remover isso aqui depois

  },
  Col: {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "0%",
    backgroundColor: "#d5d5d5", //TODO remover isso aqui depois
    border: "1px solid #ed0000", //TODO remover isso aqui depois
  },
};

export default styles;
export const ContainerStyle = styles.Container;
export const RowStyle = styles.Row;
export const ColStyle = styles.Col;
