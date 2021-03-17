import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

export default function Navbar(props) {
  return (
    <View style={styles.container}>
      <NomePersonagem nome="Milliardo" />
      <IOOpcoes />
      {/*<StatusBar style="auto" /> */}
    </View>
  );
}

const NomePersonagem = (props) => {
  return <Text style={styles.text}> {props.nome} </Text>;
};

const IOOpcoes = (props) => {
  return (
    <View style={{flexDirection: "row"}}>
      {/*<Icon.Button name='folder' backgroundColor='#1A181D' size={25} onPress={() => console.log('folder')} />*/}
      {/*<Icon.Button name='create' backgroundColor='#1A181D' size={25} onPress={() => console.log('create')} />*/}
      <Botoes
        icone={
          <Icon
            name="folder"
            size={25}
            color="#EDEDEF"
            onPress={() => console.log("onClick pasta")}
          />
        }
      />
      <Botoes
        icone={
          <Icon
            name="create"
            size={25}
            color="#EDEDEF"
            onPress={() => console.log("onClick lapis")}
          />
        }
      />
    </View>
  );
};

const Botoes = (props) => {
  return (
    <TouchableOpacity onPress={props.icone.onPress} underlayColor="blue">
      <View style={styles.botoes}>{props.icone}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "7%",
    backgroundColor: "#1A181D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#EDEDEF",
    fontSize: 20,
  },
  botoes: {
    // backgroundColor: '#00f',
    width: 35,
    height: 35,
    marginLeft: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
