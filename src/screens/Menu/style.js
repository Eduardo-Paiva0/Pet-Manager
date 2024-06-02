import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	screenMenu: {
		flex: 1,
	},
	containerTop: {
		padding: 20,
		marginTop: 30,
		position: "relative",
		height: 300,
	},
    containerLogoff:{
        top: 90,
        alignItems: 'center',
    },
	containerBottom: {
		padding: 20,
		marginTop: 380,
		position: "relative",
		height: 300,
	},

	paws1: {
		position: "absolute",
		top: 0,
		left: 300,
		width: 300,
		height: 300,
	},
	paws2: {
		position: "absolute",
		width: 300,
		height: 300,
	},
	text: {
        marginTop: 40,
		fontSize: 20,
		color: "#000",
		fontWeight: "bold",
	},
    textHighlight: {
		fontSize: 20,
		color: "#9D7856",
		fontWeight: "bold",
	},
    textButton: {
        fontSize: 20,
		color: "#000",
        fontWeight: "bold",
        textAlign: 'center',
    },
    buttonLogOff: {
        marginTop: 50,
        backgroundColor: "#F15252",
        borderRadius: 20,
        padding: 15,
        width: '20%',
    },
});

export default styles;
