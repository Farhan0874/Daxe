import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {firebase} from '../../firebase'
import RequestScreen from '../Screen/RequestScreen';
import loginScreen from '../Screen/loginScreen';
import signupScreen from '../Screen/Signupscreen'
import DestinationScreen from '../Screen/DestinationScreen';
import { useState, useEffect } from 'react';



const Home = createNativeStackNavigator();


export function HomeStack(){
const [initializing, setInitializing] = useState(true);
const [user, setUser]= useState();
 function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
 }
 useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
 }, []);
 if (initializing) return null;
 if (!user){
    return(
        <Home.Navigator>
            <Home.Screen 
            name ="LoginSreen"
            component = {loginScreen}
            options ={{headerShown:false}}
            />
            <Home.Screen 
            name ="signupScreen"
            component = {signupScreen}
            options ={{headerShown:false}}
            />
        </Home.Navigator>
    );
 }

    return(
        <Home.Navigator>
            <Home.Screen 
                name ="HomeScreen"
                component = {HomeScreen}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="RequestScreen"
                component = {RequestScreen}
                options ={{headerShown:false}}
            /> 
             <Home.Screen 
                name ="DestinationScreen"
                component = {DestinationScreen}
                options ={{headerShown:false}}
            /> 
        </Home.Navigator>
    )
}