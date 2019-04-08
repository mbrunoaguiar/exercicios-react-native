import React, {Component} from 'react';
import{ View, StyleSheet } from 'react-native';

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default class App extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Simples texto='Hello World!!!'></Simples>
                <ParImpar numero={31}></ParImpar>
                <Inverter texto='REACT NATIVE'></Inverter>
                <MegaSena numeros={6}></MegaSena>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})