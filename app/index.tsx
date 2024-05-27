import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "top",
        alignItems: "center",
      }}
    >
      <Text>Encaixe a rotina do seu <Text style = {{color: '#9D7856'}}>pet</Text> na sua!</Text>
    </View>
  );
}
