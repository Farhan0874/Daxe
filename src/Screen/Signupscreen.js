import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { firebase } from '../../firebase'

const signupScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    registerUser = async (email, password, firstName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUSer.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://fir-auth-656de.firebaseapp.com',
                })
                    .then(() => {
                        alert('Verification Email Sent')
                    }).catch(() => {
                        alert(error.message)
                    })
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUSer.uid)
                            .set({
                                firstName,
                                lastName,
                                email,
                                password
                            })
                    })
                    .catch((error) => {
                        alert(error.message)
                    })
            })
            .catch((error => {
                alert(error.message)
            }))

    }
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', color: 'white', 'fontSize': 23 }}>Signup for Daxe</Text>
            <View style={{ marginTop: 40 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    placeholderTextColor={'white'}
                    onChange={(firstName) => setFirstName(firstName)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    placeholderTextColor={'white'}
                    onChange={(lastName) => setLastName(lastName)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChange={(email) => setEmail(email)}
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholderTextColor={'white'}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChange={(password) => setPassword(password)}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholderTextColor={'white'}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={{ marginLeft: 70, color: "white" }} onPress={()=> registerUser()}>
                    <Text style={styles.button}> Register</Text>
                </TouchableOpacity>                
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'White',
        backgroundColor: '#00000',
        backgroundColor: 'black'
    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 400,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d9d9d9',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        marginBottom: 10,
        textAlign: 'center'
    },
    text: {
        color: 'black',
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        backgroundColor: '#d9d9d9',
        height: 70,
        width: 250,
        fontSize: 30,
        color: "black",
        backgroundColor: '#00e4d0',
        padding: 15,
        paddingLeft: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default signupScreen

