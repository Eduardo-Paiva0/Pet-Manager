import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import styles from './style';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}
    >
      <Text style={styles.text}>Bem vindo ao <Text style = {styles.textHighlight}>PetManager</Text></Text>
      <Image style={styles.imagem} source={require('../../../assets/Icons/Dog1.png')}/>
      <Text style={styles.text}>Agende um horário pro seu <Text style = {styles.textHighlight}>pet</Text> !</Text>

      <TouchableOpacity style={styles.buttonNext}
      onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}> > </Text>
                
      </TouchableOpacity>

    </View>
  );
}
