import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    containerCat:{ 
        justifyContent: 'flex-start',
        width: 50,
        height: 50,
    },
    containerGreetings: {
        marginLeft: 30,
    },
    text: {
        fontSize: 40,
        color: '#000'
    },
    textHighlight: {
        fontSize: 40,
        color: '#9D7856',
        fontWeight: 'bold',
    },
    cat: {
        height: 300,
        width: 300,
        marginLeft: 320,
    },
    containerSchedule: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 200,
        marginLeft: 200,
    },
    textSchedule: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
    },
    textHighlightSchedule: {
        fontSize: 24,
        color: '#9D7856',
        fontWeight: 'bold',
    },

})

export default styles