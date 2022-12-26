import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  loginuser = async (email, password) => {
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password)
    } catch(error){
      alert(error.message)
    }
  }



  return (
    <View
      style={styles.container}>
      <View>
          <Text style={{fontWeight:'bold',color:'white', fontSize:38}}>Login for Daxe</Text>
      </View>
      <View style={{marginTop:40}}>
        <TextInput style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={'white'}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize='none'
        autoCorrect={false}
        />
        <TextInput style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={'white'}
        onChangeText={(password) => setPassword(password)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        />
      </View>
      <TouchableOpacity 
      onPress={()=> loginuser(email, password)}
      style={styles.button}
      >
        <Text style={{fontWeight:'bold', fontSize:22}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigation.navigate('signupScreen')}
      style={{marginTop:20}}
      >
        <Text style={{fontWeight:'bold',color:'white', fontSize:16}}>Don't have a Account? Register Now</Text>
      </TouchableOpacity>

    </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:"#d9d9d9",
    backgroundColor: 'black'
  },
 textInput:{
  paddingTop:20,
  paddingBottom:10,
  width:400,
  fontSize:20,
  fontWeight:'bold',
  color:'#d9d9d9',
  borderBottomWidth:1,
  borderBottomColor: '#d9d9d9',
  marginBottom:10,
  textAlign:'center'
 },
  button: {
    backgroundColor: '#d9d9d9',
    height:70,
    width: 250,
    color:"#d9d9d9",
    backgroundColor: '#00e4d0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
})