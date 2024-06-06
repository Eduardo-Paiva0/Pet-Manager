import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDatabase, onValue, ref, push, set } from "firebase/database";
const db = getDatabase();
const auth = getAuth();

export default function EditSchedule({navigation, route}){

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
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.textButtonGoBack}><MaterialCommunityIcons name="arrow-left-thin-circle-outline" size={30} />
              Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Faça seu <Text style = {styles.textHighlight}> agendamento </Text>!</Text>
      </View>
        <View style={styles.containerMid}>
          <Text style={styles.textContainer}>Seu nome:</Text>
          <TextInput style={styles.input}
          value={name}
          onChangeText={setName}
          ></TextInput>

          <Text style={styles.textContainer}>Seu Endereço:</Text>
          <TextInput style={styles.input}
          value={adress}
          onChangeText={setAdress}
          ></TextInput>

          <Text style={styles.textContainer}>Seu Telefone:</Text>
          <TextInput style={styles.input}
          value={phone}
          onChangeText={setPhone}
          ></TextInput>

          <Text style={styles.textContainer}>Procedimento:</Text>
          <TextInput style={styles.input}
          value={description}
          onChangeText={setDescription}
          ></TextInput>

          <Text style={styles.textContainer}>Nome do Pet:</Text>
          <TextInput style={styles.input2}
          value={petname}
          onChangeText={setPetName}
          ></TextInput>

          <Text style={styles.textContainer}>Idade do Pet:</Text>
          <TextInput style={styles.input2}
          value={petage}
          onChangeText={setPetAge}
          ></TextInput>

          <Text style={styles.text}>Escolha a data <Text style = {styles.textHighlight}>do agendamento </Text>!</Text>
          <TextInput placeholder='    Ex:. XX/XX/XXXX' style={styles.input3}
          value={date}
          onChangeText={setDate}
          ></TextInput>

        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity style={styles.ButtonSchedule}
          onPress={validate}
          >
            <Text style={styles.textButtonSchedule}>Editar o agendamento</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}