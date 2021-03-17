import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import enums from './enums';
import Navbar from './navbar/navbar';
import Perfil from './perfil/perfil';
import Ficha from './ficha/ficha'
import {StatusBar} from "expo-status-bar";

import personagem from './personagemTeste.json';

const idioma = 'pt-br';
// const idioma = 'EN-US';

export default function Container() {
    return (
        <View style={styles.container}>
            <Navbar enums={enums[idioma].Navbar}/>
            <Perfil enums={enums[idioma].Perfil} personagem={personagem}/>
            <Ficha enums={enums[idioma].Ficha}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        backgroundColor: '#1A181D',
    },
    text: {
        color: '#EDEDED'
    }
});