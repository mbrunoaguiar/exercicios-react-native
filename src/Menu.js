import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

const AppNavigator = createBottomTabNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8}></MegaSena>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='REACT NATIVE'></Inverter>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}></ParImpar>
    },
    Simples: {
        screen: () => <Simples texto='Hello World!!'></Simples>
    }
})

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;