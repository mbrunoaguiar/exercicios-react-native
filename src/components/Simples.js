import React from 'react'
import { Text } from 'react-native'
import Styles from '../estilo/Styles'

export default function(props){
    return <Text style={Styles.ex}>{props.texto}</Text>    
}

// export default (props) => <Text>Arrow: {props.texto}</Text>
