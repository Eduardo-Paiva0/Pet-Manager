import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Schedule({navigation}){

    return (
        <View style = {styles.screenMenu}>
            <View style = {styles.containerTop}>
            <Text style = {styles.text}>Usuário:  <Text style = {styles.textHighlight}> Usuário </Text></Text>
            <Text style = {styles.text}>E-mail: <Text style = {styles.textHighlight}> exemplo@gmail.com</Text></Text> 
            <Image style={styles.paws1} source={require('../../../assets/Icons/PawsBg.png')} />
            <View style = {styles.containerLogoff}>
            <TouchableOpacity
                style={styles.buttonLogOff}
                onPress={() => navigation.navigate('Login')}
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