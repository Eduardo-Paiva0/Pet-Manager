import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDatabase, onValue, ref } from "firebase/database";
const db = getDatabase();
const auth = getAuth();

export default function NewSchedule({navigation}){
    return(
    <View style = {styles.screenNewSchedule}> 
      <View style = {styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.textButtonGoBack}><MaterialCommunityIcons name="arrow-left-thin-circle-outline" size={30} />
              Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Faça seu <Text style = {styles.textHighlight}> agendamento </Text>!</Text>
      </View>
        <View style={styles.containerMid}>
          <Text style={styles.textContainer}>Seu nome:</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.textContainer}>Seu Endereço:</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.textContainer}>Seu Telefone:</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.textContainer}>Procedimento:</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.textContainer}>Nome do Pet:</Text>
          <TextInput style={styles.input2}></TextInput>
          <Text style={styles.textContainer}>Idade do Pet:</Text>
          <TextInput style={styles.input2}></TextInput>
          <Text style={styles.text}>Escolha a data <Text style = {styles.textHighlight}>do agendamento </Text>!</Text>
          <TextInput placeholder='    Ex:. XX/XX/XXXX' style={styles.input3}></TextInput>
        </View>
        <View style={styles.containerBottom}>
          <TouchableOpacity style={styles.ButtonSchedule}>
            <Text style={styles.textButtonSchedule}>Agendar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )/*navigation.navigate('Tabs')*/
}