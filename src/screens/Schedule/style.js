import { StyleSheet } from "react-native";
import Schedule from ".";

const styles = StyleSheet.create({
	screenSchedule: {
		flex: 1,
	},
	containerTop: {
        padding: 20,
        marginTop: 30,
		position: "relative",
		height: 300,
	},

    containerSchedule: {
        flex: 1,
        alignItems: 'center'
    },

	cat: {
		position: "absolute",
		top: 0,
		left: 300,
		width: 300,
		height: 300,
	},
	text: {
		fontSize: 40,
		color: "#000",
        fontWeight: "bold",
	},
	textHighlight: {
		fontSize: 40,
		color: "#9D7856",
		fontWeight: "bold",
	},
    textButton:{
        fontSize: 20,
		color: "#000",
        fontWeight: "bold",
        textAlign: 'center',
    },
    buttonNewSchedule: {
        marginTop: 40,
        backgroundColor: "#9D7856",
        borderRadius: 20,
        padding: 15,
        width: '90%',
    },
	
    data: {
        color: '#FFF',
		fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'space-between',    
    },

	schedule: {
		marginTop: 10,
        backgroundColor: "#685543",
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#20120C',
        padding: 5,
        width: '90%',
		alignSelf: 'center',  
        alignContent: 'center',
	},

    scheduleButton: {
        width: '10%'
    },


});

export default styles;
