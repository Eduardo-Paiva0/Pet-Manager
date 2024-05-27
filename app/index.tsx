import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import styles from './style';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "top",
        alignItems: "center",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
      }}
    >
      <Text style={styles.text}>Encaixe a rotina do seu <Text style = {styles.textHighlight}>pet</Text> na sua!</Text>
      <Image style={styles.imagem} source={require('../assets/Icons/Dog1.png')}/>
      <Text style={styles.text}>Organize os horários de passeio, banho, remédio, suas observações e dietas de cada <Text style = {styles.textHighlight}>pet</Text></Text>

    </View>
  );
}
