import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Login({navigation}){

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
    <KeyboardAvoidingView style= {styles.background}>
      <View style= {styles.containerLogo}>
        <Image source = {require('../src/assets/logo.png')}/>
      </View>

      <View style= {styles.container}>
        <TextInput style= {styles.input} 
        placeholder = "Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput style= {styles.input} 
        placeholder = "Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style= {styles.btnSubmit} onPress={() => acessar(navigation)}>
          <Text style= {styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styles.btnRegister} onPress={() => cadastrar(navigation)}>
          <Text style= {styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },

  containerLogo:{
    flex: 1,
    alignItems: 'center',
    marginTop: 200
  },

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },

  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText:{
    color: '#FFF',
    fontSize: 18
  },

  btnRegister:{
    marginTop: 10,
  },

  registerText:{
    color: '#FFF',
  },
});