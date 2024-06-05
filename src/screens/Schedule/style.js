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
	action: {
        flexDirection: 'row'
    },

    data: {
        color: '#FFF',
		fontSize: 18
    },

    descricao: {
        color: '#FFF',
        fontSize: 18
    },
	schedule: {
		marginTop: 10,
        backgroundColor: "#685543",
        borderRadius: 15,
        padding: 10,
        width: '90%',
		alignSelf: 'center',
	}
});

export default styles;
