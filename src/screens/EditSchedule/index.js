import React, { useEffect, useState, useRef } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';
import { getDatabase, onValue, ref, push, set } from "firebase/database";
const db = getDatabase();
const auth = getAuth();

export default function NewSchedule({navigation, route}){

  const [name, setName] = useState("")
  const [adress, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [petname, setPetName] = useState("")
  const [petage, setPetAge] = useState("")
  const [date, setDate] = useState("")
  const [errorCreateSchedule, setErrorCreateSchedule] = useState(null)

  const nameInputRef = useRef(null)
  const adressInputRef = useRef(null)
  const procedureInputRef = useRef(null)
  const phoneInputRef = useRef(null)
  const petNameInputRef = useRef(null)
  const petAgeInputRef = useRef(null)

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
        editSchedule()
    }
}

    // Função para editar terefa no banco
    const editSchedule = () => {
      const scheduleListRef = ref(db, 'schedules/' + auth.currentUser.uid + '/' + route.params.id); 
      set(scheduleListRef, {
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

    // Função que recupera os dados da terefa do banco e seta nos inputs
    const recuperarDados = () => {
        onValue(ref(db, 'schedules/' + auth.currentUser.uid + '/' + route.params.id), (snapshot) => {
            setName(snapshot.val().name)
            setAdress(snapshot.val().adress)
            setPhone(snapshot.val().phone)
            setDescription(snapshot.val().description)
            setPetName(snapshot.val().petname)
            setPetAge(snapshot.val().petage)
            setDate(snapshot.val().date)
        });
    }

    // Hook que chama da função que recupera dos dados da tarefa do banco logo que a tela é aberta
    useEffect(() => {
        recuperarDados();
    }, [])


    return(
    <View style = {styles.screenNewSchedule}> 
            {errorCreateSchedule != null && (
                <Text style={styles.alert}>{errorCreateSchedule}</Text>
            )}
      <View style = {styles.topContainer}>
            <Text style={styles.text}>Edite seu <Text style = {styles.textHighlight}> agendamento </Text>!</Text>
      </View>
      <View style={styles.containerMid}>
          <Text style={styles.textContainer}>Seu Nome:</Text>
          <TextInput style={styles.input}
          value={name}
          ref={nameInputRef}
          onChangeText={setName}
          onSubmitEditing={() => {
            if (adressInputRef.current) {
                adressInputRef.current.focus();
            }
        }}
          ></TextInput>

          <Text style={styles.textContainer}>Seu Endereço:</Text>
          <TextInput style={styles.input}
          value={adress}
          ref={adressInputRef}
          onChangeText={setAdress}
          ></TextInput>

          <Text style={styles.textContainer}>Seu Telefone:</Text>
          <TextInputMask style={styles.input} placeholder='Ex: (99) 9999-99999'
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(**) '
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
          ref={petNameInputRef}
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