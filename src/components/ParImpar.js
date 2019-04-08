import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../estilo/Styles'

function ParouImpar(num){
    if(num % 2 == 0){
        return <Text style={Styles.ex}>{num} é Par</Text>
    }else{
        return <Text style={Styles.ex}>{num} é Impar</Text>        
    }   
}

export default function(props){
    return <View>{ParouImpar(props.numero)}</View>
}