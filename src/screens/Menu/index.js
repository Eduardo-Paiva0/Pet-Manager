import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Schedule({navigation}){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    const recuperarDados = () => {
        onValue(ref(db, 'users/' + auth.currentUser.uid), (snapshot) => {
            setNome(snapshot.val().nome)
            setEmail(snapshot.val().email)
        });
    }

    useEffect(() => {
        recuperarDados();
    }, [])

    const logoff = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style = {styles.screenMenu}>
            <View style = {styles.containerTop}>
            <Text style = {styles.text}>Usuário:  <Text style = {styles.textHighlight}> {nome} </Text></Text>
            <Text style = {styles.text}>E-mail: <Text style = {styles.textHighlight}> {email}</Text></Text> 
            <Image style={styles.paws1} source={require('../../../assets/Icons/PawsBg.png')} />
            <View style = {styles.containerLogoff}>
            <TouchableOpacity
                style={styles.buttonLogOff}
                onPress={logoff}
            >
            <Text style={styles.textButton}> Sair <MaterialCommunityIcons name="door-open" size={30} /></Text>
            </TouchableOpacity>
            </View>
            </View>
            <View style = {styles.containerBottom}>
            <Image style={styles.paws2} source={require('../../../assets/Icons/PawsBg.png')} />
            </View>
        </View>
    )

}