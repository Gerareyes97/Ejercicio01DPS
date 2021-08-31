import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [text1, settext1]=useState('');
  const [text2, settext2]=useState('');
  const [resultado, setresultado]=useState('');

  function sumar(n1, n2){
    var a=parseFloat(n1);
    var b=parseFloat(n2);
    var c=a+b;

    var resul="resultado: "+a+"+"+b+"="+c;
    setresultado(resul);
  }

  function Restar(n1, n2){
    var a=parseFloat(n1);
    var b=parseFloat(n2);
    var c=a-b;

    var resul="resultado: "+a+"-"+b+"="+c;
    setresultado(resul);
  }

  function Multiplicar(n1, n2){
    var a=parseFloat(n1);
    var b=parseFloat(n2);
    var c=a*b;

    var resul="resultado: "+a+"*"+b+"="+c;
    setresultado(resul);
  }

  function Dividir(n1, n2){
    var a=parseFloat(n1);
    var b=parseFloat(n2);
    var c=a/b;

    var resul="resultado: "+a+"/"+b+"="+c;
    setresultado(resul);
  }




  return (
    <View style={styles.container}>
      <Text style= {{padding:15, fontSize:24, backgroundColor:'orange', color:'white', textAlign:'center'}}>
      Suma de dos numeros
      </Text>

      <TextInput style={{
        padding:5,
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:10,
        width:240
        }}
        placeholder='valor 1'
        keyboardType='numeric'
        onChangeText={(text1)=>settext1(text1)}
        ></TextInput>

<TextInput style={{
        padding:5,
        height:40,
        borderColor:'black',
        borderWidth:2,
        marginTop:10,
        width:240
        }}
        placeholder='valor 2'
        keyboardType='numeric'
        onChangeText={(text2)=>settext2(text2)}
        ></TextInput>

        <TouchableOpacity
        style={{height:60,backgroundColor:'blue', marginTop:10}}
        onPress={()=>{sumar(text1, text2)}}
        >
        <Text style={{color:'white', fontSize:24, textAlign:'center'}}>Sumar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{height:60,backgroundColor:'blue', marginTop:10}}
        onPress={()=>{Restar(text1, text2)}}
        >
        <Text style={{color:'white', fontSize:24, textAlign:'center'}}>Restar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{height:60,backgroundColor:'blue', marginTop:10}}
        onPress={()=>{Multiplicar(text1, text2)}}
        >
        <Text style={{color:'white', fontSize:24, textAlign:'center'}}>Multiplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{height:60,backgroundColor:'blue', marginTop:10}}
        onPress={()=>{Dividir(text1, text2)}}
        >
        <Text style={{color:'white', fontSize:24, textAlign:'center'}}>Dividir</Text>
        </TouchableOpacity>
        
        <Text style={{fontSize:32}}>
          {resultado}
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
