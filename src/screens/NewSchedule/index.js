import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDatabase, onValue, ref, push, set } from "firebase/database";
import { MaskedTextInput } from 'react-native-mask-text';
import { TextInputMask } from 'react-native-masked-text';
const db = getDatabase();
const auth = getAuth();

export default function NewSchedule({navigation}){

  const [name, setName] = useState("")
  const [adress, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [petname, setPetName] = useState("")
  const [petage, setPetAge] = useState("")
  const [date, setDate] = useState("")
  const [errorCreateSchedule, setErrorCreateSchedule] = useState(null)

  const validate = () => {
    if (name == "") {
      setErrorCreateSchedule("Informe o seu nome")
    } else if (adress == "") {
      setErrorCreateSchedule("Informe o seu endereço")
    } else if (phone == "") {
      setErrorCreateSchedule("Informe o seu telefone")
    } else if (description == "") {
      setErrorCreateSchedule("Informe o procedimento")
    } else if (petname == "") {
      setErrorCreateSchedule("Informe o nome do pet")
    } else if (petage == "") {
      setErrorCreateSchedule("Informe a idade do pet")
    } else if (date == "") {
      setErrorCreateSchedule("Informe a data do agendamento")
    } else {
      setErrorCreateSchedule(null)
        createSchedule()
    }
}

    // Função para criar terefa no banco
    const createSchedule = () => {
      // Obtem a referência do nó "tasks" do usuário que tá logado
      // "auth.currentUser.uid" é o id o usuário no banco
      const scheduleListRef = ref(db, 'schedules/' + auth.currentUser.uid); //criar nó schedules em index Schedule
      // Define uma id para a nova tarefa
      const newScheduleRef = push(scheduleListRef);
      // Cria a tarefa no banco
      set(newScheduleRef, {
          name: name,
          adress: adress,
          phone: phone,
          description: description,
          petname: petname,
          petage: petage,
          date: date,
      });
      navigation.navigate('Tabs')
  }


    return(
    <View style = {styles.screenNewSchedule}> 
            {errorCreateSchedule != null && (
                <Text style={styles.alert}>{errorCreateSchedule}</Text>
            )}
      <View style = {styles.topContainer}>
            <Text style={styles.text}>Faça seu <Text style = {styles.textHighlight}> agendamento </Text>!</Text>
      </View>
        <View style={styles.containerMid}>
          <Text style={styles.textContainer}>Seu nome:</Text>
          <TextInput style={styles.input}
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => {
            if (procedureInputRef.current) {
                procedureInputRef.current.focus();
            }
        }}
          ></TextInput>

          <Text style={styles.textContainer}>Seu Endereço:</Text>
          <TextInput style={styles.input}
          value={adress}
          onChangeText={setAdress}
          ></TextInput>

          <Text style={styles.textContainer}>Seu Telefone:</Text>

          <TextInputMask style={styles.input} placeholder='Ex: (75) 9885-18251'
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(75) '
          }}
          ref={phoneInputRef}
          value={phone}
          returnKeyType="next"
          onSubmitEditing={() => {
            if (procedureInputRef.current) {
                procedureInputRef.current.focus();
            }
        }}
          onChangeText={setPhone}
          ></TextInputMask>


          <Text style={styles.textContainer}>Procedimento:</Text>
          <TextInput style={styles.input}
          ref={procedureInputRef}
          value={description}
          returnKeyType="next"
          onSubmitEditing={() => {
            if (petNameInputRef.current) {
                petNameInputRef.current.focus();
            }
        }}
          onChangeText={setDescription}
          ></TextInput>

          <Text style={styles.textContainer}>Nome do Pet:</Text>
          <TextInput style={styles.input2}
          value={petname}
          returnKeyType="next"
          onSubmitEditing={() => {
            if (petAgeInputRef.current) {
              petAgeInputRef.current.focus();
            }
          }}
          onChangeText={setPetName}
          ></TextInput>

          <Text style={styles.textContainer}>Idade do Pet:</Text>
          <TextInput style={styles.input2} placeholder= 'Ex: 3 Meses'
          ref={petAgeInputRef}
          value={petage}
          returnKeyType="next"
          onChangeText={setPetAge}
          ></TextInput>

          <Text style={styles.text}>Escolha a data <Text style = {styles.textHighlight}>do agendamento </Text>!</Text>

          <TextInputMask placeholder='    Ex:. XX/XX/XXXX' style={styles.input3} maxLength={10}
          type={'datetime'}
          options={{
            dateFormat: 'DD/MM/YYYY',
          }}
          ref={dateInputRef}
          value={date}
          onChangeText={setDate}
          returnKeyType="done"
          onSubmitEditing={validate}
          ></TextInputMask>
        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity style={styles.ButtonSchedule}
          onPress={validate}
          >
            <Text style={styles.textButtonSchedule}>Agendar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}