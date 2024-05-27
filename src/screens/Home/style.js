import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },

    imagem: {
        width: 300,
        height: 300,
        marginBottom: 20
    },

    text:{
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },

    textHighlight:{
        fontSize: 24,
        color: '#9D7856',
    },

    buttonNext:{
        backgroundColor: '#9D7856',
        padding: 20,
        width: '20%',
        borderRadius: 20,
        marginTop: 30
    },

    textButton:{
        textAlign: 'center',
        fontSize: 35,
        color: '#FFFFFF'
    }
})

export default styles