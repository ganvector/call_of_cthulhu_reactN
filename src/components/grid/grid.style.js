import {StyleSheet} from "react-native";

const REM = 16;

const styles ={
  Container: {
    width: "100%",
    maxWidth: "95%",
    paddingRight: 0.75*REM,
    paddingLeft: 0.75*REM,
    marginRight: "auto",
    marginLeft: "auto"
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
    marginRight: (1.5*REM / -2),
    marginLeft: (1.5*REM / -2)
  },
  Col: {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "0%"
  }
}

console.log('Container:',styles.Container)

export default styles;
export const ContainerStyle = styles.Container;
export const RowStyle = styles.Row;
export const ColStyle = styles.Col;
