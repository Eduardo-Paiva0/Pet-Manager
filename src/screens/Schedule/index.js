import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { View, Text, TextInput, TouchableOpacity, Image, Modal, Pressable, Alert, FlatList } from 'react-native'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDatabase, onValue, ref, query, orderByChild, remove } from "firebase/database";
const db = getDatabase();
const auth = getAuth();

export default function Schedule({navigation}){
    const [nome, setNome] = useState("")
    const [schedules, setSchedule] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const deleteSchedule = (id) => {
        return Alert.alert(
            "Excluir Agendamento",
            "Você tem certeza que deseja remover um agendamento?",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Confirmar",
                    // Função que remove tarefa do banco quando o usuário clica na opção "Confirmar" do popup
                    onPress: () => remove(ref(db, 'schedules/' + auth.currentUser.uid + '/' + id))
                }
            ]
        );
    };

    const recuperarDados = () => {
        onValue(ref(db, 'users/' + auth.currentUser.uid), (snapshot) => {
            setNome(snapshot.val().nome)
        });
    }

    useEffect(() => {
        const listSchedule = query(ref(db, 'schedules/' + auth.currentUser.uid), orderByChild('date'));
        onValue(listSchedule, (snapshot) => {
            // Array que vai recer as tarefas para serem listadas
            const list = []
            // Recuperação das tarefas, funciona como um laço
            snapshot.forEach((data) => {
                // Inserção da cada tarefa no array
                list.push({ ...data.val(), id: data.key });

            });
            // Seta o array preenchido no Hook de tarefas para serem listadas
            setSchedule(list)
        });
        recuperarDados();
    }, [])


    return (

        <><View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(!modalVisible)
                } }>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </View><View style={styles.screenSchedule}>
                <View style={styles.containerTop}>
                    <Image style={styles.cat} source={require('../../../assets/Icons/Cat.png')} />
                    <Text style={styles.text}>Olá,</Text>
                    <Text style={styles.textHighlight}>{nome} <Text style={styles.text}>!</Text></Text>
                </View>

                <View style={styles.containerSchedule}>
                    <Text style={styles.text}>Seus <Text style={styles.textHighlight}>agendamentos</Text></Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginTop: 15 }} />
                    </View>




                    <TouchableOpacity
                        style={styles.buttonNewSchedule}
                        onPress={() => navigation.navigate('NewSchedule')}
                    >
                        <Text style={styles.textButton}><MaterialCommunityIcons name="alarm-plus" size={30} /> FAÇA AGORA UM AGENDAMENTO </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                showsVerticalScrollIndicator={false}
                data={schedules}
                renderItem={({ item }) =>
                    <View style={styles.schedule}>
                        <View>
                            <Text style={styles.data}>{item.date}</Text>
                            <Text style={styles.descricao}>{item.petname}</Text>
                            <Text style={styles.descricao}>{item.description}</Text>
                        </View>
                        <View style={styles.action}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EditSchedule', { id: item.id })} //colocar tela de EditSchedule quando puder
                            >
                                <Text style={styles.descricao}><MaterialCommunityIcons name="file-document-edit-outline" size={32} /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => deleteSchedule(item.id)}
                            >
                                <Text style={styles.descricao}><MaterialCommunityIcons name="delete-outline" size={32} /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />




            </View></>
    )

}