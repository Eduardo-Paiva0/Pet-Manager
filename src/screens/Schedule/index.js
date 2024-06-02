import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDatabase, onValue, ref } from "firebase/database";
const db = getDatabase();
const auth = getAuth();

export default function Schedule(){
    const [nome, setNome] = useState("")

    const recuperarDados = () => {
        onValue(ref(db, 'users/' + auth.currentUser.uid), (snapshot) => {
            setNome(snapshot.val().nome)
        });
    }

    useEffect(() => {
        recuperarDados();
    }, [])


    return (
        <View style = {styles.screenSchedule}>
            <View style = {styles.containerTop}>
            <Image style={styles.cat} source={require('../../../assets/Icons/Cat.png')} />
            <Text style={styles.text}>Olá,</Text>
            <Text style = {styles.textHighlight}>{nome} <Text style={styles.text}>!</Text></Text>
            </View>

            <View style = {styles.containerSchedule}>
            <Text style={styles.text}>Seus <Text style = {styles.textHighlight}>agendamentos</Text></Text>

            <TouchableOpacity
                style={styles.buttonNewSchedule}
               /* onPress={() => navigation.navigate('Schedule')*} */
            >
            <Text style={styles.textButton}><MaterialCommunityIcons name="alarm-plus" size={30} /> FAÇA AGORA UM AGENDAMENTO </Text>
            </TouchableOpacity>
            </View>



        </View>
    )

}