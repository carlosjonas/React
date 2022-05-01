import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Lp from '../components/ListaPlana';
export default function Principal({navigation}){

  const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Cadastrar"}]
    })
  }

  const acessar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }
  return (
      <View>
        <Text>Produtos</Text>
        <Text>Lista de Produtos</Text>
        <Lp/>
      </View>
  )
  }
