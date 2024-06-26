import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3AD8A',
        padding: 30,
        margin: 30,
        borderRadius: 6
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    text : {
        fontSize: 40,
        color: '#000'
    },
    textHighlight: {
        fontSize: 40,
        color: '#9D7856',
    },
    alert: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        borderRadius: 40,
        backgroundColor: '#D9D9D9',
        padding: 15,
        marginBottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: '#20120C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        marginTop: 30,
    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    buttonCreateText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    headerInput: {
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    paws: {
        height: 350,
        width: 350,
    }
})

export default styles