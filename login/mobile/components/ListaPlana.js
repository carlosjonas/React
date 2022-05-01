import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const produtos=[
    {
        id:'001',
        desc:['Mouse','Mouse Logitec sem fio','25.00']
    },
    {
        id:'002',
        desc:['Teclado','Teclado Logitec sem fio','30.00']
    },
    {
        id:'003',
        desc:['MousePad','MousePad Logitec 70x30','35.00']
    },
    {
        id:'004',
        desc:['Gabinete','Gabinete Coirsair LED','70.00']
    },
    {
        id:'005',
        desc:['Placa-Mãe','Placa-Mãe AMD 4 slots RAM','35.00']
    },
]


export default function (){

  return (
      <View>
          <FlatList
            data={produtos}
            keyExtractor={item=>item.id}
            renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>Nome: {item.desc[0]} - Descrição: {item.desc[1]} - Valor: {item.desc[2]}</Text></View>}
          
          />
      </View>
  )
  }

  const estilos = StyleSheet.create({
      item:{
          backgroundColor:'#008',
          padding:15,
          marginVertical:8,
          marginHorizontal:16
      },
      prod:{
         fontSize:20,
         color:'#fff'
      }
  })