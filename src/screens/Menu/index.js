import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'

export default function Schedule(){

    return (
        <View>
            <View style={styles.containerCat}>
            
            <Image style={styles.cat} source={require('../../../assets/Icons/Cat.png')} />
            </View>
            <View style={styles.containerGreetings}>
            <Text style={styles.text}>Olá,</Text>
            <Text style = {styles.textHighlight}>Usuário <Text style={styles.text}>!</Text></Text>
            </View>


            <View style={styles.containerSchedule}>
            <Text style={styles.textSchedule}>Menu</Text>
            </View>
            <Text style={styles.textSchedule}>----------------------------------------------------------------</Text>

        </View>
    )

}