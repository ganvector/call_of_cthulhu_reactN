import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import foto from '../tchulhito.png'

export default function Perfil(props) {
  return (
    <View style={styles.container}>
      <Row>
        <Col>
          <View
            style={{width: 130, height: 130, backgroundColor: "#000"}}
          >
            <Image source={foto} style={{width: 130, height: 130, backgroundColor: '#fff'}}></Image>
          </View>
        </Col>
        <Col
          style={{alignSelf: 'stretch'}}
        >
          <Medidor tipo="saude" max={props.personagem.saudeMax} atual={props.personagem.saude} />
          <Medidor tipo='poder' max={100} atual={props.personagem.pontosDeMagia}/>
          <Medidor tipo='sanidade' max={100} atual={props.personagem.sanidade}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Mini Icone Cthulhu</Text>
        </Col>
        <Col>
          <Text style={{fontSize: 13, color: '#E0E0E0'}}>{props.personagem.ocupacao}</Text>
        </Col>
      </Row>
    </View>
  );
}

const Medidor = (props) => {
  const corBackgroundPadrao = "#34313A";

  let atributos = {
    saude: {nome: "Saúde", color: "#f74e51", icone: 'heart'},
    poder: {nome: "Poder", color: "#45A8DA", icone: "star"},
    sanidade: {nome: "Sanidade", color: "#FFa623", icone: 'brain'},
  };

  /**
   * @property {string} nome nome do atributo
   * @property {string} color cor do atributo
   * @property {string} icone icone do atributo
   */
  let atributo = atributos[props.tipo];

  let max = props.max;
  let atual = props.atual;

  let tamanho = `${Math.floor(atual * 100 / max)}%`
  let icone

  return (
    <Row style={{marginBottom: 12}} onLongPress={() => console.log('Abrir calculadora de', atributo.nome)}>
      <Col style={{ width: "75%"}}>
        <Row>
          <Col>
            <Icon style={{ marginRight: 5, marginLeft: 5}}
                name={atributo.icone}
                size={25}
                color={atributo.color}
                  solid
            />
          </Col>
          <Col style={{width: "100%"}}>
            <Row>
              <Col style={{width: "100%"}}>
                <View
                    style={{
                      width: '100%',
                      height: 10,
                      backgroundColor: corBackgroundPadrao,
                      borderRadius: 30,
                      position: 'absolute'
                    }}
                />
                <View
                    style={{
                      width: tamanho,
                      height: 10,
                      backgroundColor: atributo.color,
                      borderRadius: 30,
                      position: "absolute",
                    }}
                />
              </Col>
            </Row>
            <Row style={{marginTop: 12, justifyContent: "space-between"
            }}>
              <Col>
                <Text style={{color: '#898191'}}>
                  {props.atual}/{props.max}
                </Text>
              </Col>
              <Col>
                <Text style={{color: '#898190'}}>{atributo.nome}</Text>
              </Col>
            </Row>

          </Col>

        </Row>

      </Col>
    </Row>
  );
};

const medidorTextColor = "#888290";

const Row = (props) => {
  let style = {
    flexDirection: "row",
    ...props.style
  }
  return <View style={style}>{props.children}</View>;
};

const Col = (props) => {
  let style = {
    flexDirection: "column",
    ...props.style
  }
  return <View style={style}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: "20%",
    // backgroundColor: "#0F0",
    backgroundColor: "#1A181D",
  },
});
