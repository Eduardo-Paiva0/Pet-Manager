import React, { useState, useRef } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './style'
const db = getDatabase();

export default function CreateUser({ navigation }) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const validate = () => {
        if (nome == "") {
            setErrorCreateUser("Informe seu nome")
        } else if (email == "") {
            setErrorCreateUser("Informe seu e-mail")
        } else if (password == "") {
            setErrorCreateUser("Informe uma senha")
        } else {
            setErrorCreateUser(null)
            createUser()
        }
    }

    const createUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(db, 'users/' + user.uid), {
                    nome: nome,
                    email: email
                });

                navigation.navigate('Tabs')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorCreateUser(errorMessage)
            });

    }

    return (
        <><View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../../../assets/Icons/Logo.png')} />

        </View><View style={styles.containerText}>
                <Text style={styles.textHighlight}>Pet<Text style={styles.text}>Manager</Text></Text>
            </View><View style={styles.container}>
                {errorCreateUser != null && (
                    <Text style={styles.alert}>{errorCreateUser}</Text>
                )}
                <Text style={styles.headerInput}>Nome</Text>
                <TextInput
                    ref={nameInputRef}
                    style={styles.input}
                    placeholder='Nome'
                    value={nome}
                    onChangeText={setNome}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (emailInputRef.current) {
                            emailInputRef.current.focus();
                        }
                    }}
                    blurOnSubmit={false}
                 />

                <Text style={styles.headerInput}>E-mail</Text>
                <TextInput
                    ref={emailInputRef}
                    style={styles.input}
                    placeholder='E-mail'
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (passwordInputRef.current) {
                           passwordInputRef.current.focus();
                        }
                    }}
                    blurOnSubmit={false}
                 />

                <Text style={styles.headerInput}>Senha</Text>
                <TextInput
                    ref={passwordInputRef}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Senha'
                    value={password}
                    onChangeText={setPassword}
                    returnKeyType="done"
                    onSubmitEditing={validate}
                 />

                <TouchableOpacity
                    style={styles.button}
                    onPress={validate}
                    
                >
                    <Text style={styles.textButton}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>
                <Image style={styles.paws} source={require('../../../assets/Icons/PawsBg.png')} />
            </>
            
            
    )
}