import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3AD8A',
        padding: 40,
        margin: 30,
        borderRadius: 6,
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 10,
        width: 150,
        height: 150,
    },
     dogLogin: {
        width: 610,
        height: 320,
    }, 
    text: {
        fontSize: 40,
        color: '#000'
    },
    textHighlight: {
        fontSize: 40,
        color: '#9D7856',
    },
    alert: {
        fontSize: 18,
        color: '#9D7856',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        borderRadius: 40,
        backgroundColor: '#D9D9D9',
        padding: 15,
        marginBottom: 30,
        width: '100%'
    },
    button: {
        backgroundColor: '#20120C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%'
    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    buttonCreate: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 10,
        width: '100%',
        backgroundColor: '#20120C'
    },
    buttonCreateText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    headerInput: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5
    }
})

export default styles