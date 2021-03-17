import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ficha(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.enums}</Text>
            {/*<StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
    },
    text: {
        color: '#000'
    }
});